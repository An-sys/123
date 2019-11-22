var rs =require('readline-sync');


var peo = [];
var cout = 0;

while(true){
	console.log('\n======欢迎进入会员管理系统====== \n\n'+
		'------主菜单------\n'+
		'1.查看会员\n'+
		'2.新增会员\n'+
		'3.积分管理\n'+
		'0.退出\n');

	var num = rs.question('请输入:');
	
	if(1 == num){
		show();
	}else if(2 == num){
		news();
	}else if(0 == num){
		break;
	}
}

function show(){
	console.log('\n------查看会员------ \n'+
		'姓名\t性别\t手机\t\t积分');
	if(peo.length == 0){
		console.log('\n没有会员请输入')
	}else{
		for( let i in peo){
			console.log(peo[i].name+'\t',peo[i].sex+'\t',peo[i].tel+'\t\t',peo[i].poi)
		}
	}
	// console.log(peo.length)
}

function news(){
	function User(name,sex,tel,poi){
		this.name = name;
		this.sex = sex;
		this.tel = tel;
		this.poi = poi;
	}

	console.log('\n------新增会员------ \n');
	var name = rs.question('请输入姓名: ');
	var nSex = rs.question('请输入性别(0女1男): ');
	var sex;
	if(nSex == 0 ){
		sex = '女';
	}else if(nSex == 1){
		sex = '男';
	}else{
		sex = '未知';
	}
	var tel = rs.question('请输入手机: ');
	var poi = rs.question('请输入积分: ');

	console.log('\n[保存成功]');
	cout = new User(name,sex,tel,poi);
	peo.push(cout);
	// cout++;
}

