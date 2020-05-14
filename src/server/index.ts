import express from 'express';
import path from 'path';
import fs from 'fs';

const builtFile = path.join(__dirname, '..', 'dist', 'index.html');
const hasFile = fs.existsSync(builtFile);

const app = express();
app.use(express.static('dist'));

app.get('/api/aaa', (req, res) => res.json('gung'));

app.get('*', (req, res) => {
  if (hasFile) {
    res.sendFile(builtFile);
    return;
  }

  res.set('Content-Type', 'text/plain');
  res.status(404).send(`Cannot GET ${req.path}`);
});

app.listen(process.env.PORT || 3000, () => console.log('[BACKEND] Server started'));
