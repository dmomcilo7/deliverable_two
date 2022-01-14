let user = '';
let gameNumber = 0;
let par = 3;
let score = 0;



user = prompt('Welcome to GC mini-golf! What is your name?', user);
gameNumber = prompt(`Hi, ${user}! Would you like to play 3 or 6 holes?`, gameNumber);
par = par * gameNumber;

for (let i = 0; i < gameNumber; i++) {
   let putts = 0;   
    putts = prompt(`How many putts for hole ${i + 1}? (par: 3)`, putts);
    score += Number(putts);
    console.log('putts', putts)
    console.log('score', score)
}
if (score === par) {
    console.log(`Good game, ${user}. Your total par was: 0.`)
} else if (score < par) {
    console.log(`Great job, ${user}! Your total par was: -${par - score}`)
} else {
   console.log(`Nice try, ${user}! Your total par was: +${score - par}`)
}
