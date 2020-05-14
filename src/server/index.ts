import express from 'express';

import { join } from 'path';
import { existsSync } from 'fs';

const builtFile = join(__dirname, '..', 'dist', 'index.html');
const hasFile = existsSync(builtFile);

const app = express();
app.use(express.static('dist'));

app.get('/backend-route', (req, res) => {
  res.json({ hello: 'world', query: req.query });
});

app.get('*', (req, res) => {
  if (hasFile) {
    res.sendFile(builtFile);
    return;
  }

  res.set('Content-Type', 'text/plain');
  res.status(404).send(`Cannot GET ${req.path}`);
});

app.listen(process.env.PORT || 3000, () => console.log('[BACKEND] Server started'));
