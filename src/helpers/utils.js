export const formula = ({ v1, v2, v }) => {
  if (v1 && v2 && v === undefined) {
    // Case of problem 1
    return {
      v1,
      v2,
      v: v1 - v2
    }
  }

  if (v && v2 && v1 === undefined) {
    return {
      v,
      v1: v2 + v,
      v2
    }
  }

  if (v1 && v && v2 === undefined) {
    // Case of problem 2
    return {
      v1,
      v2: v1 - v,
      v
    }
  }

  return {
    v1,
    v2,
    v
  }
}

export const imagesUrl = {
  backwardPerson: 'https://cdn.pixabay.com/photo/2012/04/13/16/42/man-32808_960_720.png',
  rightwardSpaceship: 'https://images.vectorhq.com/images/previews/82e/green-spaceship-102903.png',
  leftwardSpaceship: 'https://images.vectorhq.com/images/previews/82e/green-spaceship-102903.png',
  earthDraw: 'https://cdn-icons-png.flaticon.com/512/139/139706.png',
  rightwardMotorcycle: 'https://pixy.org/download/392530/',
  leftwardMotorcycle: 'https://media1.giphy.com/media/m9dGWjSXQkXKlZzv8M/giphy.gif?cid=6c09b9522hjx8nczxfh5nv9dpbc5xyvz3ksyx22cddl59fn8&rid=giphy.gif&ct=s',
  rightwardBird: 'https://i.pinimg.com/originals/64/0e/b1/640eb1c9b11faf47bad0288fed03e916.png',
  leftwardBird: 'http://pngimg.com/uploads/birds/birds_PNG49.png',
  radar: 'https://technologysport.com/tienda/1477-home_default/radar-pocket-medicion-de-velocidad.jpg',
  leftwardCar: 'https://i.pinimg.com/originals/d1/76/0b/d1760b47412045d7d397507f8ea197f3.png'
}
