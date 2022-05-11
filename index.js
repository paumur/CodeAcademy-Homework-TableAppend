// INPUT SELECTORS

const inputName = document.querySelector(".inputName");
const inputSurname = document.querySelector(".inputSurname");
const inputAge = document.querySelector(".inputAge");
// const tableBody = document.getElementsByTagName("tbody");

// BUTTON SELECTORS

const buttonAdd = document.querySelector(".buttonAdd");
const buttonDeleteFirst = document.querySelector(".buttonDeleteFirst");
const buttonDeleteLast = document.querySelector(".buttonDeleteLast");
const buttonDestruction = document.querySelector(".buttonDestruction");

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputName.value === "" ||
    !isNaN(inputName.value) ||
    inputName.value === "" ||
    !isNaN(inputSurname.value) ||
    Number(inputAge.value) <= 0 ||
    Number(inputAge.value >= 123) ||
    isNaN(inputAge.value)
  )
    return alert(
      `Prašome užpildyti visus langelius ir pateikti bent kiek įtikinamą informaciją! \n Pavyzdžiui: \n 1. Vardas negali būti skaičius, tačiau gali būti teksas + skaičius. Tiek dar šį kart nusileisiu. \n 2. Amžius negali būti didesnis už pasaulio rekordą, kuris beveik 123 metai ar lygus 0 ar mažesnis.`
    );
  var NewElement = document.createElement("tr");
  NewElement.innerHTML = `<td>${inputName.value}</td> <td>${inputSurname.value}</td> <td>${inputAge.value}</td>`;
  document.querySelector("#tbody").append(NewElement);
});

buttonDeleteFirst.addEventListener("click", (e) => {
  e.preventDefault();
  var countTr = document.querySelectorAll("tr")[1];
  document.querySelector("#tbody").removeChild(countTr);
});

buttonDeleteLast.addEventListener("click", (e) => {
  e.preventDefault();
  var countTr =
    document.querySelectorAll("tr")[document.querySelectorAll("tr").length - 1];
  document.querySelector("#tbody").removeChild(countTr);
});
