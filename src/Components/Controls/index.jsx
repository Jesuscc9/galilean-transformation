import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import Select from 'react-select'
import { formula } from '../../helpers'
import { Problems, problemsOptions } from './Problems/'
import './styles.css'

const BALL_WIDTH = 50

export const Controls = forwardRef(({ onSubmit, onStop, distance }, ref) => {
  const [selectedProblem, setSelectedProblem] = useState(0)

  // const [values, setValues] = useState([
  //   {
  //     value: '0',
  //     duration: 0,
  //     direction: '0px'
  //   },
  //   {
  //     value: '0',
  //     duration: 0,
  //     direction: '0px'
  //   }
  // ])

  const [values, setValues] = useState({
    v1: 0,
    v2: 0,
    v: 0
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ values })
    onSubmit(values)

    // const updated = values.map((e) => {
    //   e.value = Number(e.value)
    //   return {
    //     value: Number(e.value),
    //     duration: 10 - Math.abs(e.value) / 10,
    //     direction: e.value > 0 ? `${(distance / 2) - BALL_WIDTH}px` : `-${(distance / 2) - BALL_WIDTH}px`
    //   }
    // })

    // onSubmit([...updated])
  }

  useImperativeHandle(ref, () => {
    return {
      handleSubmit
    }
  })

  useEffect(() => {
    setValues(formula(values))
  }, [values])

  const Problem = Problems[selectedProblem]

  const { v1, v2, v } = values

  return (
    <form className='Controls' onSubmit={handleSubmit}>
      <div className='Problem'>
        <h1>Problema: </h1>
        <Select
          options={problemsOptions} onChange={(e) => {
            setSelectedProblem(e.value)
          }}
          defaultValue={{ value: 0, label: 1 }}
        />
        <Problem />
      </div>
      <div className='Data'>
        <h1>Datos: </h1>
        <p>V1: {v1}</p>
        <p>V2: {v2}</p>
        <p>V: {v} </p>
      </div>
      <button type='submit' style={{ display: 'none' }} />
    </form>
  )
})
