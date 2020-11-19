function diffArray(arr1, arr2){
   
    let newArray = []
   for(let i = 0; i < arr1.length; i++){
    
    if( !arr2.includes(arr1[i])){
        newArray.push(arr1[i])
      }
   }
   for(let i = 0; i < arr2.length; i++){
    
    if( !arr1.includes(arr2[i])){
        newArray.push(arr2[i])
      }
   }
    

    
return newArray
}
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])