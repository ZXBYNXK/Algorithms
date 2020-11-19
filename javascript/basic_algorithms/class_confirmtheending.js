//Used: functions, if else statements.
function confirmTheEnding(str,  target){
   str = str.substring(str.length - target.length)
   if(str === target){
       return true
   }else{
       return false
   }
    //return str
}
console.log(confirmTheEnding("Bastian", "zan"))