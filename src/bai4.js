// logical operator

//* Nếu là số dương  thì
function checkNumber1(n) {
  if (n > 0) {
  }
}

//* Nếu là số dương chẵn thì
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}

//* Nếu là số dương chẵn và lớn hơn 10
function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
  }
}

//* Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10
function checkNumber4(n) {
  if (n > 0 && n % 5 === 0 && n > 10) {
  }
}

//* Nếu là số dương chẵn hoặc số âm lẻ
function checkNumber5(n) {
  const isEventPositive = n > 0 && n % 2 === 0
  const isOddNegative = n < 0 && n % 2 !== 0
  if (isEventPositive || isOddNegative) {
  }
}
