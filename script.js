var createPolitician = function(name, partyColor) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  
  politician.electionResultsTotal = function() {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  
  return politician;
};

var sue = createPolitician("Sue Social", [132, 17, 11]);
var claire = createPolitician("Claire Capital", [245, 141, 136]);


sue.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
claire.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 14, 3, 1, 2, 11, 2, 3, 1];

sue.electionResults[9] = 1;
claire.electionResults[9] = 28;

sue.electionResults[4] = 17;
claire.electionResults[4] = 38;

sue.electionResults[43] = 11;
claire.electionResults[43] = 27;

var setStateResults = function(State) {
    
  theStates[State].winner = null;
    
  if (sue.electionResults[State] > claire.electionResults[State]) {
      theStates[State].winner = sue;
  } else {
      theStates[State].winner = claire;
  }

  var stateWinner = theStates[State].winner;

  if (stateWinner !== null) {
    theStates[State].rgbColor = stateWinner.partyColor;
  } else {
    theStates[State].rgbColor = [11, 32, 57];
  }

  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0].children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0];
  var abbrev = header.children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Name = body.children[1].children[0];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[State].nameFull;
  abbrev.innerText = "(" + theStates[State].nameAbbrev + ")";

  candidate1Name.innerText = sue.name;
  candidate2Name.innerText = claire.name;

  candidate1Results.innerText = sue.electionResults[State];
  candidate2Results.innerText = claire.electionResults[State];

  if (theStates[State].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[State].winner.name;
  }
}

sue.electionResultsTotal();
claire.electionResultsTotal();

var winner = "???";

if (sue.totalVotes > claire.totalVotes) {
  winner = sue.name;
} else {
  winner = claire.name;
}

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = sue.name;
row.children[1].innerText = sue.totalVotes;
row.children[2].innerText = claire.name;
row.children[3].innerText = claire.totalVotes;
row.children[5].innerText = winner;

