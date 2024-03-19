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

}
export default ExpedenteServices;