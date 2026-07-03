import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import router from './src/routes.js';
import { initDb } from './src/data/database.js';

const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
 * Configure Express middleware
 */

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Tell Express where to find your templates
app.set('views', path.join(__dirname, 'src/views'));

/**
  * Routes
  */
app.use(router);

initDb((err) => {
  if (err) {
    console.log(err);
  }
  else {
    app.listen(PORT, () => {
      console.log(`Server is running at http://127.0.0.1:${PORT}`);
      console.log(`Environment: ${NODE_ENV}`);
      console.log('Database is connected!')
    })
  }
})
