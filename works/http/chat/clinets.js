//引入net模块
const net = require('net')
//引入readline模块
const readline = require('readline')
//创建一个新的net对象
let socket = new net.Socket();
//链接本机的8000端口
var clints = socket.connect(8000,'127.0.0.1',()=>{
	//设置编码
	socket.setEncoding('utf8');
	//输入name信息
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question('your username:\n', (answer) => {
		clints.write(`name:${answer}`);
		rl.close();
	});

	//输入
	process.stdin.on('readable', () => {
		let chunk = process.stdin.read();
		//发送的内容不为空
		if(chunk != null){
			clints.write(chunk)
		}
	})

	socket.on('data',(data)=>{
		console.log(data)
	})

})


	

