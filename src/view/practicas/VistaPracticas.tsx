import { useEffect, useState } from "react";
import { ButtonFiltro } from "./componente/ButtonFiltro";
import { JobCard } from "./componente/JobCard";
import toast from "react-hot-toast";
import { ContenidoSeleccionado } from "./componente/ContenidoSeleccionado";
import { FiltrosDropdown, dropdownPropsList, JobInterface, jobs, FiltrosSeleccionados } from "./interfaces/Convenios";

export const JobBoard = () => {

    const [filtros, setFiltros] = useState<FiltrosDropdown[]>([])
    const [selectedFiltros, setSelectedFiltros] = useState<FiltrosSeleccionados[]>([])

    const [listaJob, setListaJob] = useState<JobInterface[]>([])
    const [jobSelected, setJobSelected] = useState<JobInterface | null>(null)

    const selectOption = (newOption: FiltrosSeleccionados) => {
        setSelectedFiltros(prevSelectedList => {
            const isSelected = prevSelectedList.some(item => item.idOption === newOption.idOption)
            if (isSelected) {
                toast.error("Elemento ya seleccionado");
                return prevSelectedList; // No hacemos cambios si ya está seleccionado
            }
            return [...prevSelectedList, newOption]
        })
    }

    const quitarOption = (idButton: number) => {
        const encontrados = selectedFiltros.filter(item => item.idButton !== idButton)
        setSelectedFiltros(encontrados)
    }

    const selectJob = (selectJob: JobInterface) => {
        setJobSelected(selectJob)
    }

    const obtenerJobs = () => {
        // CONSUMIR EL API PARA OBTENER LA LISTA
        // selectedFiltros --> para filtrarlos
        setListaJob(jobs)
        setJobSelected(jobs[0])
    }

    const obtenerFiltros = () => {
        //CONSUMIR EL API PARA OBTENER LOS FILTROS
        setFiltros(dropdownPropsList)
    }

    useEffect(() => {
        obtenerFiltros()
    }, [])

    useEffect(() => {
        obtenerJobs()
    }, [selectedFiltros])

    return (
        <div className="container mx-auto p-6 px-40">
            <h1 className="text-2xl font-bold mb-6">Bolsa de Trabajo - Prácticas Preprofesionales</h1>

            <div className="flex flex-wrap mb-4 gap-3">
                {
                    filtros.map((item, index) => (
                        <ButtonFiltro
                            key={index}
                            idButton={item.idButton}
                            buttonLabel={item.buttonLabel}
                            options={item.options}
                            selectOption={selectOption}
                            quitarOption={quitarOption}
                        />
                    ))
                }

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2">
                    {listaJob.map((job, index) => (
                        <JobCard
                            key={index}
                            job={job}
                            selectJob={selectJob}

                            selectedId={jobSelected?.id ?? 0}
                        />
                    ))}

                </div>
                <div className="col-span-2 flex flex-col">
                    {/* RESULTADO */}
                    <ContenidoSeleccionado job={jobSelected} />
                </div>

            </div>
        </div>
    );
}