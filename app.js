// for every value in the triangles variable 
// console.log a # sign for each value
// then minus one off the 

for(var i = 1 ; i <= 100 ; i ++) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log('fizzbuzz')
  }
  else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 == 0 ){ 
    console.log("Buzz")
  } else {
    console.log(i)
  }
}



