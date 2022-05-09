// La nave A se mueve hacia la izquierda con una velocidad de 0.65c y en el mismo sentido otra nave, B, tiene una velocidad de
// 0.7c. Si ambas velocidades son con respecto a la Tierra, ¿Cuál será su velocidad de la nave B en relación a la nave A?

import { useEffect } from 'react'
import { imagesUrl } from '../../../helpers'

const uiData = {
  observerUrl: imagesUrl.earthDraw,
  circles: {
    v1: {
      x: 0.25,
      url: imagesUrl.leftwardSpaceship
    },
    v2: {
      x: -0.75,
      url: imagesUrl.rightwardSpaceship
    }
  }
}

export const Problem4 = ({ onChange, setInitialData }) => {
  useEffect(() => {
    setInitialData(uiData)
  }, [])

  return (
    <>
      <p className='Problem__description'>La nave A se mueve hacia la izquierda con una velocidad de
        <span>
          <input
            min={-100}
            step={0.1}
            type='number'
            onChange={(e) => {
              onChange({ field: 'v1', value: Number(e.target.value) })
              onChange({ field: 'v', value: undefined })
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
            onChange={(e) => {
              onChange({ field: 'v2', value: Number(e.target.value) })
              onChange({ field: 'v', value: undefined })
            }}
            required
          />
        </span>c. Si ambas velocidades son con respecto a la Tierra, ¿Cuál será su velocidad de la nave B en relación a la nave A?
      </p>
    </>
  )
}
