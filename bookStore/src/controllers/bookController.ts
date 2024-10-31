import { Request, Response } from "express";
import { BookRepository } from "../repositories/bookRespository";

const bookRepository = new BookRepository();

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await bookRepository.getAllBooks();
  res.status(200).json(books);
};

export const addBook = async (req: Request, res: Response) => {
  const { title, author, genre, price } = req.body;
  try {
    const book = await bookRepository.addBook(title, author, genre, price);
    res.status(201).json(book);
  } catch (err) {
    res.status(401).json({ error: "erro ao adicionar livro" });
  }
};