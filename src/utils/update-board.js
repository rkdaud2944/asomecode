// import config from "@/config";
// import axios from "axios";
import downloadToBoard from "./download-to-board";

export default {
    async start() {
        downloadToBoard.download("boot.py");
        downloadToBoard.download("asomebot.py");
        downloadToBoard.download("asomecar.py");
        downloadToBoard.download("button.py");
        downloadToBoard.download("buzzer.py");
        // versions = await getRemoteFileList();
        // for (const file in versions) {
        //     const fileInfo = versions[file];
        //     console.log(fileInfo);
        // }
    }
}

// var versions = {};

// async function getRemoteFileList() {
//     try {        
//         const response = await axios.request(config.pythonUrl() + "versions.json");
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }    
//     return {};
// }
