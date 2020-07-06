
function factorialize(num){
  
    if(num > 0){
   return num * factorialize(--num)

        
        }else{
        
        return 1
    }
    

}
console.log(factorialize(12))
