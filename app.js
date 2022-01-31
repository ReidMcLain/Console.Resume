let fullName = 'Reid Michael McLain'
let interests = ['Chess', 'Auburn sports', 'Dungeons and Dragons']
let jobTitle = 'Repair technician';
let displayPosition = [
  {
    Company: 'uBreakIfix',
    Title: 'Repair technician',
    Description: 'Description'
  },
  {
    Company: 'Zaxbys',
    Title: 'Cashier/cook',
    Description: 'I took money for orders, then eventually cooked food'
  }
]
let skills = ['Some skills here']

console.log('name: ' + fullName.toUpperCase())
console.log('Career: Full Stack Student')
console.log('Description: The cake is a lie')
console.log(' ')
console.log('My Interests:')

displayPastPosition('mcdonalds','cashier', 'the cake is a lie')

for (let i = 0; i < interests.length; i++) {
  console.log('* ' + interests[i])
}

console.log(' ')
console.log('My Previous Experience:')

function displayPastPosition(companyName,title,Description){
  console.log(companyName + 'Zaxbys' + ' ' + Description + ' ')
}
// let pastPositions = (skill, cool) => {
//     if (cool) {
//       console.log('*' BAM: ${skill});
//     } else {
//       console.log('*' ${skill});
//     }
//   };