// La nave A se mueve hacia la izquierda con una velocidad de 0.65c y en el mismo sentido otra nave, B, tiene una velocidad de
// 0.7c. Si ambas velocidades son con respecto a la Tierra, ¿Cuál será su velocidad de la nave B en relación a la nave A?

import { useEffect } from 'react'
import { imagesUrl, convertToHtml } from '../../../helpers'

const uiData = {
  observerUrl: imagesUrl.earthDraw,
  observerLabel: convertToHtml('Marco <span class="coeficient">1</span>'),
  circles: {
    v1: {
      x: 0,
      url: imagesUrl.rightwardSpaceship,
      label: convertToHtml('Evento')
    },
    v2: {
      x: 0,
      url: imagesUrl.leftwardSpaceship,
      label: convertToHtml('Marco <span class="coeficient">2</span>')
    }
  }
}

export const Problem4 = ({ onChange, setInitialData }) => {
  useEffect(() => {
    setInitialData(uiData)
  }, [])

  useEffect(() => {
    onChange({ field: 'problem', value: 4 })
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
        c y en sentido contrario otra nave, B, tiene una velocidad de
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
