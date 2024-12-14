import React from 'react';

interface Opcion {
    texto: string;
    correcta: boolean;
}

interface QuestionProps {
    tema: string;
    contador: number;
    maxContador: number;
    preguntaActual: {
        tema: string;
        enunciado: string;
        opciones: Opcion[];
    };
    handleAnswer: (e: React.MouseEvent<HTMLButtonElement>, esCorrecta: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ tema, contador, maxContador, preguntaActual, handleAnswer }) => {
    return (
        <div>
            <h1 className='text-5xl mb-7 text-center font-bold'>Test de {tema}</h1>
            <p className='text-xl text-center mb-4'>Pregunta {contador} de {maxContador}</p>
            <p className='text-lg text-center mb-2 font-semibold'>TEMA: {preguntaActual.tema}</p>
            <p className='text-lg text-center mb-6'>{preguntaActual.enunciado}</p>
            <div className='flex flex-col'>
                {preguntaActual.opciones.map((opcion, index) => (
                    <button
                        key={index}
                        className='text-gray-900 bg-white border-gray-300 hover:bg-gray-400 font-medium rounded-lg px-3 py-2 me-4 mb-2'
                        onClick={(e) => handleAnswer(e, opcion.correcta)}
                    >
                        {opcion.texto}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;