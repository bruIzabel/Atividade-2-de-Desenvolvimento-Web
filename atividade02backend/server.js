// server.js
const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Inicializa o Express (nosso servidor)
const app = express();

// Configurações de segurança e leitura de dados
app.use(cors()); // Permite que o frontend (React) faça pedidos para este servidor
app.use(express.json()); // Permite que o servidor entenda dados no formato JSON

// ==========================================
// 1. CONFIGURAÇÃO DO BANCO DE DADOS (SEQUELIZE)
// ==========================================
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:", // Banco de dados na memória RAM
    logging: false,      // Desliga os logs de SQL no terminal para ficar mais limpo
});

// ==========================================
// 2. DEFINIÇÃO DA TABELA (MODEL)
// ==========================================
const Produto = sequelize.define('Produto', {
    nome: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    preco: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    imagem: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }
});

// ==========================================
// 3. INICIALIZAÇÃO E POPULAÇÃO DO BANCO
// ==========================================
// Sincroniza o modelo e cria a tabela do zero
// ==========================================
// 4. ROTAS DA API (CRUD)
// ==========================================

const mapProduto = (produto) => {
    const json = produto.toJSON ? produto.toJSON() : produto;
    return {
        ...json,
        description: json.descricao || json.description,
    };
};

// Rota para LER (Buscar) todas as poções
app.get('/api/produtos', async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos.map(mapProduto));
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar poções." });
    }
});

// Rota para CRIAR (Adicionar) uma nova poção
app.post('/api/produtos', async (req, res) => {
    try {
        const descricao = req.body.descricao || req.body.description || "Descrição não disponível";
        const novoProduto = await Produto.create({
            nome: req.body.nome,
            descricao,
            preco: req.body.preco,
            imagem: req.body.imagem
        });
        res.status(201).json(mapProduto(novoProduto));
    } catch (error) {
        res.status(500).json({ erro: "Erro ao criar poção." });
    }
});

// Rota para DELETAR uma poção pelo ID
app.delete('/api/produtos/:id', async (req, res) => {
    try {
        const idProduto = req.params.id;
        const deletado = await Produto.destroy({
            where: { id: idProduto }
        });

        if (deletado) {
            res.status(200).json({ mensagem: "Poção deletada com sucesso!" });
        } else {
            res.status(404).json({ erro: "Poção não encontrada." });
        }
    } catch (error) {
        res.status(500).json({ erro: "Erro ao deletar poção." });
    }
});

// ==========================================
// 5. INICIALIZAÇÃO: BANCO → SERVIDOR
// ==========================================
const PORTA = 3001;
sequelize.sync({ force: true }).then(async () => {
    await Produto.bulkCreate([
        { nome: "Poção Blue Sky", descricao: "Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds", 
            preco: "300 moedas", imagem: "https://i.ibb.co/ZzS7xb2/rsz-sky.png" },
        { nome: "Poção do Perfume Misterioso", descricao: "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos", 
            preco: "200 moedas", imagem: "https://i.ibb.co/pyhZJXf/rsz-lilas.png" },
        { nome: "Poção de Pinus", descricao: "Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.", preco: "3000 moedas", imagem: "https://i.ibb.co/DkzdL1q/rsz-pinus.png" },
        { nome: "Poção da Beleza Eterna", descricao: "Veneno que mata rápido.", preco: "100 moedas", imagem: "https://i.ibb.co/9p872NK/rsz-1beleza.png" }
    ]);
    console.log("🔮 Banco SQLite em memória criado e populado com sucesso!");

    const server = app.listen(PORTA, () => {
        console.log(`🚀 Servidor alquímico rodando na porta http://localhost:${PORTA}`);
    });

    const shutdown = async () => {
        console.log("🛑 Encerrando servidor...");
        await sequelize.close();
        server.close((err) => {
            if (err) {
                console.error("Erro ao encerrar servidor:", err);
                process.exit(1);
            }
            console.log("✅ Servidor finalizado e porta liberada.");
            process.exit(0);
        });
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
}).catch(erro => {
    console.error("❌ Erro ao criar o banco de dados:", erro);
});