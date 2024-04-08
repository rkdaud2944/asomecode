import eventbus from "@/globals/eventbus";
import windows from "@/globals/windows";
import router from "@/router";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

    if (data.startsWith("### System.Start.View")) editorControl.clearLines();
    else if (data.startsWith("### System.End.View"))   editorControl.openEditor();
    else editorControl.addLine(data);
});

let startToView = false;
let lines = [];
let editor = [];

/**
 * 코드 에디터와 관련된 Event를 처리한다.
 */
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
        const route = router.resolve({ path: '/editor' });
        startToView = false;
        localStorage.setItem("code", lines.join("\n"));
        windows.open('editor', '/editor');
        editor['editor'] = window.open(route.href, 'editor', 'width=800,height=600'); // 400 300

    },
};

export default editorControl;