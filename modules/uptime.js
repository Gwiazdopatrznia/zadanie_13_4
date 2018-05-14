var os = require('os');

function uptime() {
	var uptime = os.uptime();
	var hour = (uptime / 3600).toFixed(0);
	var min = (uptime % 3600 / 60).toFixed(0);
	var sec = (uptime % 60).toFixed(0);
		if (uptime > 3600) {
			console.log('Uptime:', hour, 'godz.', min, 'min.', sec, 'sek.');
		} else if (uptime > 60) {
			console.log('Uptime:', min, 'min.', sec, 'sek.');
		} else {
			console.log('Uptime:', sec, 'sek.');
		}
}

exports.print = uptime;
