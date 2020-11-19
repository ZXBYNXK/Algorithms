//Algorithm Rock Paper Siscor shoot


const rules = {
   'Rock': { canBeat:'Scissors', cantBeat:'Paper', wins: 0, losses: 0, ties: 0},
    'Paper': { canBeat:'Rock', cantBeat:'Paper', wins: 0, losses: 0, ties: 0},
    'Scissors': { canBeat:'Paper', cantBeat:'Rock', wins: 0, losses: 0, ties: 0},
    'Player 1': {wins:0, losses:0, ties:0},
    'Player 2': {wins:0, losses:0, ties:0}
},
//OPTIONS = [RULES[0], RULES[1], RULES[2]],
readline = require('readline');

let rl = readline.createInterface({
input:process.stdin,
output:process.stdout
}),

gameRecord = {
    
    runGameQuestion: () => {
       console.log('Player 1')
       console.log('1:Rock | 2: Paper | 3: Scissor ?')
       
       rl.question(``, player1 => {
       
       if(player1 === '1'){player1 = 'Rock'}
       else if(player1 === '2'){player1 = 'Paper'}
       else if(player1 === '3'){player1 = 'Scissors'}
    
       else{player1 = 'Rock'}
       console.log('\n\n\n\n\n\n\n\\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
          console.log('Player 2')
          console.log('1: Rock | 2: Paper | 3: Scissor ?')
     
       rl.question(``, player2 => {
              if(player2 === '1'){player2 = 'Rock'}
       else if(player2 === '2'){player2 = 'Paper'}
       else if(player2 === '3'){player2 = 'Scissors'}
      
       else{player2 = 'Rock'} 
       console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
       console.log(player1 , player2)
       if(player1 && player2){
       gameRecord.runGame(player1, player2)     
                }
                }) 
               }) 
       
       
          },
    runGame: (player1,  player2) => {

   if(player1 === player2){
    console.log('Tie')
    rules['Player 1'].ties += 1;
    rules['Player 2'].ties += 1;
    rules[player1].ties += 1;
   } else if(rules[player1].canBeat === player2){
        console.log(`Player 1 wins with ${player1}`)
        rules['Player 1'].wins += 1;
        rules['Player 2'].losses += 1;
        rules[player1].wins += 1;
        rules[player2].losses += 1;
   }else if(rules[player2].canBeat === player1){
        console.log(`Player 2 wins with ${player2}`) 
        rules['Player 2'].wins += 1;
        rules['Player 1'].losses += 1; 
        rules[player2].wins += 1;
        rules[player1].losses += 1;     
   }else {
        console.log(`ERR!`)
   
   }
   
   console.log(`Rock Record: ${rules['Rock'].wins}-${rules['Rock'].losses}-${rules['Rock'].ties}`)
   console.log(`Paper Record: ${rules['Paper'].wins}-${rules['Paper'].losses}-${rules['Paper'].ties}`)
   console.log(`Scissors Record: ${rules['Scissors'].wins}-${rules['Scissors'].losses}-${rules['Scissors'].ties}`)    
   console.log(`________________________________________________________________________________________`)
   console.log(`Player 1 Record: ${rules['Player 1'].wins}-${rules['Player 1'].losses}-${rules['Player 1'].ties}`)
   console.log(`Player 2 Record: ${rules['Player 2'].wins}-${rules['Player 2'].losses}-${rules['Player 2'].ties}`)
console.log('==============================================================================================')
   gameRecord.runGameQuestion();           
}
}

gameRecord.runGameQuestion();

