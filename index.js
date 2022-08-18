// code your solution here
// function superbowlWin(array){
//     const result = array.find(function(){
//         array.result === 'W'
//     })
//     return !! result ? array.year : undefined;
// }
function superbowlWin(record){
    const result = record.find(record => record.result === 'W')
    return !! result ? result.year : undefined;
}