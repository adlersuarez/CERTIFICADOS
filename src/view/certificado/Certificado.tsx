import { useState } from "react"

interface UrlDocumento {
    anverso: string
    reverso: string
}

interface ListaCertificado {
    nombre: string
    dni: string
    grado: string
    resolucion: string
    fechaAprobacion: string
    estado: string
    tipo: string
    urlDocumento: UrlDocumento
}

const Certificado = () => {

    const [validado, setValidado] = useState<boolean>(false)
    const [dni, setDni] = useState<string>("")
    const [documentoId, setDocumentoId] = useState<string>("")

    const [posicion, setPosicion] = useState<boolean>(true)
    const [modal, setModal] = useState<boolean>(false)

    const [docAnverso, setDocAnverso] = useState<string>("")
    const [docReverso, setDocReverso] = useState<string>("")

    // Abrir y cerrar modal
    const openModal = (anv: string, rev: string) => {
        setDocAnverso(anv)
        setDocReverso(rev)
        setModal(true)
    }

    const closeModal = () => setModal(false)

    //Posicion del documento en el modal
    const anverso = () => setPosicion(true)
    const reverso = () => setPosicion(false)

    const verificarDatos = (valor: string) => {
        console.log(valor)
        console.log(dni)
        console.log(documentoId)
        //LOGICA DE VREFICACION DE DATOS
        if (valor === 'formulario') {
            setValidado(true)
            return
        }
        if (valor === 'resultado') {
            setValidado(false)
            return
        }
    }

    const prueba: ListaCertificado[] = [
        {
            nombre: "FLORES DE LA CRUZ RUBER ALI",
            dni: "46615507",
            grado: "Bachiller en Ingeniería de Sistemas y Computación",
            resolucion: "0344-2024-GyT-CU-UPLA",
            fechaAprobacion: "01/02/2024",
            estado: "Oficial",
            tipo: "Original",
            urlDocumento: {
                anverso: "https://cualquiera.upla.edu.pe/Reportes/PDF/46615507-1-1.pdf",
                reverso: "https://cualquiera.upla.edu.pe/Reportes/PDF/46615507-2-1.pdf",
            }
        }
    ]

    return (

        <div className="w-full flex flex-col h-full xl:h-screen font-mont bg-[#e4eaed]">
            <div className="bg-upla-100 h-28 flex justify-center items-center">
                <div className="w-4/5">
                    <img src="src/assets/logoIntranetw1.png" alt="Logo UPLA" className="w-40" />
                </div>
            </div>
            <div className="w-11/12 md:w-4/5 m-auto bg-white mt-10 shadow-xl p-5">
                <h3 className="font-bold text-xl py-2 cursor-default">Verificación y validación de documentos oficiales emitidos por la UPLA</h3>
                <div className="mt-5 shadow-2xl">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-black dark:text-gray-400 bg-gray-200">
                        <li className="mr-2 w-full md:w-auto">
                            <a href="#" className="inline-flex w-full md:w-auto active p-3 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group" aria-current="page">
                                <svg aria-hidden="true" className="mr-2 w-5 h-5 text-black group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd">
                                    </path>
                                </svg>
                                Grados y Titulos</a>
                        </li>
                    </ul>

                    <div className="p-4">
                        <div>
                            <div className="bg-orange-100 md:h-11 flex items-center space-x-3 py-3 px-4 cursor-default">
                                <div className="border-r-2 border-gray-300 h-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="black" className="mr-3">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                                        </path>
                                    </svg>
                                </div>
                                <p className="text-sm">Para verificar la autenticidad del grado o título, ingrese los datos que se solicitan a continuación:</p>
                            </div>
                            <div className="flex my-5 flex-wrap justify-between">
                                <div className={`${validado ? 'hidden' : 'block'} w-full md:w-[30%]`}>

                                    <div className="relative z-0 mb-6 w-full group border rounded-sm border-gray-300">
                                        <input
                                            type="text"
                                            name="dni"
                                            id="dni"
                                            placeholder=""
                                            onChange={(e) => setDni(e.target.value)}
                                            className="block px-3 py-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:border-upla-100 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
                                        />
                                        <label htmlFor="dni" className="px-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-upla-100 peer-focus:dark:text-upla-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group border rounded-sm border-gray-300">
                                        <input
                                            type="text"
                                            name="documento"
                                            id="documento"
                                            placeholder=""
                                            onChange={(e) => setDocumentoId(e.target.value)}
                                            className="block px-3 py-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:border-upla-100 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
                                        />
                                        <label htmlFor="documento" className="px-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-upla-100 peer-focus:dark:text-upla-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DOCUMENTO</label>
                                    </div>

                                    <div className="mb-6 flex justify-center">
                                        <div>
                                            <div>
                                                <div className="w-[304px] h-[78px]">
                                                    <div>
                                                        <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-uvpml6pq4jxm" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le0l0cjAAAAADF6bA_pDT-ar3NTepByGy4G61G6&amp;co=aHR0cHM6Ly92ZXJpZmljYWNpb24udXBsYS5lZHUucGU6NDQz&amp;hl=es&amp;type=image&amp;v=8k85QBI-qzxmenDv318AZH30&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=lsr0k1isrv1v">
                                                        </iframe>
                                                    </div>
                                                    <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response w-[250px] h-[40px] border border-[#c1c1c1] my-[10px] mx-[25px] p-0 resize-none hidden">
                                                    </textarea>
                                                </div>
                                                <iframe className="hidden"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button onClick={() => verificarDatos('formulario')}
                                            className="bg-upla-100 text-white px-4 py-2 rounded-sm">Verificar</button>
                                    </div>
                                </div>
                                <div className={`w-full ${validado ? 'block' : 'hidden'}`}>
                                    <div className="m-auto box-border w-full md:w-fit overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">Nº</th><th scope="col" className="py-3 px-6">Apellido y Nombres</th>
                                                    <th scope="col" className="py-3 px-6">Grado</th><th scope="col" className="py-3 px-6">Fecha Aprobación</th>
                                                    <th scope="col" className="py-3 px-6">Estado</th><th scope="col" className="py-3 px-6">Tipo</th>
                                                    <th scope="col" className="py-3 px-6">Constancia</th></tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    prueba.map((cert, index) => (
                                                        <tr key={index}
                                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                                                            <td className="py-4 px-6">{cert.nombre}
                                                                <span className="block font-bold">DNI {cert.dni}</span>
                                                            </td>
                                                            <td className="py-4 px-6">{cert.grado}
                                                                <span className="flex">
                                                                    <p className="font-bold mr-2">Aprobado por Resolución Nº: </p>{cert.resolucion}
                                                                </span>
                                                            </td>
                                                            <td className="py-4 px-6">{cert.fechaAprobacion}</td>
                                                            <td className="py-4 px-6">{cert.estado}</td>
                                                            <td className="py-4 px-6">{cert.tipo}</td>
                                                            <td className="py-4 px-6 text-center">
                                                                <button
                                                                    onClick={() => openModal(cert.urlDocumento.anverso, cert.urlDocumento.reverso)}
                                                                    className="font-medium cursor-pointer mx-auto text-blue-600 dark:text-blue-500 hover:underline">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="19" height="19" fill="red" className="m-auto">
                                                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path>
                                                                        <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                        <div className="flex items-center rounded w-5/6 m-auto my-2 px-5 p-2 bg-orange-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30" height="30" fill="#000" className="mr-3">
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                                                </path>
                                            </svg>
                                            <div>
                                                <strong>Información</strong>
                                                <p className="text-xs ">“Solo los diplomas <strong>aprobados</strong> por Consejo Universitario a partir del 08-08-2023 se podrán obtener y descargar en formato digital, estando disponibles para su utilización <strong>(Resolución N°703-2023-CU-UPLA)</strong></p>
                                            </div>
                                        </div>
                                        <div className="flex items-center rounded w-5/6 m-auto my-2 px-5 p-2 bg-blue-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30" height="30" fill="#233876" className="mr-3">
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                                                </path>
                                            </svg>
                                            <div>
                                                <strong>Leyenda "ESTADO"</strong><p className="text-xs "><strong>En proceso: </strong>El diploma aún se encuentra en trámite.</p><p className="text-xs "><strong>Oficial: </strong>Puedes acercarte a nuestra oficina a recoger el diploma físico.</p><p className="text-xs "><strong>Observado: </strong> Comunicate al 964256147 para regularizar alguna documentacion.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => verificarDatos('resultado')}
                                        className=" block m-auto bg-upla-100 text-white px-5 py-3 rounded-xl mt-5">
                                        Volver a Buscar
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className={`${modal ? 'block' : 'hidden'} fixed top-0 right-0 bg-sombra w-screen h-screen`}>
                                    <div id="modalEl" className=" fixed top-[5%] left-[10%] right-[10%] z-50 w-[80%] overflow-x-hidden overflow-y-auto ">
                                        <div className="relative w-full ">
                                            <div className="relative bg-white h-full rounded-lg shadow dark:bg-gray-700">
                                                <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Diploma Universidad Peruana Los Andes</h3>
                                                    <button type="button"
                                                        onClick={closeModal}
                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
                                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                                                        <ul className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                                            <li className="mr-2 bg-upla-100 text-white" role="presentation">
                                                                <button onClick={anverso}
                                                                    className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Anverso</button>
                                                            </li>
                                                            <li className="mr-2 false" role="presentation">
                                                                <button onClick={reverso}
                                                                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Reverso</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div id="myTabContent">
                                                        <div className={`${posicion ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                            <iframe width="100%" className="h-[70vh]" src={docAnverso}></iframe>
                                                        </div>
                                                        <div className={`${posicion ? 'hidden' : 'block'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                                            <iframe width="100%" className="h-[70vh]" src={docReverso}></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 md:w-4/5 m-auto flex">
                <div className="flex w-1/2 my-10 justify-center">
                    <ul>
                        <li className="text-gray-600 font-semibold">Ubicanos:</li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="#007cbc" className="mr-3">
                                <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z">
                                </path>
                                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z">
                                </path>
                            </svg>Av. Giráldez Nº 230 Huancayo</li>
                        <li>© Universidad Peruana Los Andes</li>
                    </ul>
                </div>
                <div className="flex w-1/2 my-10 justify-center">
                    <ul>
                        <li className="text-gray-600 font-semibold">Llámanos:</li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="#007cbc" className="mr-3">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                                </path>
                            </svg>
                            <a href="tel:+51964256147">964 256 147</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Certificado