const HeadingComponent = (props) =>{
    // let text = 'This is my Heading Component from another file!';
    console.log(props);
   return  (
        <h1>{props.h1Text}</h1>
    );
};

export default HeadingComponent; //This gets the file ready to be EXPORTED 
