let arr = [
  "Supernatural",
  "Mr Robot",
  "Arcane",
  "Gossip Girl",
  "What we do in the shadows",
  "Landscapers",
  "The Withcer",
  "Futurama",
  "Criminal Minds",
  "Money Heist",
  "ASrrested Development",
  "Friends",
  "How I met your mother",
  "Modern Family",
];

for(let show of arr){
  //  console.log(show);
}

//let handleShows = (show, i)=> console.log(show, i);
//arr.forEach((show, i)=>console.log(show,i));
function oldSchoolAdd(a,b){
    return a+b;
}
const add = (a, b) =>/*return*/ a + b;

let newAdd = add(5,7);
console.log(newAdd)

let oldAdd = oldSchoolAdd(5,7);
console.log(oldAdd);