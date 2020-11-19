
//Darius Rain
//Algorithm
//12/19/19



/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/


function pairElement(str) {
    //Base pairs: AT CG
    str = str.split('');

    let result = [];
    
    for(let i=0; i < str.length; i++){

        switch(str[i]){
            case 'A' || 'a':
                result.push(['A', 'T'])
                break;    
            case 'T' || 't': 
                result.push(['T','A'])
                break;
            case 'C' || 'c': 
                result.push(['C', 'G'])
                break;
            case 'G' || 'g': 
                result.push(['G', 'C'])
                break;
            default: 
              
                return `Error unkown DNA Letter:'${str[i]}'` 
                
        }
        

    }
    




    return result;
    
  }
  
  console.log(pairElement("GCGF"));
  