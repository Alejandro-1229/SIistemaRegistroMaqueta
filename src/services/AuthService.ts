import Service from '@/services/Service';

class AuthService extends Service {

  async login(body = {}) {
    try {
      return await this.http.post('/api/login', body);
    } catch (error: any) {
      return error.response;
    }
  }

  async logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('idTipoUsuario');
    window.localStorage.removeItem('correo');
    try {
      return await this.http.get('/api/logout');
    } catch (error: any) {
      return error.response;
    }
  }

  static isAuthenticated() {
    return !!window.localStorage.getItem('token');
  }
}

export default AuthService;
