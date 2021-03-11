//Importing CSS
import './App.css';

//Component
let SongComponent =(props)=>{
    return(
            <div className='text-center song-component'>
                <hr/>
                <h2>{`My favorite song is `}
                    <a 
                        href={props.jam.youTubeLink} 
                        target='blank' 
                        rel='noreferrer'>
                        {props.jam.title}
                    </a>
                </h2>
                <h3>It's a {props.jam.genre} track by {props.jam.artist}.</h3>
                <h3>It was released in {props.jam.year}.</h3>
                <hr/>
            </div>
    );
};

export default SongComponent