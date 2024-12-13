import { useState, useEffect } from 'react';
import preguntas from './data/preguntasASI.json';

interface Opcion {
  texto: string;
  correcta: boolean;
}

interface Pregunta {
  enunciado: string;
  opciones: Opcion[];
  tema: string;
}
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  const [preguntasASI, setPreguntasASI] = useState<Pregunta[]>(JSON.parse(JSON.stringify(preguntas)).preguntas);
  const [preguntaActual, setPreguntaActual] = useState<Pregunta>(preguntasASI[0]);
  const [contador, setContador] = useState(1);
  const maxContador = preguntasASI.length;

  useEffect(() => {
    const preguntasMezcladas = shuffleArray([...preguntasASI]);
    setPreguntasASI(preguntasMezcladas);
    preguntasASI.forEach((pregunta: Pregunta) => {
      shuffleArray(pregunta.opciones);
    });
  }, []);

  const handleNext = () => {
    const index = preguntasASI.indexOf(preguntaActual);
    if (index < preguntasASI.length - 1) {
      setContador(contador + 1);
      setPreguntaActual(preguntasASI[index + 1]);
    }
    else {
      setPreguntaActual(preguntasASI[0]);
      setContador(1);
    }
  };

  const handleBack = () => {
    const index = preguntasASI.indexOf(preguntaActual);
    if (index > 0) {
      setContador((contador - 1)%maxContador + 1);
      setPreguntaActual(preguntasASI[index - 1]);
    }
    else {
      setPreguntaActual(preguntasASI[preguntasASI.length - 1]);
      setContador(preguntasASI.length - 1);
    }
  };

  const handleAnswer = (e: Event, esCorrecta: Boolean) => {
    const target = e.target as HTMLButtonElement;

    // Cambiamos el color de la respuesta
    if (esCorrecta) {
      target.classList.remove('bg-white');
      target.classList.add('bg-green-400');
    } else {
      target.classList.remove('bg-white');
      target.classList.add('bg-red-400');
    }

    // Congelamos la ejecución por 2 segundos
    setTimeout(() => {
      //Quitamos el color de la respuesta
      esCorrecta ? target.classList.remove('bg-green-400') : target.classList.remove('bg-red-400');
      // Devolvemos el color original
      target.classList.add('bg-white');

      // Pasamos a la siguiente pregunta
      setContador(contador + 1);
      handleNext();
    }, 1500);
  };


  return (
    <main className='container mx-auto p-4 content-center'>
      <h1 className='text-5xl mb-7 text-center font-bold'>Test de ASI</h1>
      <p className='text-xl text-center mb-4'>Pregunta {contador} de {maxContador}</p>
      <p className='text-lg text-center mb-2 font-semibold'>TEMA: {preguntaActual.tema}</p>
      <p className='text-lg text-center mb-6'>{preguntaActual.enunciado}</p>
      <div className='flex flex-col'>
        {preguntaActual.opciones.map((opcion: Opcion, index: number) => (
          <button key={index}
            className='text-gray-900 bg-white border-gray-300 hover:bg-gray-400  font-medium rounded-lg px-3 py-2 me-4 mb-2'
            onClick={(e) => handleAnswer(e as unknown as Event, opcion.correcta)}>
              {opcion.texto}
          </button>
        ))}
      </div>
      <div className='flex flex-row justify-center'>
        <button onClick={handleBack}
          className=' bg-blue-500 border border-blue-500 hover:bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4'
        > Anterior </button>

        <button onClick={() => setPreguntaActual(preguntasASI[0])}
          className=' bg-blue-500 border border-blue-500 hover:bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4'
        > Reiniciar</button>

        <button onClick={handleNext}
          className=' bg-blue-500 border border-blue-500 hover:bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4'
        > Siguiente</button>
      </div>
    </main>
  );

}

export default App;