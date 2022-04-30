import { useState } from 'react'

export const Controls = ({ onSubmit, onStop }) => {
  const [ball1V, setBall1V] = useState('0')
  const [ball2V, setBall2V] = useState('0')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit([Number(ball1V), Number(ball2V)])
  }

  return (
    <form className='Controls' onSubmit={handleSubmit}>

      <div className='flex'>
        <label htmlFor='ball1-input'>Velocidad 1: </label>
        <input min={-100} step={10} type='range' id='ball1-input' value={ball1V} onChange={(e) => { setBall1V(e.target.value) }} />
        <label htmlFor=''>{ball1V}</label>
      </div>

      <div className='flex'>
        <label htmlFor='ball2-input'>Velocidad 2: </label>
        <input min={-100} step={10} type='range' id='ball2-input' value={ball2V} onChange={(e) => { setBall2V(e.target.value) }} />
        <label htmlFor=''>{ball2V}</label>
      </div>

      <button className='start-button' type='submit'>
        INICIAR
      </button>

      <button className='start-button' type='button' onClick={onStop}>
        RESTART
      </button>
    </form>
  )
}
