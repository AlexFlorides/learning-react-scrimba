import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState([])

    const [imageWidth, setImageWidth] = React.useState(1000)
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function updateImageWidth(width){
        setImageWidth((width / 32) + 10)
    }
    
    return (
        <main className="main-form-meme-proj3">
            <div className="form-proj3">
                <input 
                    type="text"
                    maxLength={imageWidth}
                    placeholder="Top text"
                    className="form-input-proj3"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    maxLength={imageWidth}
                    placeholder="Bottom text"
                    className="form-input-proj3"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form-button-proj3"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme-proj3">
                <img onLoad={(img) => updateImageWidth(img.target.width)} id="meme-image-proj3" alt="Random Meme" src={meme.randomImage} className="meme-image-proj3" />
                <h2 className="meme-text-proj3 top-proj3">{meme.topText}</h2>
                <h2 className="meme-text-proj3 bottom-proj3">{meme.bottomText}</h2>
            </div>
        </main>
    )
}