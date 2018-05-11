var os = require('os');

function uptime() {
	var uptime = os.uptime();
		if (uptime > 3600) {
			console.log('Uptime:', (uptime / 3600).toFixed(0), 'godz.', (uptime%3600/60).toFixed(0), 'min.', (uptime%60).toFixed(0), 'sek.');
		} else if (uptime > 60) {
			console.log('Uptime:', (uptime%3600/60).toFixed(0), 'min.', (uptime%60).toFixed(0), 'sek.');
		} else {
			console.log('Uptime:', (uptime%60).toFixed(0), 'sek.');
		}
}

exports.print = uptime;
