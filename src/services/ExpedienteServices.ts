import Service from "./Service";

class ExpedenteServices extends Service {

    async getAll() {
        try {
            return await this.http.get('api/v1/expedientes')
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }
    async update(body = {}, id: string | number) {
        try {
            const url = `/api/v1/expedientes/${id}`;
            return await this.http.put(url, body);
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }

    async createProgramacion (id: string | number) {
        try {
            const url = `/api/v1/programaciones/`;
            return await this.http.post(url, { "idExpediente": id });
        } catch (error) {
            console.error('Error al enviar elemento a programación:', error);
        }
    };
}
export default ExpedenteServices;