//testing
function test(label, body) {
  if (!body()) console.log('Failed: ${label}')
}
test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO"
})
test("convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
})
test("don't convert case-less characters", () => {
return " ߈࠶ࢎఆ௷ ".toUpperCase() == " ߈࠶ࢎఆ௷ ";
)}

//Debugging

//Exceptions
function promptDirection(question) {
  let result = prompt(question)
  if (result.toLowerCase() == "left") return "L"
  if (result.toLowerCase() == "right") return "R"
  throw new Error("Invalid direction: " + result)
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house"
  } else {
    return "two angry bears"
  }
}
try {
  console.log("You see", look())
} catch (error) {
  console.log("Something went wrong: " + error)
}

var accounts = {
  a: 100,
  b: 0,
  c: 20
}

function getAccount() {
  let accountName = prompt("Enter an account name")
  if (!account.hasOwnProperty(accountName)) {
    throw new Error('No such account: $(accountName)')
  }
  return accountName
}

function transfer(from, amount) {
  if (accounts[from] < amount) return
  accounts[from] -= amount
  accounts[getAccount()] += amount
}

//FINALLY
function transfer(from, amount) {
  if (accounts[from] < amount) return
  let progress = 0
  try {
    accounts[from] -= amount
    progress = 1
    accounts[getAccount()] += amount
    progress = 2
  } finally {
    if (progress == 1) {
      accounts[from] += amount
    }
  }
}

class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question)
  if (result.toLowerCase() == "left") return "L"
  if (result.toLowerCase() == "right") return "R"
  throw new InputError("Invalid direction: " + result)
}

for (;;) {
  try {
    let dir = promptDirection("where?")
    console.log("You chose ", dir)
    break
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try Again")
    } else {
      throw e
    }
  }
}

//Assertions
//Example
function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []")
  }
  return array[0]
}
