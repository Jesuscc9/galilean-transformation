/* eslint-disable camelcase */
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Controls } from './Components'
import { animate, motion, useMotionValue } from 'framer-motion'
import { convertToHtml, imagesUrl } from './helpers'

let LINE = null
const CIRCLE_WIDTH = 50

const initialUiData = {
  observerUrl: imagesUrl.earthDraw,
  observerLabel: convertToHtml(''),
  circles: {
    v1: {
      url: undefined,
      label: convertToHtml('')
    },
    v2: {
      url: undefined,
      label: convertToHtml('')
    }
  }
}

function App () {
  const ball1Ref = useRef(null)
  const ball2Ref = useRef(null)

  const containerRef = useRef(null)
  const controlsRef = useRef(null)
  const [distance, setDistance] = useState(0)
  const [uiData, setUiData] = useState(initialUiData)

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
    setInterval(() => {
      LINE.position()
    }, 10)
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
    handleStop()
    LINE.setOptions({ middleLabel: String(values.v) })

    const { problem } = values

    if (problem === 1) {
      LINE.setOptions({ middleLabel: String(values.v2) })
      Object.keys(circles).forEach((e) => {
        const value = e === 'v1' ? values.v : values.v1

        const direction =
          value > 0
            ? `${distance / 2 - CIRCLE_WIDTH}px`
            : `-${distance / 2 - CIRCLE_WIDTH}px`
        animate(circles[e].x, direction, {
          type: 'spring',
          duration: 10 - Math.abs(value) / 10
        })
      })
      return
    }

    if (problem === 2) {
      LINE.setOptions({ middleLabel: String(values.v2) })
      Object.keys(circles).forEach((e) => {
        const value = e === 'v1' ? values.v : values.v2
        const direction =
          value > 0
            ? `${distance / 2 - CIRCLE_WIDTH}px`
            : `-${distance / 2 - CIRCLE_WIDTH}px`
        animate(circles[e].x, direction, {
          type: 'spring',
          duration: 10 - Math.abs(value) / 10
        })
      })
      return
    }

    Object.keys(circles).forEach((e) => {
      const direction =
        values[e] > 0
          ? `${distance / 2 - CIRCLE_WIDTH}px`
          : `-${distance / 2 - CIRCLE_WIDTH}px`
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

  const handleInitialData = (data) => {
    setUiData(data)

    if (data.circles.v1.x !== undefined && data.circles.v2.x !== undefined) {
      Object.keys(circles).forEach((e) => {
        const x = (distance / 2 - CIRCLE_WIDTH) * data.circles[e].x
        animate(circles[e].x, `${x}px`, {
          type: 'spring',
          duration: 0,
          onUpdate: () => {
            LINE.position()
          }
        })
      })
    }
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
            >
              <label
                className='label'
                dangerouslySetInnerHTML={uiData.circles.v1.label()}
              />
              {uiData.circles.v1.url !== undefined && (
                <img src={uiData.circles.v1.url} alt='' />
              )}
            </motion.div>
            <motion.div
              className='ball ball-2'
              style={{ x: circles.v2.x }}
              ref={ball2Ref}
            >
              <label
                className='label'
                dangerouslySetInnerHTML={uiData.circles.v2.label()}
              />
              {uiData.circles.v2.url !== undefined && (
                <img src={uiData.circles.v2.url} alt='' />
              )}
            </motion.div>
            <div className='Observer'>
              <img
                src={uiData.observerUrl}
                className='Observer__image'
                alt=''
              />
              <p dangerouslySetInnerHTML={uiData.observerLabel()} />
            </div>
          </div>
          <div className='start-button'>
            <button onClick={onStart}>INICIAR</button>
            <button onClick={handleStop}>REINICIAR</button>
          </div>
        </div>
        <Controls
          ref={controlsRef}
          onSubmit={handleStart}
          onStop={handleStop}
          distance={distance}
          handleInitialData={handleInitialData}
        />
      </div>
    </>
  )
}

export default App
