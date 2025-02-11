import React, { useState } from "react";
import get_memes from "../get_memes.js";


export default function Meme(){

    const [memeImage, setMemeImage] = useState("");

    function getMemeImage() {
        const memesArray = get_memes.data.memes;
        const randomNumber = Math.floor (Math.random()*memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
        
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text" 
                    className="form--input" 
                />
                <input 
                    type="text" 
                    placeholder="bottom text"
                    className="form--input" 
                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <img src={memeImage} alt="meme" className="meme--image" />
        </main>
    )
}