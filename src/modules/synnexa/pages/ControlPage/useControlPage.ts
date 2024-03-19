import ControlService from '@/services/ControlServices';
import { useNavigate } from 'react-router-dom'; 

const useControlPage = () => {

    const navigate = useNavigate();
    const apiControlService = new ControlService();

    const navegacionCierreSesion = () => {
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

    const findFuncion = async(findFuncion: string | number): Promise<Object[]> => {
        try {
            const response = await apiControlService.filtroFuncion(findFuncion);
            return response.data.data.datosObtenidos;
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        }
    };

    const findTipoItse = async(findTipoItse: string | number): Promise<Object[]> => {
        try {
            const response = await apiControlService.filtroTipoItse(findTipoItse);
            return response.data.data.Datos;
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        }
    };

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
            findTipoItse
        }
    )
}

export default useControlPage;