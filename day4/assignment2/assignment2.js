const student = {
  name: 'Helenski',
  age: 24,
  projects: {
  	diceGame: 'Two player dice game using javascript'
  }

}

 
  let { name , age } = student;
  console.log(name, age);
  prop = 'projects';
   let { [prop]: name3 } = student;
  console.log(name3)
  prop = 'projects';
   let { projects : {diceGame}  } = student;
  console.log(diceGame)