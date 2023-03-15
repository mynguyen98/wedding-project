import React from 'react'
import { useState, useEffect } from 'react'
import TitleSection from '../components/TitleSection'
import YouTube from 'react-youtube'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAudioPlay } from '../features/music-vid-reducer'

const YoutubeVideo = () => {
  const dispatch = useDispatch()
  const { audioElement, isAudioPlay } = useSelector((store) => store.musicVid)
  const [prevState, setPrevState] = useState(false)
  const onPlay = () => {
    audioElement.pause()
    setPrevState(isAudioPlay)
    dispatch(setIsAudioPlay(false))
  }
  const onPause = () => {
    if (prevState) {
      audioElement.play()
      dispatch(setIsAudioPlay(true))
    }
    return
  }
  return (
    <div className='py-10 px-3 section-mb layout-mw'>
      <TitleSection title='VIDEO' />
      <div className='pt-5  pb-3'>
        <YouTube
          videoId='GhQxrCrVSyw'
          opts={{ width: '100%', height: '325' }}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>
    </div>
  )
}

export default YoutubeVideo
