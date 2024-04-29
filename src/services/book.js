import axios from "axios";

const base_url = process.env.REACT_APP_API_BASE_URL;

export const bookApi = {
  /**
   * Add Book
   * @param {FormData} bookData
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  addBook: async (bookData) => {
    try {
      const res = await axios.post(`${base_url}/api/book`, bookData);
      return res;
    } catch (err) {
      console.log("Add Book error : ", err);
    }
  },

  /**
   * Delete Book
   * @param {number} bookId
   */
  deleteBook: async (bookId) => {
    try {
      const res = await axios.delete(`${base_url}/api/book/${bookId}`);
      return res;
    } catch (err) {
      console.log("Delete Book error : ", err);
    }
  },

  getAllBooks: async () => {
    try {
      const res = await axios.get(`${base_url}/api/book`);
      return res;
    } catch (err) {
      console.log("Get all books : ", err);
    }
  },
};

export class BookServices {
  base_url;
  constructor() {
    // this.base_url = `${process.env.REACT_APP_API_BASE_URL}/api/book`;
    this.base_url = `http://localhost:5000/api/book`;
  }

  /**
   * Add a book
   * @param {{
   *
   * }} bookData
   * @returns
   */
  async addBook(bookData) {
    try {
      const res = await axios.post(`${this.base_url}`, bookData);
      // const res = await axios.post(`http://localhost:5000/api/book`, bookData);
      return res;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Delete a book by id
   * @param {number} bookId
   * @returns
   */
  async deleteBook(bookId) {
    try {
      const res = await axios.delete(`${this.base_url}/${bookId}`);
      return res;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Get all books
   * @returns
   */
  async getAllBooks() {
    try {
      const res = await axios.get(`${this.base_url}`);
      return res;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Get book by id
   * @param {number} bookId
   */
  async getBook(bookId) {
    try {
      const res = await axios.get(`${this.base_url}/${bookId}`);
    } catch (err) {}
  }
}
