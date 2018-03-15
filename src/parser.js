'use strict';

exports.checkError = function(data) {
	const rErr1 = /^\.{3}\s+\(skipping (\d+) line/;
	const rErr2 = /\s*Syntax Error\?\s*$/;
	const match = rErr1.exec(data);
	if(match) {
		return match[1];
	} else if (rErr2.exec(data)) {
		return 1;
	}
	return -1;
}