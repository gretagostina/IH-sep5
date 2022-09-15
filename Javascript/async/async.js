// Usando Async Await

// Es una funcion que basicamente espera por la respuesta de otr funcion, o mas abstracto es un logica que esepra por  otra logica.

// En nuestro caso, el papa esperara por lo que vel el hijo!!!
// Podemos asumir que el papa es asyncornico y el hijo es la promesa? ??

/// Dentro de la funcion asyncronica que en este caso es el papa, usaremos el keyword ASYNC y ""AWAIT" y como esto es syntax de JS, el lenguaje lo reconoce.

const sonChecksWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    const possibleOutcome = ["Sunny", "Rainy", "Unexpected Error"];
    const randomNumber = Math.floor(Math.random() * 3);
    const result = possibleOutcome[randomNumber];
    console.log(`The weather is ${result}`);

    //Tanto rainy como sunny son las useCases que estaremos resolviendo dentro del resolve
    if (result === "Sunny" || result === "Rainy") {
      resolve(result);
    }
    // El caso de que el hijo no se pueda montar en el arbol es lo que estaremos rechazando
    else {
      reject(new Error(`I cannot tell you what the weather is!`));
    }
  }, 1000);
});

const fatherWillDecide = async () => {
  const weather = await sonChecksWeather;
  if (weather === "Sunny") {
    console.log(`I have decided that we are going fishing!!!`);
  } else if (weather === "Rainy") {
    console.log(
      `It's going to rain so, I have decided that we are staying in playing playstation!`
    );
  }
};

fatherWillDecide();
