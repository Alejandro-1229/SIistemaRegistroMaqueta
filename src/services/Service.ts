import axios, { AxiosInstance } from 'axios';

class Service {

  protected http: AxiosInstance;

  protected baseUrl: string = 'http://localhost:8000';

  protected headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  constructor() {
    //const token = window.localStorage.getItem('token');
    //const authorizationToken = token ? { Authorization: `Bearer ${token}` } : null;

    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: {
        ...this.headers,
        //...authorizationToken,
      },
    });
  }
}

export default Service;
