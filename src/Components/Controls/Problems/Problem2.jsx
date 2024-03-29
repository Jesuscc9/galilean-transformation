// Una motocicleta se mueve a una velocidad de __ c con respecto a un radar de velocidad. En sentido contrario se va acercando hacia la motocicleta un coche con una velocidad de __ c con respecto a la motocicleta. ¿Cual será la velocidad del coche según el radar de velocidad?

// V2= velocidad del coche con respecto a la motocicleta
// V=velocidad de la motocicleta con respecto al radar de velocidad
// V1 (la que buscamos): velocidad del coche con respecto al radar de velocidad

// V1=v2+v

import { useEffect } from 'react'
import { convertToHtml, imagesUrl } from '../../../helpers'

const uiData = {
  observerUrl: imagesUrl.radar,
  observerLabel: convertToHtml('Marco <span class="coeficient">1</span>'),
  circles: {
    v1: {
      x: 0,
      url: imagesUrl.rightwardMotorcycle,
      label: convertToHtml('Marco <span class="coeficient">1</span>')
    },
    v2: {
      x: 0,
      url: imagesUrl.leftwardCar,
      label: convertToHtml('Evento')
    }
  }
}

export const Problem2 = ({ onChange, setInitialData }) => {
  useEffect(() => {
    setInitialData(uiData)
  }, [])

  useEffect(() => {
    onChange({ field: 'problem', value: 2 })
  }, [])

  return (
    <>
      <p className='Problem__description'>
        Una motocicleta se mueve a una velocidad de
        <span>
          <input
            min={0}
            max={1}
            step={0.1}
            type='number'
            required
            onChange={(e) => {
              onChange({ field: 'v', value: Number(e.target.value) })
              onChange({ field: 'v1', value: undefined })
            }}
          />
        </span>
        c con respecto a un radar de velocidad. En sentido contrario se va
        acercando hacia la motocicleta un coche con una velocidad de
        <span>
          <input
            min={0}
            max={1}
            step={0.1}
            type='number'
            required
            onChange={(e) => {
              onChange({ field: 'v2', value: Number(e.target.value) })
              onChange({ field: 'v1', value: undefined })
            }}
          />
        </span>
        c con respecto a la motocicleta. ¿Cual será la velocidad del coche según
        el radar de velocidad?
      </p>
    </>
  )
}
