import './App.css'

function App() {
  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: any) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const gallery = Object.values(import.meta.glob('./assets/*.{png,jpg,jpeg,PNG,JPEG,webp}', {
    eager: true, query: '?url', import: 'default'
  })).filter((url): url is string => typeof url === 'string')

  // Shuffle the gallery array on each render
  const shuffledGallery = shuffleArray(gallery)

  return (
    <>
      <h1>KIDS ON BIKES SCRAP BOOK: 1985</h1>
      <div className='grid'>
        {shuffledGallery.map((r, i) =>
          <a href={r}><img key={i} src={r} /></a>)}
      </div>
    </>
  )
}

export default App