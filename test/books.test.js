import request from 'supertest';
import {app, server} from '../app.js';
import conection_db from '../database/db.js';
import bookModel from '../models/bookModel.js';
import { response } from 'express';

describe('Books CRUD', ()=>{
    test('Should return with 200 status and type json', async () =>{
        const response = await request(app).get('/books');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json');
    });
    test('Should create a book', async ()=>{
        const bookData = {
            title: 'test title',
            author: 'test author',
            description: 'test description'
        };
        const response = await request(app).post('/books').send(bookData);
        expect(response.status).toBe(201);
        expect(response.body.bookTitle).toBe(bookData.bookTitle);
    })
    test('Should delete a book', async()=>{
        const bookForDelete = await bookModel.create({ //Primero creamos un book para luego eliminarlo
            title: 'test title',
            author: 'test author',
            description: 'test description'
        })
        const response= await request(app).delete(`/books/${bookForDelete.id}`)
        expect(response.status).toBe(200);
    })
    test('Should update a book', async()=>{
        const bookForDelete = await bookModel.create({ //Primero creamos un book para luego editarlo
            title: 'test title',
            author: 'test author',
            description: 'test description'
        })
        const updateData = {
            title: 'test title',
            author: 'test author',
            description: 'test update description'//no hago cambios en title porque luego cunado haga el destroy no me lo va a eliminar
        }
        const response= await request(app).put(`/books/${bookForDelete.id}`).send(updateData)
        expect(response.status).toBe(200);
        expect(response.body.description).toBe('test update description'); <<<
    })

    afterEach(async()=>{
        await bookModel.destroy({where:{title:'Test title'}});
    })

    afterAll(()=>{
        server.close(); //cierra el servidro despues de todas las pruebas
        conection_db.close(); //Cierra la conexion a la base de datos despues de las pruebas
    })
})