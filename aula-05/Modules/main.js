//  Importação via Modules

//  Pode ser renomeado utilizando boneco as b, outroObjeto as o
import { boneco, outroObjeto } from "./modules/boneco.js";
//  Pode ser utilizado qualquer nome por ser exportação default
import algumaCoisa from "./modules/boneco.js";

import player from "./modules/jogador.js";

console.log("Hello, World!");
console.log(boneco);
console.log(outroObjeto);
console.log(algumaCoisa);
console.log("==================");
console.log(player);
console.log(new player.Jogador("Matheus", "matheus@email.com"));
