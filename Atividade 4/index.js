import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.static("public"));
const port = 3000;

/*
    GET - BUSCAR
    POST - CRIAR
    PUT - ATUALIZAR
    DELETE - REMOVER
*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//lista de filmes

const filmes = [
    {
        id:1,
        nome:"Interestelar",
        ano:2014,
        diretor:"Christopher Nolan"
    },
    {
        id:2,
        nome:"Clube da Luta",
        ano:1999,
        diretor:"David Fincher"
    },
    {
        id:3,
        nome:"Matrix",
        ano:1999,
        diretor:"Lana e Lilly Wachowski"
    },
    {
        id:4,
        nome:"O Poderoso Chefão",
        ano:1972,
        diretor:"Francis Ford Coppola"
    }
];

//Páginas HTML

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","index.html"));
});

app.get("/filmes",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","filmes.html"));
});

app.get("/contato",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","contato.html"));
});

//API

app.get("/api/filmes",(req,res)=>{
    res.json(filmes);
});

//Bônus - buscar por id

app.get("/api/filmes/:id",(req,res)=>{

    const id = Number(req.params.id);

    const filme = filmes.find(f=>f.id===id);

    if(!filme){
        return res.status(404).json({
            mensagem:"Filme não encontrado"
        });
    }

    res.json(filme);

});

//Bônus - pesquisa

app.get("/api/pesquisa",(req,res)=>{

    const nome = req.query.nome;

    const resultado = filmes.filter(f=>
        f.nome.toLowerCase().includes(nome.toLowerCase())
    );

    res.json(resultado);

});

app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});