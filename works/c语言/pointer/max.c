#include <stdio.h>

int arr[10];

int main()
{	
		
	int i,max,min;	
	for(i = 0; i < sizeof(arr)/sizeof(arr[0]); i++){
		scanf("%d",&arr[i]);
		if(0 == arr[i]){ break; }
	}
	max = arr[0];
	for(i = 1; i < sizeof(arr)/sizeof(arr[0]); i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
	min = arr[0];
	for(i = 1; i < sizeof(arr)/sizeof(arr[0]);i++){
		if(min > arr[i]){
			min = arr[i];
		}
	}
	

	printf("max = %d,min = %d \n",max,min);
	return 0;
}
	
