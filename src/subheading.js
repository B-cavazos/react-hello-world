const SubheadingComponent = (props) =>{
    let myNumber = 25;
    console.log(props);
    return  (
      <h2>My favorite number from another file is: {props.numberFromApp}</h2>
    );
};

export default SubheadingComponent; //This gets the file ready to be EXPORTED 
