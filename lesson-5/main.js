// function 
for(i=0; i<50; i++){
    document.write(`<div class="box">${i+1}</div>`);
}
// function countchar (text,char){------------}
//countehar ("lorem, "o") сколько одинаковых букв aizaada -> 3 a
// lot if
const countMs = (text) => {
    let count = 0;
  
    for (const letter of text) {
      if (letter.toLowerCase() === 's') ++count;
    }
  
    return count;
  }
  
  console.log(countMs("stray kids"))