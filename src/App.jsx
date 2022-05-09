/* eslint-disable camelcase */
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Controls } from './Components'
import { animate, motion, useMotionValue } from 'framer-motion'

let LINE = null
const BALL_WIDTH = 50

function App () {
  const ball1Ref = useRef(null)
  const ball2Ref = useRef(null)

  const containerRef = useRef(null)
  const controlsRef = useRef(null)
  const [distance, setDistance] = useState(0)

  const circles = {
    v1: {
      x: useMotionValue('0px')
    },
    v2: {
      x: useMotionValue('0px')
    }
  }

  circles.v1.x.onChange(() => {
    LINE.position()
  })

  circles.v2.x.onChange(() => {
    LINE.position()
  })

  useEffect(() => {
    setDistance(containerRef.current?.clientWidth)
  }, [])

  useEffect(() => {
    if (ball1Ref.current === null || ball2Ref.current === null) return
    LINE = new LeaderLine(ball1Ref.current, ball2Ref.current, {
      middleLabel: '0',
      endPlug: 'behind',
      color: '#2e2e2ec0'
    })
  }, [])

  const handleStart = (values) => {
    console.log({ values })
    handleStop()
    LINE.setOptions({ middleLabel: String(values.v) })

    Object.keys(circles).forEach((e) => {
      const direction = values[e] > 0 ? `${(distance / 2) - BALL_WIDTH}px` : `-${(distance / 2) - BALL_WIDTH}px`
      animate(circles[e].x, direction, {
        type: 'spring',
        duration: 10 - Math.abs(values[e]) / 10
      })
    })
  }

  const handleStop = () => {
    LINE.setOptions({ middleLabel: '0' })
    Object.keys(circles).forEach((e) => {
      animate(circles[e].x, '0px', {
        type: 'spring',
        duration: 0,
        onComplete: () => {
          LINE.position()
        }
      })
    })
  }

  const onStart = (e) => {
    controlsRef.current.handleSubmit(e)
  }

  return (
    <>
      <div className='main-container'>
        <div className='Simulation'>
          <h1>Simulacion: </h1>
          <div className='circles-container' ref={containerRef}>
            <motion.div
              className='ball ball-1'
              style={{ x: circles.v1.x }}
              ref={ball1Ref}
            />
            <motion.div
              className='ball ball-2'
              style={{ x: circles.v2.x }}
              ref={ball2Ref}
            />
            <div className='earth-image-container'>
              <img src='https://cdn-icons-png.flaticon.com/512/139/139706.png' className='earth-image' alt='' />
              <p>Observador</p>
            </div>
          </div>
          <div className='start-button'>
            <button onClick={onStart}>INICIAR</button>
            <button onClick={handleStop}>REINICIAR</button>
          </div>
        </div>
        <Controls ref={controlsRef} onSubmit={handleStart} onStop={handleStop} distance={distance} />
      </div>
    </>
  )
}

export default App
