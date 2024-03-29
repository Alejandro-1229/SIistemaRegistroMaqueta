import Service from "./Service";

class SilecioPositivoServices extends Service{
    async getAll(){
        try {
            return await this.http.get('/api/v1/programacionSemanal/listadoSilencioPositivo');
        } catch (error: any) {
            console.log(error.response);
            return error.response
        }
    }
}

export default SilecioPositivoServices