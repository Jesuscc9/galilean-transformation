// La nave A se mueve hacia la izquierda con una velocidad de 0.65c y en el mismo sentido otra nave, B, tiene una velocidad de
// 0.7c. Si ambas velocidades son con respecto a la Tierra, ¿Cuál será su velocidad de la nave B en relación a la nave A?

export const Problem4 = ({ onChange }) => {
  return (
    <>
      <p className='Problem__description'>La nave A se mueve hacia la izquierda con una velocidad de
        <span>
          <input
            min={-100}
            step={0.1}
            type='number'
            required
          />
        </span>
        c y en el mismo sentido otra nave, B, tiene una velocidad de
        <span>
          <input
            min={-100}
            step={0.1}
            type='number'
            required
          />
        </span>c. Si ambas velocidades son con respecto a la Tierra, ¿Cuál será su velocidad de la nave B en relación a la nave A?
      </p>
    </>
  )
}
