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
