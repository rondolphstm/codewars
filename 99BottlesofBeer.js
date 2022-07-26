// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of
// strings: each line should be a separate element
// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

// function sing(){
//     let song = []
// for( let i = 100 ; i > 0 ; i-- ){
//  song.push(`${[i]}bottles of beer on the wall, bottles of beer.`);
// console.log(song)
// }
// }
// sing()

let sing = function () {
  let result = []
  for (let i = 100; i >= 1; i--){
    result.push(
      `${[i]} bottles of beer on the wall, ${[
        i,
      ]} bottles of beer. Take one down and pass it around, ${[
        i - 1,
      ]} bottles of beer on the wall.`);
      console.log(result);

  }
}
sing()