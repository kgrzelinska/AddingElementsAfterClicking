
// Po kliknięciu buttona dodają się na stronie elementy <div> w postaci czarnych kwadratów ,
// z kolejnymi liczbami (począwszy od 1).
// Liczby, które są podzielne przez 5 zamiast kwadratu są w kółku z białym tłem.




const btnClick = document.querySelector("button");

let number = 1;
let activeNumber = 1;

const addElement = function () {
    const elementDiv = document.createElement("div");
    elementDiv.textContent = number;

    /* <------------------ PIERWSZE ROZWIĄZANIE ------------------> */
    // if (activeNumber == 5) {
    //     activeNumber = 0;
    //     elementDiv.classList.add("circle");
    // }

    if (number % 5 == 0) {
        elementDiv.classList.add("circle");
    }

    document.body.appendChild(elementDiv)
    number++;
    activeNumber++;
}

btnClick.addEventListener("click", addElement);