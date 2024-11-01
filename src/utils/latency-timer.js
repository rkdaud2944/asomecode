export default class LatencyTimer {
    #timer = null;
    #count = 0;
    #limit = 5000;
    #onTimer = null;

    constructor(limit, onTimer) {
        this.#limit = limit;
        this.#onTimer = onTimer;
    }

    start() {
        this.#count = 0;
        this.#timer = setInterval(() => {
            this.#count += 100;
            if (this.#count >= this.#limit) {
                this.#count = 0;
                this.#onTimer();
            }
        }, 100);
    }

    stop() {
        if (this.#timer) {
            clearInterval(this.#timer);
            this.#timer = null;
        }
    }

    reset() {
        this.#count = 0;
    }
}