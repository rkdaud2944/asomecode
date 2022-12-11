window.addEventListener('message', (msg) => {
    let message = {};
    try {
        message = JSON.parse(msg.data);
    } catch (error) {
        console.log(error, msg);
    }

    switch (message.type) {
        case 'runJS': runJS(message.line); break;
    }
});

function runJS(line) {
    try {
        eval(line);
    } catch (error) {
        console.log(error);
    }    
}