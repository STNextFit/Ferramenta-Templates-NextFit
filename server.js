const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve os arquivos estáticos das pastas 'arquivos' e 'tinymce'
app.use('/arquivos', express.static(path.join(__dirname, 'arquivos')));
app.use('/tinymce', express.static(path.join(__dirname, 'tinymce')));
app.use(express.static(path.join(__dirname)));

// Serve o arquivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ferramenta-templates.html'));
});

// Rota para lidar com todas as outras requisições
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'ferramenta-templates.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
