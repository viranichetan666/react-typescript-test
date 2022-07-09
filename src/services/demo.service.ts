import HttpClient from "./index";

class DemoAPI extends HttpClient {
  constructor(token?: any) {
    super(process.env.REACT_APP_APIBASE!, token);
  }
  public async getTodoList() {
    return await this.instance.get("/todos");
  }
}

export default DemoAPI;