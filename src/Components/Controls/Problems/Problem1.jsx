// Una persona se pone a observar el cielo y ve dos pájaros en vuelo. El primer pájaro A va a una velocidad de ___ m/s mientras que el otro pájaro B vuela a una velocidad de ___ m/s. Calcule la velocidad relativa del pájaro B con respecto al pájaro A.

import { useEffect } from 'react'
import { imagesUrl } from '../../../helpers'

// V = velocidad pájaro A
// V1 = velocidad pájaro B
// V2 = velocidad B respecto de A

// V2 = V1 - V

// * Pruebe cambiar los sentidos de los pájaros

const uiData = {
  observerUrl: imagesUrl.backwardPerson,
  circles: {
    v1: {
      x: 0,
      url: imagesUrl.rightwardBird
    },
    v2: {
      x: 0,
      url: imagesUrl.leftwardBird
    }
  }
}

export const Problem1 = ({ onChange, setInitialData }) => {
  useEffect(() => {
    setInitialData(uiData)
  }, [])

  return (
    <>
      <p className='Problem__description'>Una persona se pone a observar el cielo y ve dos pájaros en vuelo. El primer pájaro A va a una velocidad de
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
        m/s mientras que el otro pájaro B vuela a una velocidad de
        <span>
          <input
            min={-100}
            step={0.1}
            type='number'
            required
            onChange={(e) => {
              onChange({ field: 'v2', value: Number(e.target.value) })
              onChange({ field: 'v', value: undefined })
            }}
          />
        </span>m/s. Calcule la velocidad relativa del pájaro B con respecto al pájaro A.
      </p>
    </>
  )
}
