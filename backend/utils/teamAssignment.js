const assignTeam = () => {
  const teams = [
    "MI",
    "RCB",
    "CSK",
    "LSG",
    "GT",
    "SRH",
    "KKR",
    "DC",
    "PBKS",
    "RR",
  ];
  return teams[Math.floor(Math.random() * teams.length)];
};

function teamValidation(newteam) {
  const validTeams = [
    "MI",
    "RCB",
    "CSK",
    "LSG",
    "GT",
    "SRH",
    "KKR",
    "DC",
    "PBKS",
    "RR",
  ];
  if (
    validTeams.find((teamAvailable) => teamAvailable === newteam.toUpperCase())
  ) {
    return true;
  }
  return false;
}

export { assignTeam, teamValidation };
