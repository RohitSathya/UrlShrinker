import { useState } from 'react'
import axios from 'axios'
import './app.css'
import link from './link'
function App() {
  const [url,seturl]=useState('')
   const [short,setshort]=useState('')

   async function submitUrl(){
     const res=await axios.post(link+'/posturl',{full:url})
     
     console.log(res.data)
     const {data}=res.data
     setshort(data)
   }  
  async function showUrl(){
    const res2=await axios.get(link+`/h/${short}`)
    const {total}=res2.data
    console.log(total.full)
    window.location.href=total.full
  }
  function copyToClipboard() {
    navigator.clipboard.writeText(link+'/h/'+short)
      .then(() => {
        alert('Link copied to clipboard!')
      })
      .catch(err => {
        console.error('Failed to copy:', err)
      })
  }

  return (
    <>
     <div className="app-container">
      <h1 className="heading">URL Shortener</h1>
      <input
        type='text'
        className="url-input"
        placeholder='Enter URL'
        value={url}
        onChange={(e) => seturl(e.target.value)}
      />
      <button className="submit-btn" onClick={submitUrl}>Shorten</button>
      {short === '' ? null : (
        <div>
           <p className="short-url" onClick={showUrl}>{short}</p>
        <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
          
        </div>
       
      )}
    </div>
    </>
  )
}

export default App
