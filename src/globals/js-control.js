import eventbus from "@/globals/eventbus";
import windows from "@/globals/windows";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

    console.log("jsControl", data);
    if (data.startsWith("### System.Line.RunJS")) jsControl.run(data);
});

window.run_cmd = function (cmd) {
    if (cmd.startsWith("Code=ShowSimulation")) openSimulator(cmd);
};

/**
 * 코드 에디터와 관련된 Event를 처리한다.
 */
const jsControl = {
    init() {

    },

    run(line) {
        try {
            line = line.split(":");
            line = line[1].trim();
        } catch (error) {
            console.log(error);
            return;
        }

        try {
            eval(line);            
        } catch (error) {
            console.log(error);            
        }
        windows.runJS("simulator", line);
    },

};

export default jsControl;

function openSimulator(cmd) {
    let page = "";
    try {
        page = cmd.split("=")[2];
        page = page.replaceAll("/", "");
    } catch (error) {
        // TODO: 에러 처리
        console.log(error);
        return;
    }

    // TODO: 시물레이터 크기에 맞춰서 윈도우 크기 조절
    windows.open('simulator', `/common/simulation/${page}/index.html`);
}