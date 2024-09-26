import bookModel from "../models/bookModel.js"

export const getAllBooks = async (req,res)=>{
    try{
    const books= await bookModel.findAll() //Sequelize utiliza el metodo findAll para traernos todos los libros
    res.json(books) // Para que me la respuesta a un json
    }
    catch (error){
        res.json(message, error.message)
    }
}

