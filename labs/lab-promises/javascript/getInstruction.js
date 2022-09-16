/* CALL THIS FUNCTION FROM OTHER FILES */
/****** DO NOT TOUCH vvv *****/

// setTimeout(una funcion, tiempoEnMillisegundos) - Boiler Plate
// setTimeout(function iWantSomeBread() { }, 2000) - Normal Function Declaration
// setTimeout(iWantSomeBread = () => {
//   console.log("Hello World")
// }, 2000) = ArrowFunction
// setTimeout(() => {}) - Anonima

// Callback based function
function getInstruction(food, step, callback, errorCallback) {
    setTimeout(() => {
      // Get the instruction string
      let instruction;

      if (food === "mashedPotatoes") {
        instruction = mashedPotatoes[step];
      }
      else if (food === "steak") {
        instruction = steak[step];
      }
      else if (food === "brusselsSprouts") {
        instruction = brusselsSprouts[step];
      }
      else if (food === "broccoli") {
        instruction = broccoli[step];
      };

      // Invoke the provided callback or errorCallback
      if (!instruction) {
        errorCallback("Instruction step does not exist!");
      } else {
        callback(instruction);
      }

    }, Math.floor(Math.random() * 1000));
}

/***** ^^^ DO NOT TOUCH *****/
