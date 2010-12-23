//include('messages.js');

var INTERVAL = 100000;
var stop = false;

function TextMessage(text) {
	this.msg = text;
}

function CoordinateMessage(x, y) {
	this.x = x;
	this.y = y;
}

onmessage = function(event) {
	switch (event.data) {
		case 'start' :
			run();
			postMessage(JSON.stringify(new TextMessage('started')));
			break;
		case 'stop' :
			postMessage(JSON.stringify(new TextMessage('stopped')));
			stop = true;
	}
}

function run() {

	search: while(true) {
		var x = Math.random()
		var y = Math.random()
		//var coords = new CoordinateMessage(x, y);
		//postMessage(JSON.stringify(coords));
		if (stop) {
			break;
		}
		busyWait(INTERVAL);
	}
}

function busyWait(n) {
  for(var i = 0; i < n; i++ ) ;
}
