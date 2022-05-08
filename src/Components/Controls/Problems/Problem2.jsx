// Una persona se pone a observar el cielo y ve dos pájaros en vuelo. El primer pájaro A va a una velocidad de ___ m/s mientras que el otro pájaro B vuela a una velocidad de ___ m/s. Calcule la velocidad relativa del pájaro B con respecto al pájaro A.

// V = velocidad pájaro A
// V1 = velocidad pájaro B
// V2 = velocidad B respecto de A

// V2 = V1 - V

// * Pruebe cambiar los sentidos de los pájaros

export const Problem2 = ({ onChange }) => {
  return (
    <>
      <p className='Problem__description'>Una persona se pone a observar el cielo y ve dos pájaros en vuelo. El primer pájaro A va a una velocidad de
        <span>
          <input
            min={-100}
            step={0.1}
            type='number'
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
          />
        </span>m/s. Calcule la velocidad relativa del pájaro B con respecto al pájaro A.
      </p>
    </>
  )
}
