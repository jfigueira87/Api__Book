import conection_db from "./database/db.js";
import bookModel from "./models/bookModel.js";
import express from 'express';
import bookRouter from "./routes/routes.js";
import cors from 'cors';

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use('/books', bookRouter); // Todas las rutas de bookRouter empiezan con /books

app.get('/hola', (req, res) => {
  res.send('Hola primera api');
});
app.get('/hola', (req, res) => {
  res.send('Hola primera api');
});

app.use('/book', bookRouter);

async function initializeApp() {
  try {
    await conection_db.authenticate();
    console.log('🚀🚀🚀🚀Connection has been established successfully.🚀🚀🚀🚀');

    await bookModel.sync({ force: false });
    console.log('❤The table for the Book model was just (re)created!❤');

  } catch (error) {
    console.error('🚨🚨Fail conection🚨🚨', error);
  }  
}

export const server = app.listen(8000, () => {
  console.log('❤Te has conectado al puerto 8000, URL: http://localhost:8000');
});

// Llamar a la función de inicialización
initializeApp();
