import colecaoUF from "../Dados/dados.js";
import catalogo from "../Atividade 2/dados.js";

export const buscarUfsPorNome = (nome) => {
    return colecaoUF.filter((uf) => uf.nome.toLowerCase().includes(nome.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUF.find((uf) => uf.id === idUF);
};

export const buscarUfPorSigla = (sigla) => {
    return colecaoUF.find((uf) => uf.uf.toLowerCase() === sigla.toLowerCase());
};

export const buscarUfsPorInicial = (inicial) => {
    return colecaoUF.filter((uf) => uf.nome.toLowerCase().startsWith(inicial.toLowerCase()));
};

export const buscarTodasUfs = () => {
    return colecaoUF;
};
