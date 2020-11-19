//Name: Darius Rain
//Date: 11-26-19
//Algorithm: Confirm the ending(recreated{scratch})
//Used: 
//Misson: Recreate the 'confirm the ending algorithm'

/*
function confirmTheEnding(str,  target){
    str = str.subprogram.string(str.length - target.length)
    if(str === target){
        return true
    }else{
        return false
    }
     //return str
 }
 console.log(confirmTheEnding("Bastian", "zan"))
 */

let program = {
      string: "",
      target: "",
      theDifference: 0,
      combinedLengths: 0,
      methods: {
          addStrToObject: function(str){
              program.string = str;
              //console.log(program.string.length)
          },
          addTargetToObject: function(target){
            program.target = target;
          },
            convertStringToTargetLength: function(length){
                let temp = ''
                for(let i = 0; i < program.string.length; i++){
                    //console.log(i)
                    if(i >= program.theDifference){
                        temp += `${program.string[i]}`
                    }

                }
                program.string = temp;
            },
           
          addStrTarget: function(param1Str, param2Target){
              program.methods.addStrToObject(param1Str);
              program.methods.addTargetToObject(param2Target);
            
              
            program.combinedLengths = program.string.length + program.target.length;
              program.theDifference = program.string.length - program.target.length;
       
              program.methods.convertStringToTargetLength(program.target.length)
             
              if (program.string === program.target){
                console.log(`\n\n\n\n`)
                console.log(`@@@-------------------------------------------->`)
                console.log(`|||-------------------------------->`)
                console.log(` |`)
                console.log(` | String: ${param1Str} | Target: ${param2Target} | Program: [Find End of String Program] `)
                console.log(` |>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
                console.log(` | [TRUE] ~~> Last letter(s) of ('${param1Str}') : [${program.string}] | All letter(s) of word ('${param2Target}') : [${program.target}] (MATCH!!!)  `)  
                console.log(` |<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`)
                console.log(' |                                                          Made By: Darius Rain')
                console.log(` |`)
                console.log(`|||-------------------------------->`)
                console.log(`@@@--------------------------------------------->`)
                console.log(`\n\n\n\n`)
                return true;
            } else {
                console.log(`\n\n\n\n\n`)
                console.log(`1`)
            console.log(`| String: ${param1Str} | Target: ${param2Target}  | Program: [Find The End of String Program]`)
            console.log(`|>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
            console.log(`| [False] ---> String: ${program.string} & Target: ${program.target}  (NO MATCH!!!) `)
            console.log(`|<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`)
                
            console.log('|                                                          Made By: Darius Rain|')
            console.log(`|`)
            console.log(`0`)
            console.log(`\n\n\n\n`)
            return false
            }
        }
      }
 }

 program.methods.addStrTarget("Opera", "apera")






















