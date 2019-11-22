const net = require('net')
var fs = require("fs");

const server = net.createServer( (socket) => {

	socket.on('data',function(data){
		// console.log(data.toString())

		//截取服务器请求的文件名
		let cols = data.toString().split('\n');
		let rows = cols[0].split(' ');
		let method = rows[0];
		let path = rows[1];
		switch( path ){
			case '/':
				//判断是根目录跳转主页面
				socket.write('HTTP/1.1 200 OK \n');
				socket.write('Content-Type:text/html;charset=utf-8 \n\n');

				socket.write("<h1>welcome</h1><a href = '/admin'>进入管理后台</a>")
				
				break;
			
			case '/admin':
				var part = data.toString().split("\n");
				var cok = part[part.length-3].split(':')[1].split('=')[0];
				// console.log(cok)
				if(cok != ' SESSID'){
					socket.write('HTTP/1.1 302 Found \n');
					socket.write("Location:/login\n" )
					socket.write('Content-Type:text/html;charset=utf-8 \n\n');
					// console.log('cok admin')
				}else {
					socket.write('HTTP/1.1 200 OK \n');
					socket.write('Content-Type:text/html;charset=utf-8 \n\n');
					socket.write("<h1>客户端后台</h1>")
					// console.log('admin')
				}

				break;
			
			case '/login':
				// console.log(data.toString()).
				if(method == 'GET'){
					socket.write('HTTP/1.1 200 OK \n');
					socket.write('Content-Type:text/html;charset=utf-8 \n\n');
					socket.write("<form action='/login' method='post'>输入用户名:<input type='text' name='username'><br>输入密码:<input type='password' name='password'><br><input type='submit'></form>")
				}else if(method == 'POST'){
					//提交后截取name和password的内容		
					var sp = data.toString().split("\n");
					var name = sp[sp.length-1].split('&')[0].split('=')[1];
					var pwd = sp[sp.length-1].split('&')[1].split('=')[1];

					//判断name和passwo的值
					if(name == 'admin' && pwd == '123'){
						var num = '5d9d6922a7fee'

						socket.write('HTTP/1.1 302 Found \n');
						socket.write('Set-Cookie:SESSID='+num+'\n');
						socket.write("Location:/admin \n" )
						socket.write('Content-Type:text/html;charset=utf-8 \n\n');
						// console.log('post login')
					}
				}
				
				break;
			
			default:
				socket.write('HTTP/1.1 404 Not Found \n');
				socket.write('Content-Type:text/html;charset=utf-8 \n\n');

				socket.write('<h1>404错误</h1>')
		}
	})
})


server.listen({
	port:8001
}) 