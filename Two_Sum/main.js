

let result = [];

function two_sums(arr, target){
    for(let i=0; i< arr.length; i++){
        for(let j = 1; j< arr.length; j++){
            debugger
            if(arr[i] + arr[j] == target){
                result.push(i);
                result.push(j);
                console.log(result)
                return result; 
            }
        }   
    }
}
two_sums([2,5,5,11], 10);
