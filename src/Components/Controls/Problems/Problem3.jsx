// Una motocicleta se mueve a una velocidad de __ c con respecto a un radar de velocidad. En sentido contrario se va acercando hacia la motocicleta un coche con una velocidad de __ c con respecto a la motocicleta. ¿Cual será la velocidad del coche según el radar de velocidad?

// V2= velocidad del coche con respecto a la motocicleta
// V=velocidad de la motocicleta con respecto al radar de velocidad
// V1 (la que buscamos): velocidad del coche con respecto al radar de velocidad

// V1=v2+v

export const Problem3 = ({ onChange }) => {
  return (
    <>
      <p className='Problem__description'>Una motocicleta se mueve a una velocidad de
        <span>
          <input
            min={-100}
            step={0.1}
            type='number'
            required
          />
        </span>
        c con respecto a un radar de velocidad. En sentido contrario se va acercando hacia la motocicleta un coche con una velocidad de
        <span>
          <input
            min={-100}
            step={0.1}
            type='number'
            required
          />
        </span>c con respecto a la motocicleta. ¿Cual será la velocidad del coche según el radar de velocidad?
      </p>
    </>
  )
}
