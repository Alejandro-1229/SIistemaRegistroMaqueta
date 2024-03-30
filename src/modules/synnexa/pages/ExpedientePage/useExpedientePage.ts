import ExpedienteServices from '@/services/ExpedienteServices';
import { useNavigate } from 'react-router-dom';

const useExpedientePage = () => {

    const navigate = useNavigate();
    const apiExpedienteService = new ExpedienteServices();

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
    const expedienteList = async (): Promise<Object[]> => {
        try {
            const response = await apiExpedienteService.getAll();
            return response.data.data.Datos;
        } catch (error) {
            throw new Error('Error al buscar expedientes: ' + error);
        }
    };

    const updateExpediente = async (datos = {}, id: string | number): Promise<void> => {
        try {
            const respuesta = await apiExpedienteService.update(datos, id);
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

    return (
        {
            navegacionCierreSesion,
            navegacionProgramacion,
            navegacionExpediente,
            navegacionControl,
            expedienteList,
            updateExpediente,
            crearProgramacion
        }
    )
}

export default useExpedientePage;