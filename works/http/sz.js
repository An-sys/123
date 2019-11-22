const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('your username:\n', (answer) => {
	console.log(`感谢您的宝贵意见：${answer}`);
});


