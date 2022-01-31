const fullName = 'reid michael mclain';
const career = 'Web Dev Student'
const description = 'the cake is a lie';

let interests = ['Chess', 'Auburn sports', 'Dungeons and Dragons']

const pastPositions = [
  {
    Company: 'uBreakIfix',
    Title: 'Repair technician',
    Description: 'Repaired iPhones and Samsungs with all varieties of technology'
  },
  {
    Company: 'Zaxbys',
    Title: 'Cashier/cook',
    Description: 'I took money for orders, then eventually cooked food'
  },
  {
    Company: 'Innovate Birmingham',
  Title: 'Student',
  Description: 'Full Stacks and professional development'
}
]

function displaySkills(skill, cool) {
  if (cool) {
    console.log('* BAM: ' + skill)
  } else {
    console.log('* ' + skill)
  }
}

// function displayPosition(Company, Title, Description){
//   console.log(Company + ' at ' + Title + ' - ' + Description)
// }
console.log('Name: ' + fullName.toUpperCase());
console.log('Career: ' + career);
console.log('Descriptions: ' + description);
console.log(' ');
console.log('My Interests:')

for (let i = 0; i < interests.length; i++) {
  console.log("* " + interests[i])
}

console.log(' ')

console.log('My Previous Experience:')

for (let i = 0; i < pastPositions.length; i++) {
  console.log(pastPositions[i].Title + ' at ' + pastPositions[i].Company + ' ' + pastPositions[i].Description)
}

// displayPosition('uBreakIfx', 'Repair Technician', 'Repaired iPhones and Samsungs with all varieties of technology');
// displayPosition('Innovate Bham', 'Student', 'Full Stacks and professional development' );
// displayPosition('Zaxbys', 'Cashier/Cook', 'I took money for orders, then eventually cooked food');

console.log(' ');
console.log('My Skills: ');

displaySkills('solving rubix cube', true);
displaySkills('being an axe murderer', false);
displaySkills('Open mindedness', true);
displaySkills('being late', false);
