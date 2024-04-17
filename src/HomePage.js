import { useState } from 'react';
import video from './food.mp4';

function HomePage({setWordSubmitted}) {
    const [mySearch, setMySearch] = useState("");

    const myRecipeSearch = (e) => {
        setMySearch(e.target.value);
    }
    
    const finalSubmit = (e) => {
        e.preventDefault();
        setWordSubmitted(mySearch);
    }

    return (
        <div>
            <div className='container'>
                <video autoPlay muted loop>
                    <source src={video} type='video/mp4'/>
                </video>
                <h1 className='header'>Find Your Recipe</h1>
            </div>

            <div className='search-container'>
                <form onSubmit={finalSubmit}>
                    <input className='input' placeholder='Search' onChange={myRecipeSearch} value={mySearch}/>
                </form>
                <button className='btn' onClick={finalSubmit}>Find</button>
            </div>
        </div>
    )
}

export default HomePage;