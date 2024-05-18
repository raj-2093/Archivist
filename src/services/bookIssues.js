import axios from "axios";

const base_url = process.env.REACT_APP_API_BASE_URL;

export const bookIssuesApi = {
  /**
   *
   * @param {{
   * EnrollmentNumber: string,
   * BookId: number
   * }} issueData
   */
  issueBook: async (issueData) => {
    try {
      const res = await axios.post(`${base_url}/api/bookIssues`, issueData);
      console.log("issue book response : ", res);
      return res;
    } catch (err) {
      console.log("Issue book error : ", err);
      return err;
    }
  },

  /**
   *
   * @param {{
   * EnrollmentNumber: string,
   * BookId: number
   * }} returnData
   */
  returnBook: async (returnData) => {
    try {
      const res = await axios.delete(`${base_url}/api/bookIssues`, returnData);
      return res;
    } catch (err) {
      console.log("Return book error : ", err);
    }
  },
};

export class BookIssueServices {
  constructor() {
    this.base_url = `${process.env.REACT_APP_API_BASE_URL}/api/bookIssues`;
  }

  async getAllIssues() {
    try {
      const res = await axios.get(`${this.base_url}`);
      return res;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Issue a book
   * @param {{
   * EnrollmentNumber: string,
   * BookId: number
   * }} issueData
   * @returns
   */
  async issueBook(issueData) {
    try {
      const res = await axios.post(`${base_url}/api/bookIssues`, issueData);
      console.log("issue book response : ", res);
      return res;
    } catch (err) {
      console.log("Issue book error : ", err);
      throw err;
    }
  }

  /**
   * Return a book
   * @param {{
   * EnrollmentNumber: string,
   * BookId: number
   * }} returnData
   * @returns
   */
  async returnBook(returnData) {
    try {
      const res = await axios.delete(`${base_url}/api/bookIssues`, {
        data: returnData,
      });
      return res;
    } catch (err) {
      console.log("Return book error : ", err);
      throw err;
    }
  }
}
