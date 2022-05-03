/* eslint-disable camelcase */
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Controls } from './Components'
import { animate, motion, useMotionValue } from 'framer-motion'

let LINE = null

function App () {
  const ball1Ref = useRef(null)
  const ball2Ref = useRef(null)

  const containerRef = useRef(null)
  const controlsRef = useRef(null)
  const [distance, setDistance] = useState(0)

  const circles = [
    {
      x: useMotionValue('0px')
    },
    {
      x: useMotionValue('0px')
    }
  ]

  circles.forEach((e) => {
    e.x.onChange(() => {
      LINE.position()
    })
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
    if (values.some(({ value }) => value === 0)) return
    handleStop()

    const [firstVal, secondVal] = values
    const length = secondVal.value - firstVal.value

    circles.forEach((el, i) => {
      const { duration, direction } = values[i]

      animate(el.x, direction, {
        type: 'spring',
        duration: duration === 0 ? 1 : duration,
        onUpdate: () => {
          LINE.setOptions({ middleLabel: String(length) })
        }
      })
    })
  }

  const handleStop = () => {
    LINE.setOptions({ middleLabel: '0' })
    LINE.position()
    circles.forEach((el, i) => {
      animate(el.x, '0px', {
        type: 'spring',
        duration: 0
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
          <div className='start-button'>
            <button onClick={onStart}>INICIAR</button>
            <button onClick={handleStop}>REINICIAR</button>
          </div>
          <h1>Simulacion: </h1>
          <div className='circles-container' ref={containerRef}>
            <motion.div
              className='ball ball-1'
              style={{ x: circles[0].x }}
              ref={ball1Ref}
            />
            <motion.div
              className='ball ball-2'
              style={{ x: circles[1].x }}
              ref={ball2Ref}
            />
            <div className='earth-image-container'>
              <img src='https://cdn-icons-png.flaticon.com/512/139/139706.png' className='earth-image' alt='' />
              <p>Observador</p>
            </div>
          </div>
        </div>
        <Controls ref={controlsRef} onSubmit={handleStart} onStop={handleStop} distance={distance} />
      </div>
    </>
  )
}

export default App
