//  Método 1 - Exportação Direta
export const boneco = {
    membros: ["cabeça", "braço esquerdo", "braço direito", "tronco", "perna esquerda", "perna direita"],
    nome: "Matheus",
    altura: 1.70,
    peso: 70
}

export const outroObjeto = {
    item1: 0,
    item2: "",
    item3: null
}

//  Método 2 - Exportação Default
export default [boneco, outroObjeto];
