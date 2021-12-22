// 1) Where is carNoise stored?
// global execution contect
const carNoise = 'Honk';
// 2) Where is goFast stored?
// global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // functional
  
  // 5) Where is makeNoise stored?
  // functional 
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // calling makeNoise, passing to  it carNoise, console logged 'Honk'
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// popup window asked do you want to go fast, go fast function is invoked passing 80. goes on call back que and creates a function
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
