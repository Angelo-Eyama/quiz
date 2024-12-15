import { useState, useEffect } from 'react';
import preguntasJSON from './data/preguntas.json';
import FooterButtons from './components/footerButtons';
import Question from './components/Question';

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

const filterByThemes = (array: Pregunta[], themes: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  //Verificamos si el array de temas está vacío
  if (!themes.length) {
    return array;
  }
  let themeArray = array.filter((pregunta) => themes.includes(pregunta.tema));
  return themeArray;
};

function App() {
  const [preguntas, setpreguntas] = useState<Pregunta[]>(JSON.parse(JSON.stringify(preguntasJSON)).preguntas);
  const [preguntaActual, setPreguntaActual] = useState<Pregunta>(preguntas[0]);
  const [contador, setContador] = useState(1);
  const maxContador = preguntas.length;

  useEffect(() => {
    // Filtramos las preguntas por los temas indicados en el array y los mezclamos
    const preguntasMezcladas = filterByThemes([...preguntas], []);
    setpreguntas(preguntasMezcladas);
    preguntas.forEach((pregunta: Pregunta) => {
      shuffleArray(pregunta.opciones);
    });
  }, []);

  const handleNext = () => {
    const index = preguntas.indexOf(preguntaActual);
    if (index < preguntas.length - 1) {
      setContador(contador + 1);
      setPreguntaActual(preguntas[index + 1]);
    }
    else {
      setPreguntaActual(preguntas[0]);
      setContador(1);
    }
  };

  const handleBack = () => {
    const index = preguntas.indexOf(preguntaActual);
    if (index > 0) {
      setContador((contador - 1) % maxContador + 1);
      setPreguntaActual(preguntas[index - 1]);
    }
    else {
      setPreguntaActual(preguntas[preguntas.length - 1]);
      setContador(preguntas.length - 1);
    }
  };

  const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>, esCorrecta: Boolean) => {
    const target = e.target as HTMLButtonElement;

    // Cambiamos el color de la respuesta
    if (esCorrecta) {
      target.classList.remove('bg-white');
      target.classList.remove('hover:bg-gray-400');
      target.classList.add('bg-green-400');
    } else {
      target.classList.remove('bg-white');
      target.classList.remove('hover:bg-gray-400');
      target.classList.add('bg-red-400');
    }

    // Congelamos la ejecución por 2 segundos
    setTimeout(() => {
      //Quitamos el color de la respuesta
      esCorrecta ? target.classList.remove('bg-green-400') : target.classList.remove('bg-red-400');
      // Devolvemos el color original
      target.classList.add('hover:bg-gray-400');
      target.classList.add('bg-white');
      // Pasamos a la siguiente pregunta
      setContador(contador + 1);
      handleNext();
    }, 500);
  };


  return (
    <main className='container mx-auto p-4 content-center'>
      <Question
        tema='ASI'
        contador={contador}
        maxContador={maxContador}
        preguntaActual={preguntaActual}
        handleAnswer={handleAnswer}
      />
      <FooterButtons handleBack={handleBack} handleNext={handleNext} handleReset={() => {
        setContador(1);
        setPreguntaActual(preguntas[0]);
      }} />
    </main>
  );

}

export default App;