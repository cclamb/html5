
//postMessage('macaroni')

onmessage = function(event) {
	run();
}

function run() {
	var n = 1;
	search: while(true) {
		n += 1;
		for (var i = 2; i <= Math.sqrt(n); i += 1) {
			if (n % i == 0) {
				continue search;
			}
		}
		postMessage(n);
    busyWait(1000000);
	}
}

function busyWait(n) {
  for(var i = 0; i < n; i++ ) ;
}
