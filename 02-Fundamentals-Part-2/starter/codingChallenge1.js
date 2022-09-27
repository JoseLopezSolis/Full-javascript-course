 //*Coding challenge
 /*
 const determineScore = scoreTeam =>{
    let result = 0;
    if(scoreTeam.length == 1){
        result = scoreTeam[0];
        return result;
    }else{
        for(i in scoreTeam){
            result += scoreTeam[i]; 
        }
        return result/scoreTeam.length;
    }
 }

const determineWhosWinner = (team1,team2) =>{
    const totalScore1 = determineScore(team1);
    const totalScore2 = determineScore(team2);

    if(totalScore1 > totalScore2 * 2){
        return(`Team 1 won the championchip with ${totalScore1}`);
    }else if(totalScore1 > totalScore2 * 2){
        return(`Team 2 won the championchip with ${totalScore2} points 🏆.`);
    }else{
        return(`Nobody won the championchip\n team1 score ${totalScore1}\n team2 score ${totalScore2}\n The champion need to have the double in points than other.`);
    }
    
}

const team1 = [100,100,100];
const team2 = [65,54,49];
const winner = determineWhosWinner(team1,team2);

console.log(winner);
*/