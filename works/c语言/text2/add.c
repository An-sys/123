#include <stdio.h>

int main()
{
	int flag=1;
	int num;
	int add=0;
	int tim=0;

	while(flag){
		scanf("%d",&num);
		if(0==num) break;
		tim++;
		add+=num;
	}

	printf("%d,%d \n",add,tim);
	return 0;
}
