const name = "Ankit"
const repoCount = 50

console.log(name[0])
console.log(name.length)
console.log(name + repoCount + " value")

// this is the modern way -> string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Pac-Man")
console.log(gameName)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('c'))
console.log(gameName.indexOf("an"))

const newString = gameName.substring(0, 4)
console.log(newString)

const str = gameName.slice(-3,5)
console.log(str)

const str2 = "  Ankit  "
console.log(str2.trim())

const url = "https://localhost:3600/admin%20page"
console.log(url.replace('%20','-'))

console.log(url.includes('local'))

const str3 = "hello-everyone-how-are-you"
console.log(str3.split("-"))