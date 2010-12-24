//include('messages.js');

var INTERVAL = 1000000;
var stop = false;

var TEXT = 1;
var COORDS = 2;

function Message(type, content) {
	this.type = type;
  this.content = content;
}

onmessage = function(event) {
	switch (event.data) {
		case 'start' :
			//run();
			postMessage(JSON.stringify(new Message(TEXT, 'started')));
      stop = false;
			break;
		case 'stop' :
			postMessage(JSON.stringify(new Message(TEXT, 'stopped')));
			stop = true;
      break;
    
	}
}

function run() {

	search: while(true) {
		var x = Math.random();
		var y = Math.random();
		var coords = new Message(COORDS, [x, y]);
		postMessage(JSON.stringify(coords));
		if (stop) {
			break;
		}
		busyWait(INTERVAL);
	}
}

function busyWait(n) {
  for(var i = 0; i < n; i++ ) ;
}
