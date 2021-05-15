const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(matches){
  const win = matches.find((match) => {return match.result == "W"})
  if(win) { return win.year }
 
}
