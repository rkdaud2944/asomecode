const remote = require("electron").remote;
const fs = require("fs");

window.remote = remote;
window.fs = fs;