import conection_db from "./database/db.js";
import bookModel from "./models/bookModel.js";
import express from 'express'
import bookRouter from "./routes/routes.js";
import cors from 'cors'

const app=express();

//middleware
app.use(cors())
app.use(express.json())


app.get('/hola', (req, res) =>{
  res.send('Hola primera api')
})
app.get('/hola', (req, res) =>{
  res.send('Hola primera api')
})

app.use('/book', bookRouter)

try {
    await conection_db.authenticate();
    console.log('🚀🚀🚀🚀Connection has been established successfully.🚀🚀🚀🚀');

    await bookModel.sync({ force: false });
    console.log('❤The table for the Book model was just (re)created!❤');

  } catch (error) {
    console.error('🚨🚨Fail conection🚨🚨', error);
  }

  app.listen(8000,() =>{
    console.log('❤Te has conectado al puerto 8000, URL: http://localhost:8000')
  })