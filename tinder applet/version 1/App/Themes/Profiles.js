
const profilesList = [
  {image: require('../Images/Profiles/harold.jpg'), name: "Harold", age:"65", occupation: "Internet meme"},
  {image: require('../Images/Profiles/barbara.jpg'), name: "Barbara", age:"24", occupation: "Designer"},
  {image: require('../Images/Profiles/james.jpg'), name: "James", age:"25", occupation: "MD Student"},
  {image: require('../Images/Profiles/john.jpg'), name: "John", age:"23", occupation: "Engineer"},
  {image: require('../Images/Profiles/linda.jpg'), name: "Linda", age:"23", occupation: "Software engineer"},
  {image: require('../Images/Profiles/liz.jpg'), name: "Liz", age:"25", occupation: "Photographer"},
  {image: require('../Images/Profiles/mary.jpg'), name: "Mary", age:"24", occupation: "High school teacher"},
  {image: require('../Images/Profiles/michael.jpg'), name: "Michael", age:"27", occupation: "Freelancer"},
  {image: require('../Images/Profiles/patricia.jpg'), name: "Patricia", age:"26", occupation: "Engineer"},
  {image: require('../Images/Profiles/robert.jpg'), name: "Robert", age:"30", occupation: "Physician"},
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
