//  Importação via CommonJS
const boneco = require("./modules/boneco.js");
const { Jogador, categorias_disponiveis: categorias } = require("./modules/jogador");

console.log("Hello, World!");
console.log(boneco);
console.log(new Jogador("Matheus", "matheus@email.com"));
console.log(categorias);
