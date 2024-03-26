// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...more records
  ];
  
  function superbowlWin(record) {
    const winningYear = record.find(game => game.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
  
  // Example usage:
  console.log(superbowlWin(record)); // Output will be the year of the win or undefined if no win