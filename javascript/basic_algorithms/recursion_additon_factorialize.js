function factorialize_addition(num){
    if(num > 0){
       return num + factorialize_addition(--num)
    }else{
        return num;
    }

}
console.log(factorialize_addition(4))