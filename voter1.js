let partyVotes = {
    partyA: { route1: 0, route2: 0 },
    partyB: { route1: 0, route2: 0 },
    partyC: { route1: 0, route2: 0 }
  };
  
  function createParty(partyName) {
    if (!partyVotes[partyName]) {
      partyVotes[partyName] = { route1: 0, route2: 0 };
    } else {
      console.log("Party already exists");
    }
  }
  
  function getAllParties() {
    return partyVotes;
  }
  
  function getPartyByName(partyName) {
    if (partyVotes[partyName]) {
      return partyVotes[partyName];
    } else {
      console.log("Party not found");
    }
  }
  
  function deleteParty(partyName) {
    if (partyVotes[partyName]) {
      delete partyVotes[partyName];
    } else {
      console.log("Party not found");
    }
  }
  
  function addVotes(partyName, route, votes) {
    if (partyVotes[partyName] && partyVotes[partyName][route]) {
      if (votes > 0) {
        partyVotes[partyName][route] += votes;
      } else {
        console.log("Invalid number of votes");
      }
    } else {
      console.log("Invalid party or route");
    }
  }
  
  function getVotes(partyName, route) {
    if (partyVotes[partyName] && partyVotes[partyName][route]) {
      return partyVotes[partyName][route];
    } else {
      console.log("Invalid party or route");
    }
  }
  
  // Create a new party
  createParty("partyD");
  
  // Get all parties
  console.log(getAllParties());
  
  // Get a party by name
  console.log(getPartyByName("partyA"));
  
  // Delete a party
  deleteParty("partyC");
  
  // Add votes to a party
  addVotes("partyA", "route1", 10);
  
  // Get votes for a party
  console.log(getVotes("partyA", "route1"));
  