import eventbus from "@/globals/eventbus";
import windows from "@/globals/windows";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

         if (data.startsWith("### System.Start.View")) editorControl.clearLines();
    else if (data.startsWith("### System.End.View"))   editorControl.openEditor();
    else editorControl.addLine(data);
});

let startToView = false;
let lines = [];

const editorControl = {
    init() {

    },

    clearLines() {
        lines = [];
        startToView = true;
    },

    addLine(line) {
        if (startToView) lines.push(line.substr(2));
    },

    openEditor() {
        startToView = false;
        localStorage.setItem("code", lines.join("\n"));
        windows.open('editor', '/editor');
    },
};

export default editorControl;