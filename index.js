import express from "express";
import {
    buscarUfPorId,
    buscarTodasUfs,
    buscarUfsPorNome,
    buscarUfPorSigla,
    buscarUfsPorInicial
} from "./Servicos/servico.js";

const app = express();
app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarTodasUfs();

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ "erro": `Nenhuma UF encontrada com o nome "${nomeUf}"` });
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idParam = req.params.iduf;

    if (isNaN(parseInt(idParam))) {
        return res.status(400).json({ "erro": "ID inválido. O ID deve ser um número." });
    }

    const uf = buscarUfPorId(idParam);

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": `Nenhuma UF encontrada com o ID ${idParam}` });
    }
});

app.get('/ufs/sigla/:sigla', (req, res) => {
    const sigla = req.params.sigla;
    const uf = buscarUfPorSigla(sigla);

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": `Nenhuma UF encontrada com a sigla "${sigla}"` });
    }
});

app.get('/ufs/inicial/:inicial', (req, res) => {
    const uf = buscarUfsPorInicial(req.params.inicial);

    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(req.params.inicial))) {
        res.status(400).send({ "erro": "Requisição Inválida!" });
    } else {
        res.status(404).json({ "erro": `Nenhuma UF encontrada com nomes iniciando por "${inicial}"` });
    }
});

app.listen(8080, () => {
    const data = new Date();
    console.log("Servidor rodando na porta 8080 - " + data.toLocaleString());
});
