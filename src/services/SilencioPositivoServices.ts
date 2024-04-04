import Service from "./Service";

class SilecioPositivoServices extends Service{
    async getAll(){
        try {
            return await this.http.get('/api/v1/programacionSemanal/listadoSilencioPositivo');
        } catch (error: any) {
            console.log(error.response?.data || error.message); 
            return error.response?.data || error.message;
        }
    }
    async eliminarElemento(id: string|number){
        try {
            return await this.http.patch(`api/v1/programacionSemanal/updateCancelar/${id}`);
        } catch (error: any) {
            console.log(error.response?.data || error.message); 
            return error.response?.data || error.message;
        }
    }

    async restaurarFecha(id: string|number, body = {}){
        try {
            return await this.http.patch(`/api/v1/programacionSemanal/actualizarFecha/${id}`,body);
        } catch (error: any) {
            console.log(error.response?.data || error.message); 
            return error.response?.data || error.message;
        }
    }
}

export default SilecioPositivoServices