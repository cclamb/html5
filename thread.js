var TEXT = 1;
var COORDS = 2;

var interval;

function Message(type, content) {
	this.type = type;
  this.content = content;
}

function generateCoords() {
  var x = Math.random();
  var y = Math.random();
  var msg = new Message(COORDS, [x, y]);
  postMessage(JSON.stringify(msg));
}

onmessage = function(event) {
	switch (event.data) {
		case 'start' :
			postMessage(JSON.stringify(new Message(TEXT, 'started')));
      timer = setInterval(generateCoords, 1);
			break;
		case 'stop' :
			postMessage(JSON.stringify(new Message(TEXT, 'stopped')));
      clearInterval(interval);
      close();
      break;
    default:
      alert('bad command');
	}
}


