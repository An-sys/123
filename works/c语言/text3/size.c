#include <stdio.h>

int arr[5];
int main()
{
	int i,num,max,min;
	for(i = 0;i < 5; i++){
		scanf("%d",&arr[i]);
	}
	max = arr[0];
	min = arr[0];
	for(i = 1; i < 5; i++){
		if(max < arr[i]){
			max = arr[i];
		}
		if(min > arr[i]){
			min = arr[i];
		}
	}

	printf("max = %d,min = %d \n",max,min);
	return 0;

}
