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
    const expedienteList = async(): Promise<Object[]> => {
        try {
            const response = await apiExpedienteService.getAll();
            return response.data.data.Datos;
        } catch (error) {
            throw new Error('Error al buscar expedientes: ' + error);
        }
    };

    return (
        {
            navegacionCierreSesion, 
            navegacionProgramacion,
            navegacionExpediente,
            navegacionControl,
            expedienteList,
        }
    )
}

export default useExpedientePage;