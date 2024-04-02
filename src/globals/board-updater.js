/**
 * 서버와 보드의 파이썬 파일 버전을 비교하여 보드에 업데이트가 필요한 파일 리스트를 작성하고
 * BoardFileManager에게 다운로드를 요청한다.
 */

import config from "@/globals/config";
import axios from "axios";
import serial from "./serial";
import eventbus from "@/globals/eventbus";
import boardFileManager from "@/globals/board-file-manager";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

    if (data.startsWith("### AsomeCODE.Version:")) boardUpdater.updateFile(data);
    if (data.startsWith("### Get Remote File List")) boardUpdater.getRemoteFileList();
});

let versions = [];
let filenameQue = [];
let tobeDowndloads = [];

/**
 * 어썸보드를 업데이트 한다.
 * 업데이트 대상의 파일을 찾아내고, 실제 업데이트는 BoardFileManager에게 위임한다.
 */
const boardUpdater = {
    async start() {
        await serial.runCode(codeGetVersion);
        serial.writeLn('print("### Get Remote File List")');
    },

    async getRemoteFileList() {
        versions = [];
        filenameQue = [];
        tobeDowndloads = [];
        const remoteVersions = await getRemoteFileList();
        for (const filename in remoteVersions) {
            const fileInfo = remoteVersions[filename];
            versions.push(`${filename}=${fileInfo.Version}`);
            filenameQue.push(filename);
        }
        this.nextFile();
    },

    updateFile(verInfo) {
        try {
            verInfo = verInfo.split(":");
            verInfo = verInfo[1].trim();
        } catch (error) {
            console.log(error);
            return;
        }
        if (!versions.includes(verInfo)) tobeDowndloads.push(verInfo.split("=")[0]);
        this.nextFile();
    },

    nextFile() {
        if (filenameQue.length == 0) {
            boardFileManager.download(tobeDowndloads);
            return;
        }

        const filename = filenameQue.shift();
        getFileVersion(filename);
    },
};

export default boardUpdater;

async function getRemoteFileList() {
    try {
        const response = await axios.request(config.pythonUrl() + "versions.json");
        return response.data;
    } catch (error) {
        console.log(error);
    }
    return {};
}

function getFileVersion(filename) {
    serial.writeLn(`getVersion("${filename}")`);
}

const codeGetVersion = `
def getVersion(filename):
    global f
    try:
        f = open(filename)
        line = f.readline()
        if line == "":
            raise Exception("파일이 비어있습니다.")
        print(line)
        f.close()
    except:
        print("### AsomeCODE.Version: %s=x: End." % filename)
    f = None
`;