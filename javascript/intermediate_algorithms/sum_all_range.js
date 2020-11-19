function sumAll(arr){
    function sortProper(a, b){
        return a - b
    }
       arr.sort(sortProper)
       let startNum = arr[0]
        let endNum = arr[1]
               let result = 0
        for(let i = startNum; i <= endNum; ++i){
    
    
            result += i
    
        }
         return `Sum of range between ${arr[0]} & ${arr[1]} = ${result}`   
    
    }
    console.log('==================================================================')
    console.log('Algorithm 1 (Sum all numbers in a range.)')
    console.log(sumAll([10,5]))
    console.log('\n==================================================================')