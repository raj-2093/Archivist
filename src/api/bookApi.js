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
      const res = await axios.post(`${base_url}/api/book`, bookData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res;
    } catch (err) {
      throw err;
    }
  },

  /**
   * Delete Book
   * @param {number} bookId
   */
  deleteBook: async (bookId) => {
    try {
      const res = await axios.delete(`${base_url}/${bookId}`);
      return res;
    } catch (err) {
      throw err;
    }
  },
};
