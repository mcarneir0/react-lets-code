class Jogador {
    constructor(nome, email, categoria_favorita = "frutas", vitorias = 0, derrotas = 0) {
        this.nome = nome;
        this.email = email;
        this.categoria_favorita = categoria_favorita;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
    }

    perdeu() { this.derrotas++ }
    ganhou() { this.vitorias++ }
}

function categorias_disponiveis() {
    return ["frutas", "países", "cores", "animes", "esportes", "filmes"];
}

module.exports = { Jogador, categorias_disponiveis };
