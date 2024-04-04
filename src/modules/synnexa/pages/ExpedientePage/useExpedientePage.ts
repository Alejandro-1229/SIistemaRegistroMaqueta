import AuthService from '@/services/AuthService';
import ExpedienteServices from '@/services/ExpedienteServices';
import { useNavigate } from 'react-router-dom';

const useExpedientePage = () => {

    const navigate = useNavigate();
    const apiExpedienteService = new ExpedienteServices();

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
    const expedienteList = async (): Promise<Object[]> => {
        try {
            const response = await apiExpedienteService.getAll();
            return response.data.data.Datos;
        } catch (error) {
            throw new Error('Error al buscar expedientes: ' + error);
        }
    };

    const updateExpediente = async (id: string | number, datos = {}): Promise<void> => {
        try {
            const respuesta = await apiExpedienteService.update(id, datos);
            console.log(`Registro actualizado con éxito: ${respuesta.idExpe}`);
        } catch (error) {
            console.error('Error al actualizar el registro:', error);
        }
    };

    const crearProgramacion = async ( id: string | number): Promise<void> => {
        try {
            await apiExpedienteService.createProgramacion(id);
        } catch (error) {
            console.error('Error al enviar el registro:', error);
        }
    };

    const crearInspeccion = async ( id: string | number): Promise<void> => {
        try {
            await apiExpedienteService.createInspeccion(id);
        } catch (error) {
            console.error('Error al enviar el registro:', error);
        }
    };

    return (
        {
            navegacionCierreSesion,
            navegacionProgramacion,
            navegacionExpediente,
            navegacionControl,
            expedienteList,
            updateExpediente,
            crearProgramacion,
            crearInspeccion
        }
    )
}

export default useExpedientePage;