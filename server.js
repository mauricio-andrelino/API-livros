const express = require('express')

const app = express()

app.use(express.json())

let livros = [
    {
        id: 1,
        titulo: "Java: Como Programar",
        autor: "Paul Deitel",
        ano: 2017
    },
    {
        id: 2,
        titulo: "O Programador Pragmático",
        autor: "David Thomas e Andrew Hunt",
        ano: 2019
    },
    {
        id: 3,
        titulo: "Código Limpo",
        autor: "Robert C. Martin",
        ano: 2009
    },
    {
        id: 4,
        titulo: "Entendendo Algoritmos",
        autor: "Aditya Bhargava",
        ano: 2017
    },
    {
        id: 5,
        titulo: "JavaScript: O Guia Definitivo",
        autor: "David Flanagan",
        ano: 2020
    },
    {
        id: 6,
        titulo: "Use a Cabeça! Java",
        autor: "Kathy Sierra e Bert Bates",
        ano: 2005
    }
]
app.get('/', (req, res) => {
    res.json({ mensagem: "Bem-vindo à API de livros!" })
})



app.get('/livros', (req, res) => {
    res.json(livros)
})


app.get('/livros/:id', (req, res) => {
    const id = Number(req.params.id)

    const livro = livros.find(livro => livro.id === id)

    if (!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    res.json(livro)
})


app.post('/livros', (req, res) => {
    const { titulo, autor, ano } = req.body

    const novoLivro = {
        id: livros.length + 1,
        titulo,
        autor,
        ano
    }

    livros.push(novoLivro)

    res.status(201).json(novoLivro)
})


app.put('/livros/:id', (req, res) => {
    const id = Number(req.params.id)

    const livro = livros.find(livro => livro.id === id)

    if (!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    const { titulo, autor, ano } = req.body

    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano

    res.json(livro)
})


app.delete('/livros/:id', (req, res) => {
    const id = Number(req.params.id)

    const indice = livros.findIndex(livro => livro.id === id)

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    livros.splice(indice, 1)

    res.json({
        mensagem: "Livro excluído com sucesso"
    })
})

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})