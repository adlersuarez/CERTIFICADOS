import React, { useState } from 'react';

interface Option {
    idOption: number
    label: string
    count?: number // El conteo es opcional
}

interface SelectedFiltros {
    idButton: number
    idOption: number
}

interface DropdownButtonProps {
    idButton: number
    buttonLabel: string // Etiqueta del botón
    options: Option[] // Lista de opciones
    selectOption: (newOption: SelectedFiltros) => void
    quitarOption: (idOption: number) => void
}

export const ButtonFiltro: React.FC<DropdownButtonProps> = ({ idButton, buttonLabel, options, selectOption, quitarOption }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDropdown = () => {
        if (selectedOption !== null) {
            return
        }
        setIsOpen(!isOpen)
    }

    const handleSelect = (option: Option) => {
        setSelectedOption(option)
        selectOption({
            idButton: idButton,
            idOption: option.idOption
        })
        setIsOpen(false)
    }

    const clearSelection = () => {
        setSelectedOption(null)
        quitarOption(idButton)
    }

    return (
        <div className="relative inline-block text-left">
            {/* Botón principal */}
            <button
                onClick={toggleDropdown}
                className={`inline-flex justify-between px-4 pr-2 py-2 text-sm font-medium rounded-md border
                ${selectedOption ? 'text-upla-100 bg-blue-100 border-blue-300' : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-100'}`}
            >
                {selectedOption ? (
                    <span className="flex items-center">
                        {selectedOption.label}
                        <button
                            onClick={clearSelection}
                            className="ml-3 text-gray-500 hover:text-gray-700 hover:bg-red-100 rounded-full w-5 h-5"
                        >
                            <i className="bi bi-x-lg text-xs" />
                        </button>
                    </span>
                ) : (
                    <span className='flex items-center'>
                        {buttonLabel}
                        <div className='flex w-5 h-5 mr-2'>
                            <i className={`m-auto ml-3 bi bi-chevron-${isOpen ? 'up' : 'down'}`} />
                        </div>
                    </span>
                )}


            </button>

            {/* Menú desplegable */}
            {isOpen && (
                <div className="absolute z-10 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                    <div className='flex justify-between px-4 pr-2 py-2'>
                        <span className='font-semibold'>{buttonLabel} </span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className='rounded-full hover:bg-red-100 text-xs w-6 h-6'>
                            <i className="bi bi-x-lg" />
                        </button>
                    </div>

                    <ul>
                        {options.map((option) => (
                            <li
                                key={option.label}
                                onClick={() => handleSelect(option)}
                                className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            >
                                <span>{option.label}</span>
                                {option.count !== undefined && (
                                    <span className="text-gray-400">{option.count}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}