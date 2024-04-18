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
