// mengambil nilai saat klik number
// Click Event untuk numbers
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log(event.target.value)  
  })
})

// merubah tampilan input type setelah nomor di klik
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

// pembuatan kalkulator
// variable untuk melakukan kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// memasukkan nilai saat diklik namun diawali angka 0 (bug)
// const inputNumber = (number) => {
//   currentNumber += number
// }

// memasukkan nilai dengan tidak diawali dengan angka 0 
const inputNumber = (number) => {
  if (currentNumber === '0'){
    currentNumber = number
  }else{
    currentNumber += number
  }
}

// mengupdate nilai di screen setelah diklik
numbers.forEach ((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

// Click Event untuk Operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    console.log(event.target.value)
  })
})

// definisikan function inputOperator
const inputOperator = (operator => {
  if (calculationOperator === '') {
    prevNumber = currentNumber  
  }
  calculationOperation = operator
  currentNumber = ''
})

// jalankan function inputOperator
// const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
})


// mengaktifkan kalkulasi ke aplikasi calculator

// mengaktifkan tombol sama dengan
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  console.log('equal button is pressed')
})

const calculate = () => {
  let result = ''
  switch(calculationOperator) {
    case "+":
      result = parsFloat(prevNumber) + parsFloat(currentNumber)
      break
    case "-":
      result = parsFloat(prevNumber) - parsFloat(currentNumber)
      break
    case "*":
      result = parsFloat(prevNumber) * parsFloat(currentNumber)
      break
    case "/":
      result = parsFloat(prevNumber) / parsFloat(currentNumber)
      break
    default:
      break
  }
  currentNumber = result
  calculationOperator = ''
}

// jalankan function calculate saat tombol "=" di klik
equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

// menjalankan tombol AC
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  console.log('AC button is pressed')
})

const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

// const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

// mengkalkulasi angka desimal
// tambahkan klik event
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
  console.log(event.target.value)
})

// jalankan function inputDecimal
inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})