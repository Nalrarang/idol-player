import express from 'express';
import path from 'path';
import bodyParser from  'body-parser'
import api from './routes';

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, './../public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())


app.get('/hello', (req, res) => {
    return res.send('Hello CodeLab');
});
app.use('/api', api);

app.listen(port, () => {
    console.log('Express is listening on port', port);
});

