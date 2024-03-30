import Service from "./Service";

class ControlServices extends Service {
 
    async getAll() {
        try {
            return await this.http.get('/api/v1/controles');
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        } 
    }
    async crateControl(body = {}) {
        try {
            return await this.http.post('/api/v1/controles', body)
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }

    async filtroId(id: string | number) {
        try {
            const url = `/api/v1/controles/filterId/${id}`;
            return await this.http.get(url);
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }
    
    async filtroRazonSocial(nombreComercial: string) {
        try {
            const url = `/api/v1/controles/filterRazon/${nombreComercial}`;
            return await this.http.get(url);
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }

    async filtroFuncion(idFuncion: string | number, fechaInicio: string, fechaFinal: string) {
        try {
            const url = `/api/v1/controles/filterFuncion/${idFuncion}/${fechaInicio}/${fechaFinal}`;
            return await this.http.get(url);
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }

    async filtroNumeroExpediente(expediente: string) {
        try {
            const url = `/api/v1/controles/filterExpediente/${expediente}`;
            return await this.http.get(url);
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }

    async filtroTipoItse(tipoItse: string | number, fechaInicio: string, fechaFinal: string) {
        try {
            const url = `/api/v1/controles/filterTipoItse/${tipoItse}/${fechaInicio}/${fechaFinal}`;
            return await this.http.get(url);
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }
    async createExpediente (id: string | number) {
        try {
            const url = `/api/v1/expedientes/`;
            return await this.http.post(url, { "idControl": id });
        } catch (error) {
            console.error('Error al enviar elemento a expediente:', error);
        }
    };

}

export default ControlServices;