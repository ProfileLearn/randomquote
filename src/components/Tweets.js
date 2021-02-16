import { useState } from 'react'
import "./Tweets.css"

export function Tweets() {

  
  const urls = [
    "https://twitter.com/CFKArgentina/status/1353380755779407872",
    "https://twitter.com/DalaiLama/status/1358724870486384644",
    "https://twitter.com/SadhguruJV/status/1360420615237238784",
    "https://twitter.com/evoespueblo/status/1358442307402534913"
  ]
  const autores = [
    "Evo Morales",
    "CFK",
    "Sadhgurú",
    "Dalai Lama",
    "Ayrton Senna"
  ]
  function randAutor(){
    const n = Math.floor(Math.random() * autores.length)
    return autores[n]
  };
  function randTweet(){
    const n = Math.floor(Math.random() * urls.length)
    return urls[n]
  };

  const [url, setUrl] = useState(randTweet);
  const [autor, setAutor] = useState(randAutor);
  
  function handleClick() {
    setAutor(randAutor);
    setUrl(randTweet);  
  }

  return (

    <div id="content">
      <p id="text">{url}</p>
      <p id="author">{autor}</p>
      <button id="new-quote" onClick={handleClick}>Boton</button>
      <a rel="noreferrer" href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">Anchor</a>
    </div>
  )

}