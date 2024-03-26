import eventbus from "@/globals/eventbus";
// import windows from "@/globals/windows";
import serial from "@/globals/serial";

// let simulator = [];

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

    // console.log("jsControl", data);
    if (data.startsWith("### System.Line.RunJS")) jsControl.run(data);
    if (data.startsWith("### Sound Streaming")) jsControl.sound(data);
});

window.run_cmd = function (cmd) {
    console.log('simulation cmd : '+cmd)
    if (cmd.startsWith("Code=ShowSimulation"))openSimulator(cmd);
};

window.roll_dice = function () {
    simulationRunJS('roll_dice()')
}

window.dht_display = function (a,b) {
    simulationRunJS(`dht_display(${a},${b})`)
}

/**
 * 코드 에디터와 관련된 Event를 처리한다.
 */
const jsControl = {
    init() {

    },

    run(line) {
        console.log("run : "+line)
        try {
            line = line.split(":");
            line = line[1].trim();
        } catch (error) {
            console.log(error);
            return;
        }

        try {
            console.log("line : "+line)
            eval(line);      
            // simulationRunJS(line)      
        } catch (error) {
            console.log(error);            
        }
        // windows.runJS("simulation", line);
        // simulationRunJS(line)
    },

    sound(data) {
        try {
            data = data.split(":");
            data = data[1].trim();
            data = data.split(",");
        } catch (error) {
            console.log(error);
            return;
        }

        try {
            serial.readNextChunk(data[0],data[1],data[2],data[3]); 
            // console.log(1)//
            // serial.readNextChunk('test',0,1000);            
        } catch (error) {
            console.log(error);            
        }
    },

};

export default jsControl;

function openSimulator(cmd) {
    let page = "";
    try {
        page = cmd.split("=")[2];
        page = page.replaceAll("/", "");
        console.log("page : "+page)
        eventbus.emit('simulationOpen', `/simulation/${page}`);

    } catch (error) {
        // TODO: 에러 처리
        console.log(error);
        return;
    }

}

function simulationRunJS(line){
    console.log("simulationRunJS 안 입니다 line : "+line)
    const params = {
        type: "simulationJS",
        func: line,
    };

    eventbus.emit('simulationBus', params);
}