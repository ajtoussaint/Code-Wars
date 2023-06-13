function buildMatchesTable(n) {
  //credit to https://stackoverflow.com/questions/6648512/scheduling-algorithm-for-a-round-robin-tournament
  let teams1 = [];
  let teams2 = [];
  let tourn = [];
  for(let i = 1; i<=n; i++){
    teams1.push(i);
    if(i != 1) teams2.unshift(i);
  }
  for(let round = 0; round < n-1; round++){
    let newRound = [];
    //construct a round
    for(let j = 0; j < n/2; j++){
      //for the first half of the arrays create matches and push
      newRound.push([teams1[j],teams2[j]]);
    }
    tourn.push(newRound);
    //rotate teams 2 to the left and teams1 to the right except for the 1 team in teams 1
    teams2.push(teams2.shift());
    teams1 = teams1.slice(1,teams1.length);
    teams1.unshift(1,teams1.pop());
  }
  return tourn;
}
