// plik scripts.js


function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        console.log("W tym przypadku zadano nieprawidłowe dane");
    } else {
        console.log("W tym wywołaniu dane są prawidłowe"); // tego nie ma wg zadania, ale stwierdzilem ze zadam. Generalnie zadaniowo OK, ale ogolnie niepraktycznie bo jak deklarujemy nizej zmienne to zawsze nam sie teraz wykonuje instrukcja if, ale w sumie to moze i OK :) generalnie takie zadanie i wg mnie OK mam nadzieje, ważne że czaje :)
    }   // tutaj dajemy przecinek czy tak zostawiamy? w sensie jak separujemy instrukcje w funkcji?
    return (a * h / 2);
}

console.log(getTriangleArea(10,6));

var triangle1Area = getTriangleArea(10,15);
var triangle2Area = getTriangleArea(-1,4);
var triangle3Area = getTriangleArea(6,10);

