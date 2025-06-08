import './App.css'

// Import all images explicitly
import img1 from './assets/hackney-street.jpg'
import img2 from './assets/retro-car.webp'
import img3 from './assets/bowie-labyrinth.webp'
import img4 from './assets/bowie-portrait.webp'
import img5 from './assets/ghostbusters.jpg'
import img6 from './assets/marie.jpg'
import img7 from './assets/sheffield-united.webp'
import img8 from './assets/shoulderpads.jpg'
import img9 from './assets/simon-lebon.jpg'
import img10 from './assets/soda-stereo.png'
import img11 from './assets/st-james.webp'
import img12 from './assets/tears-for-fears.webp'
import img13 from './assets/the-moor-christmas.webp'
import img14 from './assets/tony.png'
import img15 from './assets/london-80s.jpg'
import img16 from './assets/winona-ryder.webp'

function App() {
  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array:any) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Gallery array with all imported images
  const gallery = [
    img1, img2, img3, img4, img5, img6, img7, img8, 
    img9, img10, img11, img12, img13, img14, img15, img16
  ]

  // Shuffle the gallery array on each render
  const shuffledGallery = shuffleArray(gallery)

  return (
    <>
      <h1>KIDS ON BIKES SCRAP BOOK: 1985</h1>
      <div className='grid'>
        {shuffledGallery.map((r, i) =>
          <a href={r} key={i}>
            <img src={r} alt={`80s memory ${i + 1}`} />
          </a>
        )}
      </div>
    </>
  )
}

export default App