//include('messages.js');

var INTERVAL = 100000000;
var run = false;

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
			postMessage(JSON.stringify(new Message(TEXT, 'started')));
      run = true;
			break;
		case 'stop' :
			postMessage(JSON.stringify(new Message(TEXT, 'stopped')));
			run = false;
      break;
    default:
      alert('bad command');
	}
}

function doit() {
 // while(true) {
  //  busyWait(INTERVAL);
  //}
}

function busyWait(n) {
  for(var i = 0; i < n; i++ ) ;
}

doit();
