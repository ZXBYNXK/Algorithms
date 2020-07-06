function myReplace(str, before, after){
    let caps = ['Q','W','E','R','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','B','M','N'];
    let regex = new RegExp(before, "gi")
    if(caps.includes(before[0])){
    let capitalizedAfter = `${after[0].toUpperCase()}${after.slice(1, after.length)}`;
    str = str.replace(regex, capitalizedAfter)
    }else {
        str = str.replace(regex, after)

    }
    return str
}
console.log(myReplace("Let if coding", "CodIng", "Algorithms"))