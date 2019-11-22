#include <stdio.h>

int main(){
	int flag = 1;	
	int num;
	int peo = 0;
	int sum = 0;
	while(flag){
		scanf("%d",&num);
		if(0 == num){ break; };
		peo++;
		sum+= num; 
	}
	printf("%d,%d",sum,peo);
    return 0;
}
