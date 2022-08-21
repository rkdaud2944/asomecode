import { SerialPort, ReadlineParser } from "serialport";

let port = null;
let parser = null;

export default {
    connect(path) {
        try {
            port = new SerialPort({
                path: path,
                baudRate: 115200,
                lock: false,
            });

        } catch (error) {
            console.log(error);
            port = null;
            return;
        }

        parser = new ReadlineParser({ delimiter: '\r\n' });
        port.pipe(parser);

        parser.on('data', console.log);

        port.on('close', () => {
            console.log('Seiral.closed');
            this.terminate();
        });

        port.on('error', (err) => {
            console.error("Seiral.error", err);
            this.terminate();
        });

        port.on('connected', (err) => {
            console.log('Seiral.connected', err);
            this.terminate();
        });
    },

    disconnect() {
        try {
            port.close();
        } catch (error) {
            console.log(error);
        }
        this.terminate();
    },

    terminate() {
        port = null;
        parser = null;
    },

    list() {
        SerialPort.list((err, ports) => {
            console.log("list", ports);
            ports.forEach(port => {
                console.log(port);
            });
        });
    }
}