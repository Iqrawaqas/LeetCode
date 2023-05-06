arr= [2,7,3,4]
target = 9;

for(let i=0; i< arr.length; i++){
    for(let j = 1; j< arr.length; j++){
        if(arr[i] + arr[j] == target){
            console.log(i , j)
        }
    }
}
