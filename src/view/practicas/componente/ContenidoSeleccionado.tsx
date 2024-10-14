import React from 'react';
import toast from 'react-hot-toast';
import { JobInterface } from '../interfaces/Convenios';

interface ContenidoSeleccionadoProps {
    job: JobInterface | null
}

export const ContenidoSeleccionado: React.FC<ContenidoSeleccionadoProps> = ({ job }) => {
    if (!job) {
        return <div>No hay información disponible del trabajo seleccionado.</div>;
    }

    const { title, company, verificada, location, modality, salario, jobType, description, requerimientos, funciones, buscamos, beneficios } = job;

    // Función auxiliar para mostrar el salario en un formato legible
    const renderSalario = () => {
        if (salario.min !== null && salario.max !== null && salario.tipo) {
            return `S/. ${salario.min} a S/. ${salario.max} por ${salario.tipo}`;
        }
        return 'No especificado';
    };

    return (
        <div className="relative bg-white border border-gray-500 rounded-lg max-h-[500px] overflow-y-auto px-4">
            <div className="text-2xl font-bold text-gray-900 sticky top-0 bg-white py-4 pr-20">
                {/* Título */}
                {title}
            </div>
            {/* Contenedor de la imagen */}
            <div className="w-16 h-16 absolute top-4 right-4 rounded-lg overflow-hidden">
                <img
                    src="https://play-lh.googleusercontent.com/tzi8V_H_u9xPVdO9VgUzBvH258YHwA2r_zEKiarJ2_veN5m8yswg--zWKb-Be-dJm7c=w600-h300-pc0xffffff-pd"
                    alt="Logo empresa"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='flex flex-col gap-2'>
                <div className="text-gray-600 text-lg flex group">
                    <span className='group-hover:underline group-hover:text-blue-500 '>{company}</span>
                    {verificada && (
                        <div className="flex text-xs my-auto bg-green-400 text-white px-3 p-1 rounded-md ml-3">
                            <i className="bi bi-patch-check mr-2 text-sm" />
                            <span className='my-auto font-medium'>Verificada</span>
                        </div>
                    )}
                </div>
                <div className="text-gray-500 text-base">
                    <i className="bi bi-geo-alt-fill mr-2 text-gray-400" /> {location.department}, {location.province}
                </div>

            </div>

            <div className='sticky top-[44px] bg-white border-b py-4 flex gap-4'>
                <button className='bg-blue-100 border border-blue-400 text-upla-100 hover:bg-upla-100 hover:text-white p-2 px-4 rounded-md'>
                    Postular
                </button>
                <button
                    onClick={() => toast.success("GUARDAR")}
                    className='w-10 h-10 rounded-full bg-blue-100 hover:bg-upla-100 hover:text-white'>
                    <i className="bi bi-heart" />
                </button>
                <button
                    onClick={() => toast.success("COMPARTIR")}
                    className='w-10 h-10 rounded-full bg-blue-100 hover:bg-upla-100 hover:text-white'>
                    <i className="bi bi-share" />
                </button>
                <button
                    onClick={() => toast.success("OPCIONES")}
                    className='w-10 h-10 rounded-full bg-blue-100 hover:bg-upla-100 hover:text-white'>
                    <i className="bi bi-three-dots-vertical" />
                </button>
            </div>

            <div className='flex flex-col gap-4'>

                <div className='flex flex-col gap-2 text-gray-500'>
                    <div className="flex mt-2">
                        <span className='flex w-8 shrink-0'><i className="bi bi-clock-history" /></span>
                        <span>{jobType}</span>
                    </div>
                    <div className="flex mt-2">
                        <span className='flex w-8 shrink-0'><i className="bi bi-building" /></span>
                        <span>{modality}</span>
                    </div>
                </div>
                {/* CONTENIDO */}
                <div className="flex flex-col gap-3">
                    <div className='flex flex-col gap-2'>
                        <h2 className="text-lg font-bold">Descripción completa del empleo</h2>
                        <p className="text-base">
                            {description}
                        </p>
                    </div>

                    {requerimientos.length > 0 &&
                        <div>
                            <h3 className="text-base font-semibold mb-2">¿Cuáles son los requisitos?</h3>
                            <ul className="text-sm list-disc ml-8">
                                {requerimientos.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    }
                      {buscamos.length > 0 &&
                        <div>
                            <h3 className="text-base font-semibold mb-2">¿Qué es lo que buscamos en ti?</h3>
                            <ul className="text-sm list-disc ml-8">
                                {buscamos.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    }
                      {funciones.length > 0 &&
                        <div>
                            <h3 className="text-base font-semibold mb-2">¿Cuáles serán tus funciones?</h3>
                            <ul className="text-sm list-disc ml-8">
                                {funciones.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    }
                      {beneficios.length > 0 &&
                        <div>
                            <h3 className="text-base font-semibold mb-2">Como practicante, tendrás beneficios:</h3>
                            <ul className="text-sm list-disc ml-8">
                                {beneficios.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    }

                    <div className="flex flex-col gap-2 text-sm mt-2 mb-4">
                        <p>
                            <span className="font-semibold">Duración del contrato:</span> 6 meses
                        </p>
                        <p>
                            <span className="font-semibold">Sueldo:</span>  {renderSalario()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};