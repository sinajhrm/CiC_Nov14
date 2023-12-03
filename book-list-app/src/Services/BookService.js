import axios from 'axios';

const BASE_URL = 'https://656bfd67e1e03bfd572df1a6.mockapi.io/api/v1';

const BookService = {
  getAllBooks: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books`, {
        headers: { 'content-type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch books');
    }
  },

  addBook: async (book) => {
    try {
      const response = await axios.post(`${BASE_URL}/books`, book, {
        headers: { 'content-type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to add book');
    }
  },

  updateBook: async (id, updatedBook) => {
    try {
      const response = await axios.put(`${BASE_URL}/books/${id}`, updatedBook, {
        headers: { 'content-type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update book');
    }
  },

  deleteBook: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/books/${id}`, {
        headers: { 'content-type': 'application/json' }
      });
    } catch (error) {
      throw new Error('Failed to delete book');
    }
  },
};

export default BookService;
