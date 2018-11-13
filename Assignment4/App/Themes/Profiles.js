
const profilesList = [
  {image: require('../Images/harold.jpg'), name: "Harold", age:"65", occupation: "Internet meme"},
  {image: require('../Images/barbara.jpeg'), name: "Barbara", age:"24", occupation: "Designer"},
  {image: require('../Images/james.jpeg'), name: "James", age:"25", occupation: "MD Student"},
  {image: require('../Images/john.jpeg'), name: "John", age:"23", occupation: "Engineer"},
  {image: require('../Images/linda.jpeg'), name: "Linda", age:"23", occupation: "Software engineer"},
  {image: require('../Images/liz.jpeg'), name: "Liz", age:"25", occupation: "Photographer"},
  {image: require('../Images/mary.jpeg'), name: "Mary", age:"24", occupation: "High school teacher"},
  {image: require('../Images/michael.jpeg'), name: "Michael", age:"27", occupation: "Freelancer"},
  {image: require('../Images/patricia.jpeg'), name: "Patricia", age:"26", occupation: "Engineer"},
  {image: require('../Images/robert.jpeg'), name: "Robert", age:"30", occupation: "Physician"},
]

const profiles = {
  harold: profilesList[0],
  barbara: profilesList[1],
  james: profilesList[2],
  john: profilesList[3],
  linda: profilesList[4],
  liz: profilesList[5],
  mary: profilesList[6],
  michael: profilesList[7],
  patricia: profilesList[8],
  robert: profilesList[9],

  random: () => {
    return profilesList[Math.floor(Math.random() * 10)]
  }

}

export default profiles
