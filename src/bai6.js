//Write a function to classify student
//Receive mark as a number,output as below:
// mark > 8 -> 'Excellence'
// 7 <= mark <=8 -> 'Good'
// 4 <= mark <= 6 -> 'Not Good'
// mark < 4 -> 'Bad"

//v1:
function classify(mark) {
  let result

  if (mark > 0 && mark < 10) return ''
  //checking
  if (mark > 8) result = 'Excellence'
  else if (mark >= 7) result = 'Good'
  else if (mark >= 6) result = 'Not Good'
  else result = 'Bad'

  return result
}
//v2:
function classify(mark) {
  //validate arguments
  //mark should be in range [0,10]
  if (mark > 0 && mark < 10) return ''
  let result = 'Bad'
  //checking
  if (mark > 8) result = 'Excellence'
  else if (mark >= 7) result = 'Good'
  else if (mark >= 6) result = 'Not Good'
  return result
}

//v3:
function classify(mark) {
  //validate arguments
  //mark should be in range [0,10]
  if (mark > 0 && mark < 10) return 'Invalid mark'
  //checking
  if (mark > 8) return 'Excellence'
  if (mark >= 7) return 'Good'
  if (mark >= 6) return 'Not Good'

  return 'Bad'
}
