//import external COMPONENTs from FILE LOCATION //
import HeadingComponent from './Heading'; 
import SubheadingComponent from './subheading';
import CarComponent from './CarComponent';
import SongComponent from './SongComponent';

//====== COMPONENT 1 (Local) ======//

const App = () => {
  //initalizing variables
  let headingText = 'This is my heading from our App Component';
  // let numberValue = 250;
/*   let car = {
    model: 'Sierra 1500',
    make: 'GMC',
    year: 2021,
    type: 'AT4',
  }; */
  const song ={
    artist: 'Pendulum',
    title: 'Plastic World (VIP)', 
    genre:'Drum n\' Bass', 
    year:'2005', 
    youTubeLink:'https://www.youtube.com/watch?v=ex3JS2Y1Me4',
  };
  //initalizing functions
/*   const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
  } */

  //render JSX
    //attributes are comparable to properties, can be named whatever
      //dynamic attributes use {}, not ''
  return  (
    <div>
      <HeadingComponent 
      h1Text={headingText} 
      textToLog={'This is some text to console.log'} 
      numberToPass={25} 
      />
      <SongComponent jam={song}/>
      {/* <SubheadingComponent numberFromApp={numberValue}/> */}
      {/* <CarComponent vehicle={car}/> */}

      {/* <h3>What is the sum of 55 and 34? It's {addTwoNumbers(55, 34)}</h3> */}
    </div>
  );
};



// ======== Heading Component (COMPONENT #2) components MUST use PascalCasing -- moved to external file ======== // 

// ----- CHALLENGE --- //
// Create an object for your favorite song. Properties should include {artist, title, genre, year, youTubeLink} [x]
// Create a component called SongComponent [x]
// Pass your song object into your SongComponent [x]
// Render the song details inside of your component [x]
// Make the song name clickable, so when a user clicks on the name of the song it redirects to the song link on YouTube []


export default App;
