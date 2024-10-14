import { JobInterface, Salario } from "../interfaces/Convenios";

interface ContenidoSeleccionadoProps {
    job: JobInterface
    selectJob: (selectJob: JobInterface) => void

    selectedId: number
}

export const JobCard: React.FC<ContenidoSeleccionadoProps> = ({ job, selectJob, selectedId }) => {
    if (!job) {
        return <div>No hay información disponible del trabajo seleccionado.</div>;
    }

    const { id, title, company, location, modality, salario, fechaRegistro, jobType } = job;

    const calcularTiempoTranscurrido = (fechaRegistro: string): string => {
        const fecha = new Date(fechaRegistro)
        const ahora = new Date()
        const diferenciaMilisegundos = ahora.getTime() - fecha.getTime()

        const segundos = Math.floor(diferenciaMilisegundos / 1000)
        const minutos = Math.floor(segundos / 60)
        const horas = Math.floor(minutos / 60)
        const dias = Math.floor(horas / 24)

        if (minutos < 5) {
            return "Hace instantes"
        } else if (minutos < 60) {
            return `Hace ${minutos} minutos`
        } else if (horas < 24) {
            return `Hace ${horas} hora${horas > 1 ? "s" : ""}`
        } else if (dias === 1) {
            return "Ayer"
        } else if (dias > 1) {
            return `Hace ${dias} día${dias > 1 ? "s" : ""}`
        }

        return "Hace un momento"; // Caso por defecto
    };

    const formatoSalario = (salario: Salario): string | null => {
        const { min, max, tipo } = salario;

        if (min !== null && max !== null) {
            return `S/.${min} a S/.${max} ${tipo}`
        } else if (min !== null) {
            return `Desde S/.${min} ${tipo}`
        } else if (max !== null) {
            return `Hasta S/.${max} ${tipo}`
        } else {
            return null
        }
    }

    return (
        <article
            role="button"
            onClick={() => selectJob(job)}
            className={`flex flex-col hover:shadow rounded-lg p-4 border-2 bg-white group ${selectedId === id ? 'border-blue-400' : 'border-gray-400'}`}>
            <div className="flex gap-4 justify-between">
                <h2 className="text-base font-semibold group-hover:underline">{title}</h2>
                <div className="flex flex-col justify-start">
                    <button className="hover:bg-blue-100 px-2 p-1 rounded"
                        onClick={() => { }}
                    >
                        <i className="bi bi-three-dots-vertical" />
                    </button>

                </div>
            </div>
            <div className="flex flex-col h-full gap-3 justify-between">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p className="text-gray-600 text-sm">
                            {company}
                        </p>
                        <p className="text-gray-500 text-xs">
                            {location.department}, {location.province}
                        </p>
                    </div>

                    <div className="flex flex-wrap text-xs gap-2">
                        <div className="text-gray-700 bg-gray-100 p-1 px-2 rounded">
                            {formatoSalario(salario)}
                        </div>
                        <div className="text-gray-700 bg-gray-100 p-1 px-2 rounded">
                            {jobType}
                        </div>
                        <div className="text-gray-700 bg-gray-100 p-1 px-2 rounded">
                            {modality}
                        </div>
                    </div>
                </div>
                <span className="text-gray-400 text-sm">
                    {calcularTiempoTranscurrido(fechaRegistro)}</span>
            </div>

        </article>
    );
};