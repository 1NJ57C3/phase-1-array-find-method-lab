function superbowlWin(record) {
     const dub = record.find(function(winningYear) {
         return winningYear.result === 'W';
    })
    return !!dub ? dub.year : dub;
}