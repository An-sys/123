#include <stdio.h>



struct User{
	char name[10];
};

struct User users[10];
int main()
{
	
	users[0].name = {"男"}; 
	printf("%s",users[0].name);
}


