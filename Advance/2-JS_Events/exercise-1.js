//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const boton$$ = document.querySelector("#btnToClick");
const clickEven =(even) => {
    console.log(even)
}

boton$$.addEventListener("click", clickEven)

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const input1$$ = document.querySelector(".uno");
const focusEven = () => {
    console.log(input1$$.value)
}
input1$$.addEventListener("focus", focusEven)

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input2$$ = document.querySelector(".dos");
const inputEven = () => {
    console.log(input2$$.value)
}
input2$$.addEventListener("focus", inputEven)