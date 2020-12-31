const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const projectName = 'aquarium';
const projectPath = `${__dirname}/dist/${projectName}`;

app.use(express.static(projectPath));

app.get('/*', (req, res) => {
    res.sendFile(projectPath + '/index.html');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});