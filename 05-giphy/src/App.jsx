import { useEffect, useState } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'

function App () {
  const [gifs, setGifs] = useState([]) // estado para guardar los gifs
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
      .then(response => response.json())
      .then(results => {
        // console.log(results.data)
        setGifs(results.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className='grid-cards'>
        {
          gifs.map(gif => (
            <ImageCard
              key={gif.id}
              url={gif.images.fixed_height.url}
              title={gif.title}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
