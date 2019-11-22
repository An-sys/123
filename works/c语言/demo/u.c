#include <stdio.h>


struct User{
	char name[10];
	char *sex;
	char tel[11];
	int point;
	
};

int i;
struct User users[100];
int news(){

	 int flag = 1;
         int num;
	 
	 //for(i = 0; i < 100; i++){
	 while(flag){	
		 printf("\n------新增会员------\n");

		 printf("请输入姓名: ");
		 scanf("%s",users[i].name);
		
		 printf("请输入性别(0女1男): ");
		 
		 int sexn;
		 scanf("%d",&sexn);
		 if(0 == sexn){
			users[i].sex = "女";
		 }else{
			
		 	users[i].sex = "男";
		 }		
			
		 printf("请输入手机: ");
		 scanf("%s",users[i].tel);		 

		 printf("请输入积分: ");
		 scanf("%d",&users[i].point);
		 	
		 printf("\n[保存成功]\n");
		 i++;
		 printf("是否继续 [1]继续,[0]返回: ");
		 scanf("%d",&num);
		 
		 //printf("name = %s",users[i].name);
		 if(0 == num){ break; }; 	 	
	 } 
}


int show(){	

	if(users[0].sex == NULL){
		printf("没有用户,请输入用户信息。\n");
	}else{
		printf("\n------查看会员------\n");
		printf("姓名\t性别\t手机\t\t积分\n");
		int j;
		
		for(j = 0; j < i; j++){
			printf("%s\t%s\t%s\t\t%d\n",users[j].name, users[j].sex, users[j].tel, users[j].point);
		}
	}	
}


int main()
{
	int num;
	int flag = 1;
	while(flag){
		printf("\n======欢迎进入会员管理系统====== \n------主菜单------\n1.查看会员\n2.新增会员\n3.积分管理\n0.退出\n");
		printf("\n请输入: ");
		scanf("%d",&num);
		if(0 == num){
			break;
		}else if(2 == num){
			news();
		}else if(1 == num){
			show();		
		}
    }
	return 0;
	
}	

