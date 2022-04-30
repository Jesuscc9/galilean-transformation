/* eslint-disable camelcase */
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Controls } from './Components'
import { animate, motion, useAnimation, useMotionValue, useSpring } from 'framer-motion'

let LINE = null

function App () {
  const [activeAnimation, setActiveAnimation] = useState(false)

  const ball1Ref = useRef(null)
  const ball2Ref = useRef(null)

  const circles = [
    {
      x: useMotionValue('0vw')
    },
    {
      x: useMotionValue('0vw')
    }
  ]

  useEffect(() => {
    if (ball1Ref.current === null || ball2Ref.current === null) return
    LINE = new LeaderLine(
      ball1Ref.current,
      ball2Ref.current
    )

    circles.forEach((el) => el.x.onChange((e) => {
      LINE.position()
    }))
  }, [])

  const handleStart = (values) => {
    if (values.some(e => e === 0)) return
    handleStop()

    circles.forEach((el, i) => {
      const duration = 10 - (Math.abs(values[i]) / 10)
      const direction = values[i] > 0 ? '47vw' : '-47vw'

      animate(el.x, direction, {
        type: 'spring',
        duration: duration === 0 ? 1 : duration,
        onUpdate: () => {
          LINE.position()
        }
      })
    })
  }

  const handleStop = () => {
    circles.forEach((el, i) => {
      animate(el.x, '0vh', {
        type: 'spring',
        duration: 0,
        onComplete: () => {
          LINE.position()
        }
      })
    })
  }

  return (
    <>
      <div className='main-container'>
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
      </div>
      <Controls onSubmit={handleStart} onStop={handleStop} />
    </>
  )
}

export default App
