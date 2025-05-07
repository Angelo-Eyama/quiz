import React, { useState, useEffect } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { type Pregunta, shuffleArray, filterByThemes } from "../lib/utils";
import FooterButtons from '../components/footerButtons';
import Question from '../components/Question';

const Quiz: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const quizData = location.state?.quizData;
    // Si no hay datos de quiz, redirigir a la página principal
    if (!quizData) {
        return <Navigate to="/" replace />;
    }

    const preguntasArray = quizData.preguntas || [];
    const [preguntas, setpreguntas] = useState<Pregunta[]>(preguntasArray);
    const [preguntaActual, setPreguntaActual] = useState<Pregunta>(preguntas[0]);
    const [contador, setContador] = useState(1);
    const [aciertos, setAciertos] = useState(0);
    const [errores, setErrores] = useState(0);
    const maxContador = preguntas.length;

    useEffect(() => {
        // Filtramos las preguntas por los temas indicados en el array y los mezclamos
        const preguntasMezcladas = filterByThemes([...preguntas], []);
        setpreguntas(preguntasMezcladas);
        setPreguntaActual(preguntasMezcladas[0]);
        preguntas.forEach((pregunta: Pregunta) => {
            shuffleArray(pregunta.opciones);
        });
    }, []);

    // Este useEffect asegura que los estados se actualicen si quizData cambia
    useEffect(() => {
        if (quizData && quizData.preguntas) {
            setpreguntas(quizData.preguntas);
            setPreguntaActual(quizData.preguntas[0]);
        }
    }, [quizData]);

    const handleNext = () => {
        const index = preguntas.indexOf(preguntaActual);
        if (index < preguntas.length - 1) {
            setContador((contador % maxContador) + 1);
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
            setPreguntaActual(preguntas[index - 1]);
            setContador(((contador - 2 + maxContador) % maxContador) + 1);
        }
        else {
            setPreguntaActual(preguntas[preguntas.length - 1]);
            setContador(maxContador);
        }
    };

    const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>, esCorrecta: Boolean) => {
        const target = e.target as HTMLButtonElement;

        // Cambiamos el color de la respuesta
        if (esCorrecta) {
            target.classList.remove('bg-white');
            target.classList.remove('hover:bg-gray-400');
            target.classList.add('bg-green-400');
            setAciertos(aciertos + 1);
        } else {
            setErrores(errores + 1);
            target.classList.remove('bg-white');
            target.classList.remove('hover:bg-gray-400');
            target.classList.add('bg-red-400');
        }

        // Congelamos la ejecución por unos segundos
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

    const handleReset = () => {
        setContador(1);
        setAciertos(0);
        setErrores(0);
        shuffleArray(preguntas);
        preguntas.forEach((pregunta: Pregunta) => {
            shuffleArray(pregunta.opciones);
        });
        setPreguntaActual(preguntas[0]);
    }
    return (
        <main className='container mx-auto p-4 content-center'>
            <Question
                puntuacion={[aciertos, errores]}
                contador={contador}
                maxContador={maxContador}
                preguntaActual={preguntaActual}
                handleAnswer={handleAnswer}
            />
            <FooterButtons
                handleBack={handleBack}
                handleNext={handleNext}
                handleReset={handleReset}
                handleHome={() => navigate("/")}
            />
        </main>
    );
};

export default Quiz;