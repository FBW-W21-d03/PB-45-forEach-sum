/*
! Wenn use strict gesetzt ist, müssen Variablen deklariert werden. */
"use strict";
/*
!  Die const -Deklaration erstellt eine Konstante.*/
const employees = [
  "Sammy",
  "Oscar",
  "Oliver",
  "Ava",
  "Elias",
  "Charlotte",
  "William",
  "Sophia",
  "James",
  "Amelia",
];
/*
! Die reduce()-Methode reduziert ein Array auf einen einzigen Wert, indem es jeweils zwei Elemente (von links nach rechts) durch eine gegebene Funktion reduziert.*/
const reducer = (previousValue, currentValue) =>
  previousValue + " , " + currentValue;
/*
! gibt eine Nachricht als String mit Variablen in die Consolen. */
console.log(employees.reduce(reducer));
