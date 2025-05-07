import React from 'react';

interface Opcion {
    texto: string;
    correcta: boolean;
}

interface QuestionProps {
    contador: number;
    puntuacion: [aciertos: number, errores: number];
    maxContador: number;
    preguntaActual: {
        tema: string;
        enunciado: string;
        opciones: Opcion[];
    };
    handleAnswer: (e: React.MouseEvent<HTMLButtonElement>, esCorrecta: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ puntuacion, contador, maxContador, preguntaActual, handleAnswer }) => {
    return (
        <div>
            <p className='text-xl text-center mb-4'>Pregunta {contador} de {maxContador}</p>
            <div className="flex justify-center">
                <p className='text-xl text-center mb-4 w-fit p-3 border-2 border-white rounded-xl'>Aciertos: {puntuacion[0]} &emsp; | &emsp; Errores: {puntuacion[1]}</p>
            </div>
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