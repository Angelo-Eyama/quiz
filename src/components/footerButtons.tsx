import React from 'react';

interface FooterButtonsProps {
    handleBack: () => void;
    handleNext: () => void;
    handleReset: () => void;
    handleHome: () => void;
}

const FooterButtons: React.FC<FooterButtonsProps> = ({ handleBack, handleNext, handleReset, handleHome }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-row justify-center'>
                <button
                    onClick={handleBack}
                    className='bg-blue-500 border border-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4'
                >
                    Anterior
                </button>

                <button
                    onClick={handleReset}
                    className='bg-blue-500 border border-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4'
                >
                    Reiniciar
                </button>

                <button
                    onClick={handleNext}
                    className='bg-blue-500 border border-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4'
                >
                    Siguiente
                </button>
            </div>

            <div className='flex justify-center'>
                <button
                    onClick={handleHome}
                    className='bg-green-500 border border-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4'
                >
                    Salir del Quiz
                </button>
            </div>
        </div>
    );
};

export default FooterButtons;