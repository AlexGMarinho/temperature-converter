import express from 'express';
import convertTemperature from './functions/convert.js';
import validParameter from './functions/validator.js';

const app = express();

app.get('/', (req, res) => {
    const { temperature, converter } = req.query;

    if (validParameter(temperature) && validParameter(converter)) {
        const temperaturaGraus = convertTemperature(temperature, converter.toUpperCase());

        return res.json({ temperature: temperaturaGraus });
    }
    return res.status(400).json({ Message: 'Incorrect temperature or converter' });
});

app.listen(8080, () => {
    console.log(`Servidor Iniciado na porta 8080`);
});
