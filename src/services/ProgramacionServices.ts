import Service from "./Service";

class ProgramacionServices extends Service{
    async getAll(){
        try {
            return await this.http.get('/api/v1/programaciones');
        } catch (error: any) {
            console.log(error.response);
            return error.response
        }
    }
}

export default ProgramacionServices;