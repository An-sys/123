

var num = Math.random().toString(36).substr(2)
//创建以随机字符串名的文件						
fs.writeFile(num,'admin','utf8',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('写入成功');
})




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
		socket.write('Set-Cookie:SESSID='+ num +'\n');
		socket.write("Location:/admin \n" )
		socket.write('Content-Type:text/html;charset=utf-8 \n\n');
		socket.write('<h1>admin</h1>');

	}
}