import express from 'express';
import convertTemperature from './functions/convert.js';
import validParameter from './functions/validator.js';

const app = express();

app.get('/', (req, res) => {
    const { temperature, converter } = req.query;

    if (validParameter(temperature) === true && validParameter(converter) === false) {
        const temperaturaGraus = convertTemperature(temperature, converter);

        return res.json({ temperature: temperaturaGraus });
    }
    return res.status(400).json({ Erro: 'Incorrect temperature or converter' });
});

app.listen(8080, () => {
    console.log(`Servidor Iniciado na porta 8080`);
});