import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import Select from 'react-select'
import { formula } from '../../helpers'
import { Problems, problemsOptions } from './Problems/'
import './styles.css'

const initialState = {
  v1: undefined,
  v2: undefined,
  v: undefined,
  problem: 1
}

export const Controls = forwardRef(({ onSubmit, onStop, distance, handleInitialData }, ref) => {
  const [selectedProblem, setSelectedProblem] = useState(0)
  const [values, setValues] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Object.keys(values).some((key) => values[key] === undefined)) return

    onSubmit(values)
  }

  useImperativeHandle(ref, () => {
    return {
      handleSubmit
    }
  })

  useEffect(() => {
    setValues({ ...initialState })
  }, [selectedProblem])

  const handleChange = ({ field, value }) => {
    console.log({ field, value })
    setValues((prev) => {
      prev[field] = value
      return formula(prev)
    })
  }

  const Problem = Problems[selectedProblem]

  const { v1, v2, v } = values

  return (
    <form className='Controls' onSubmit={handleSubmit}>
      <div className='Problem'>
        <div className='Problem__header'>
          <h1>Problema</h1>
          <Select
            options={problemsOptions}
            onChange={(e) => {
              setSelectedProblem(e.value)
            }}
            defaultValue={{ value: 0, label: 1 }}
          />
          <span> :</span>
        </div>
        <Problem onChange={handleChange} setInitialData={handleInitialData} />
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
