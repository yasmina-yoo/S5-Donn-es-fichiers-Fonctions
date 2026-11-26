// Fonction de calcul
function calculerSurface (longueur , largeur){
    return longueur * largeur;
}
// Fonction de décision
function estGrand(surface){
    return surface >=100;
}
// Exécution
let surfacePiece = calculerSurface(12,10);
let grandePiece = estGrand (surfacePiece);
// Affichage
console.log("Surface calculée :" + surfacePiece + "m²");
console.log("Grande piéce :" + grandePiece);