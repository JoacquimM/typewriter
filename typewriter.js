//const sentence = "hello there from lighthouse labs";



// for (const char of sentence) {
// setTimeout(() =>{
//  //console.log(char);
//  process.stdout.write(char);

// },1000) 
// }

const typeSentence = (quote) => {

  let sentenceCopy = quote.split('');
  let milliSec = 0
  for (const char of sentenceCopy) {
    setTimeout(() => {
      process.stdout.write(char);
    }, milliSec += 50);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  },1600)
}
const sentence = "hello there from lighthouse labs";

typeSentence(sentence);