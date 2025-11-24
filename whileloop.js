    /*


*/


//Asc
/*
i =1;

while (i<=5){
    console.log(i);
    i++;
}

//Online Asc
/*
output = "";
i =1;

while (i<=5){
    output += output;
    console.log(output);
    i++;
}
console.log(output)


/*
output = "";
i =1;

while (i<=5){
    output += output;
    console.log(output);
    i++;
}
console.log(output)
*/

/*
output = "";
i =5;

while (i<=1){
    output += i + " ";
    console.log(output);
    i--;
}
console.log(output);
*/

arr=[4,2,3];
output = " ";
i=0;

while(i<=arr.length){
    output += arr[i] + " ";
    i++;
}

console.log(output);
dowhileloop.js
/*
//Asc
i=1;

do{
    console.log(i);
    i++;
}while (i<=5);
*/
/*
//Desc
i=5;

do{
    console.log(i);
    i++;
} while (i>=1);
 */
/*
output = " ";
i = 1;

do{
    output += i + " ";
    i++
} while (i<=5);

console.log(output);
*/
arr1 = [4,2,3];
    function arrDoWhile(arr){

        output = "";
        i = 0;
    do{
        output += arr[i] + " ";
        i++;
    } while (i< arr.length)
    }
     arrDoWhile(arr1);
