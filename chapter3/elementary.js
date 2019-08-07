function action(v) {
 console.log(v);
}

function execute(value, callback) {
 callback(value);
}

execute("Hello Node", action);