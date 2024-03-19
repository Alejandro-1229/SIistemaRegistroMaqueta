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

    async filtroFuncion(idFuncion: string | number) {
        try {
            const url = `/api/v1/controles/filterFuncion/${idFuncion}`;
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

    async filtroTipoItse(tipoItse: string | number) {
        try {
            const url = `/api/v1/controles/filterTipoItse/${tipoItse}`;
            return await this.http.get(url);
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }

    async update(body = {}, id: string | number) {
        try {
            const url = `/api/v1/controles/${id}`;
            return await this.http.put(url, body);
        } catch (error: any) {
            console.log(error.response);
            return error.response;
        }
    }

}

export default ControlServices;