import config from "@/config";
import axios from "axios";
import serial from "./serial";
import eventbus from "@/utils/eventbus";
import boardFileManager from "@/utils/board-file-manager";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;
    if (!data.startsWith("### AsomeCODE.Version:")) return;

    updateBoard.updateFile(data);
});

let versions = [];
let filenameQue = [];
let tobeDowndloads = [];

const updateBoard = {
    async start() {
        serial.runCode(codeGetVersion);

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
            console.log("tobeDowndloads", tobeDowndloads);
            for (let i = 0; i < tobeDowndloads.length; i++) {
                boardFileManager.download(tobeDowndloads[i]);
            }
            return;
        }

        const filename = filenameQue.shift();
        getFileVersion(filename);
    },
};

export default updateBoard;

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