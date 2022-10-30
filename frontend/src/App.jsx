import { useState, useEffect } from 'react'
import DropDownSearch from './components/DropDownSearch'
import { FaArrowsAltV, FaUpload } from 'react-icons/fa'
import Upload from './components/Upload'

const IMG_DATA_STORAGE_KEY = "resize.bumble.imgdata"

function App() {
  const [src, setSrc] = useState('')
  const [imgData, setImgData] = useState(JSON.parse(localStorage.getItem(IMG_DATA_STORAGE_KEY)) || {
    width: 960,
    height: 540,
    name: 'fjord'
  })
  const [isOptionsShown, setIsOptionsShown] = useState(false)
  const [isUploadShown, setIsUploadShown] = useState(false)
  const [imgArr, setImgArr] = useState([])

  useEffect(() => {
    submit()
    getImg()
  }, [])

  async function getImg() {
    const res = await fetch('http://localhost:3000/resizeavailable')
    if (res.status === 404) {
      window.location.reload()
    } else {
      const data = await res.json()
      setImgArr(data)
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setImgData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function submit() {
    setSrc(`http://localhost:3000/resize/${imgData.name}${imgData.width && `/${imgData.width}`}${imgData.height && `/${imgData.height}`}`)
    localStorage.setItem(IMG_DATA_STORAGE_KEY, JSON.stringify(imgData))
  }

  function handleClick() {
    submit()
    setIsOptionsShown(false)
  }

  return (
    <div className="App">
      <div className="img-preview">
        <img src={src} />
      </div>
      <div className={`options${isOptionsShown ? "" : " hidden"}`}>
        <div className="controls">
          <DropDownSearch
            options={imgArr}
            submit={submit}
            onChange={setImgData}
            defaultOption={imgData.name}
            limit={imgArr.length > 10 ? 10 : 0}
          />
          <div className="dimensions">
            <label htmlFor="width">width</label>
            <input
              type="number"
              onChange={handleChange}
              name="width"
              value={imgData.width}
              id="width"
            />
            <label htmlFor="height">height</label>
            <input
              type="number"
              onChange={handleChange}
              name="height"
              value={imgData.height}
              id="height"
            />
          </div>
        </div>
        <div className='buttons'>
          <button
            className='submit-btn'
            onClick={handleClick}
          >
            OK
          </button>
          <button
            className='upload-show'
            onClick={() => setIsUploadShown(prev => !prev)}
          >
            <FaUpload />
          </button>
        </div>
      </div>
      <button
        className='options-show'
        onClick={() => setIsOptionsShown(prev => !prev)}
      >
        <FaArrowsAltV />
      </button>
      {isUploadShown && <Upload setIsUploadShown={setIsUploadShown} />}
    </div>
  )
}

export default App
