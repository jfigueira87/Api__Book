import bookModel from "../models/bookModel.js"

export const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.findAll() //Sequelize utiliza el metodo findAll para traernos todos los libros
        res.json(books) // Para que me de la respuesta a un json
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const createBook = async (req, res) => {
    try {
        const { title, author, description } = req.body;
        const newBook = await bookModel.create({
            title,
            author,
            description
        });
        res.status(201).json(newBook);
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id
        const deletedBook = await bookModel.destroy({
            where: {
                id: bookId
            }
        })
        res.status(200).json(deletedBook)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateBook = async (req, res)=>{
    try {
        const bookId = req.params.id
        const { title, author, description } = req.body;
        const updatedBook = await bookModel.update({
            title,
            author,
            description
        },{
            where:{
                id: bookId
            }
        });
        res.status(200).json(updatedBook)
    } catch (error) {
        res.json({ message: error.message })
    }
}

