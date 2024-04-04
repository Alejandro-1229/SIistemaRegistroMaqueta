import Service from "./Service";

class IngeneiroServices extends Service {
    async getAll() {
        try {
            return await this.http.get('/api/v1/programacionSemanal/listadoPendientes');
        } catch (error: any) {
            console.log(error.response);
            return error.response
        } 
    }
    async filtroNumeroExpediente(numeroExpediente: string) {
        try {
            const url = `/api/v1/programacionSemanal/busquedaExpediente/${numeroExpediente}`;
            return await this.http.get(url);
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }
    async filtroFuncion(funcion: string, fechaInicio: string, fechaFinal: string) {
        try {
            const url = `/api/v1/programacionSemanal/listadoFechas/${funcion}/${fechaInicio}/${fechaFinal}`;
            return await this.http.get(url);
        } catch (error: any) {
            console.log(error.response?.data || error.message); 
            return error.response?.data || error.message;
        }
    }
    async filtroRazonSocial(razonSocial: string) {
        try {
            const url = `/api/v1/programacionSemanal/busquedaNombreComercial/${razonSocial}`;
            return await this.http.get(url);
        } catch (error: any) {
            console.log(error.response?.data || error.message); 
            return error.response?.data || error.message;
        }
    }
    async guardarInspeccion(id: string|number, body= {}){
        try {
            const url = `/api/v1/programacionSemanal/updateEstado/${id}`;
            return await this.http.patch(url, body);
        } catch (error: any) {
            console.log(error.response?.data || error.message); 
            return error.response?.data || error.message;
        }
    }

    async cambioFecha(body= {}){
        try {
            const url = `/api/v1/actualizarFecha`;
            return await this.http.post(url, body);
        } catch (error: any) {
            console.log(error.response?.data || error.message); 
            return error.response?.data || error.message;
        }
    }
}

export default IngeneiroServices; 