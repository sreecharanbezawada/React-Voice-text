/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable new-cap */
/* eslint-disable react/button-has-type */
import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone} from '@fortawesome/free-solid-svg-icons'
import './VoiceToText.css'

const VoiceToText = () => {
  const [text, setText] = useState('')

  const handleVoiceButtonClick = () => {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'en-US'
    recognition.start()

    recognition.onresult = event => {
      const {transcript} = event.results[0][0]
      setText(transcript)
    }

    recognition.onerror = event => {
      console.error(event.error)
    }
  }

  return (
    <div className="container">
      <button className="voice-button" onClick={handleVoiceButtonClick}>
        <FontAwesomeIcon icon={faMicrophone} />
      </button>
      <p>{text}</p>
    </div>
  )
}

export default VoiceToText
