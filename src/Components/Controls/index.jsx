import { forwardRef, useImperativeHandle, useState } from 'react'
import './styles.css'

const BALL_WIDTH = 50

export const Controls = forwardRef(({ onSubmit, onStop, distance }, ref) => {
  console.log({ distance })

  const [values, setValues] = useState([
    {
      value: '0',
      duration: 0,
      direction: '0px'
    },
    {
      value: '0',
      duration: 0,
      direction: '0px'
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ distance })

    const updated = values.map((e) => {
      e.value = Number(e.value)

      return {
        value: Number(e.value),
        duration: 10 - Math.abs(e.value) / 10,
        direction: e.value > 0 ? `${(distance / 2) - BALL_WIDTH}px` : `-${(distance / 2) - BALL_WIDTH}px`
      }
    })

    onSubmit([...updated])
  }

  useImperativeHandle(ref, () => {
    return {
      handleSubmit
    }
  })

  return (
    <form className='Controls' onSubmit={handleSubmit}>
      <div className='Problem'>
        <h1>Problema: </h1>
        <p className='Problem__description'>La nave A se mueve hacia la izquierda con una velocidad de
          <span>
            <input
              min={-100}
              step={0.1}
              type='number'
              value={values[1].value}
              onChange={(e) => {
                const updated = values
                updated[1].value = e.target.value
                setValues([...updated])
              }}
              required
            />
          </span>
          c y en el mismo sentido otra nave, B, tiene una velocidad de
          <span>
            <input
              min={-100}
              step={0.1}
              type='number'
              value={values[0].value}
              onChange={(e) => {
                const updated = values
                updated[0].value = e.target.value
                setValues([...updated])
              }}
              required
            />
          </span>c. Si ambas velocidades son con
          respecto a la Tierra, ¿Cuál será su
          velocidad de la nave B en relación a la nave A?
        </p>
      </div>
      <div className='Data'>
        <h1>Datos: </h1>
        <p>V1: {values[0].value}</p>
        <p>V2: {values[1].value}</p>
        <p>V: {values[1].value - values[0].value} </p>
      </div>
      <button type='submit' style={{ display: 'none' }} />
    </form>
  )
})
