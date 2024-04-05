import AuthService from '@/services/AuthService';
import ControlService from '@/services/ControlServices';
import { useNavigate } from 'react-router-dom'; 

const useControlPage = () => {

    const navigate = useNavigate();
    const apiControlService = new ControlService();

    const navegacionCierreSesion = () => {
        const apiClose = new AuthService();
        apiClose.logout();
        navigate("/"); 
    }
    const navegacionProgramacion = () => {
        navigate("/programacion");
    }
    const navegacionExpediente = () => {
        navigate("/expediente");
    }
    const navegacionControl = () => {
        navigate("/control");
    }

    const controlList = async(): Promise<Object[]> => {
        try {
            const response = await apiControlService.getAll();
            return response.data.data.control;
        } catch (error) {
            throw new Error('Error al buscar controles: ' + error);
        }
    };

    const findRazonSocial = async(nombreComercial: string): Promise<Object[]> => {
        try {
            const response = await apiControlService.filtroRazonSocial(nombreComercial);
            return response.data.data;
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        }
    };

    const findNumeroExpediente = async(findNumeroExpediente: string): Promise<Object[]> => {
        try {
            const response = await apiControlService.filtroNumeroExpediente(findNumeroExpediente);
            return response.data.data;
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        }
    };

    const findFuncion = async(findFuncion: string | number, fechaInicio: string, fechaFinal: string): Promise<Object[]> => {
        try {
            const response = await apiControlService.filtroFuncion(findFuncion,fechaInicio,fechaFinal);
            return response.data.data.datosObtenidos;
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        }
    };

    const findTipoItse = async(findTipoItse: string | number, fechaInicio: string, fechaFinal: string): Promise<Object[]> => {
        try {
            const response = await apiControlService.filtroTipoItse(findTipoItse,fechaInicio,fechaFinal);
            return response.data.data.Datos
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        }
    };

    const crearExpediente = async ( id: string | number): Promise<void> => {
        try {
            await apiControlService.createExpediente(id);
            
        } catch (error) {
            console.error('Error al enviar el registro:', error);
        }
    };
    
/*
    const updateControl = async (datos = {}, id: string | number): Promise<void> => {
        try {
            const respuesta = await apiControlService.update(datos, id);
            console.log(`Registro actualizado con éxito: ${respuesta.idControl}`);
        } catch (error) {
            console.error('Error al actualizar el registro:', error);
        }
    };
*/
    return (
        {
            navegacionCierreSesion, 
            navegacionProgramacion,
            navegacionExpediente,
            navegacionControl,
            controlList,
            findRazonSocial,
            findNumeroExpediente,
            findFuncion,
            findTipoItse,
            crearExpediente,
            //updateControl
        }
    )
}

export default useControlPage;