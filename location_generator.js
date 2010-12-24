//include('messages.js');

var INTERVAL = 100000000;
var stop = false;

var TEXT = 1;
var COORDS = 2;

function Message(type, content) {
	this.type = type;
  this.content = content;
}

// stop message doesn't work.  We need to spawn a worker from here, and use
// this thread to process messages.
onmessage = function(event) {
	switch (event.data) {
		case 'start' :
			run();
			postMessage(JSON.stringify(new Message(TEXT, 'started')));
      stop = false;
			break;
		case 'stop' :
			postMessage(JSON.stringify(new Message(TEXT, 'stopped')));
			stop = true;
      break;
    default:
      alert('bad command');
	}
}

function run() {
	search: while(!stop) {
		var x = Math.random();
		var y = Math.random();
		var coords = new Message(COORDS, [x, y]);
		postMessage(JSON.stringify(coords));
		busyWait(INTERVAL);
	}
}

function busyWait(n) {
  for(var i = 0; i < n; i++ ) ;
}
