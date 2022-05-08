// Una persona se pone a observar el cielo y ve dos pájaros en vuelo. El primer pájaro A va a una velocidad de ___ m/s mientras que el otro pájaro B vuela a una velocidad de ___ m/s. Calcule la velocidad relativa del pájaro B con respecto al pájaro A.

// V = velocidad pájaro A
// V1 = velocidad pájaro B
// V2 = velocidad B respecto de A

// V2 = V1 - V

export const Problem1 = ({ onChange }) => {
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
        </span>c. Si ambas velocidades son con
        respecto a la Tierra, ¿Cuál será su
        velocidad de la nave B en relación a la nave A?
      </p>
    </>
  )
}
