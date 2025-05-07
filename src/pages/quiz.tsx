import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const Quiz: React.FC = () => {
    const location = useLocation();
    const quizData = location.state?.quizData;
    
    // Si no hay datos de quiz, redirigir a la página principal
    if (!quizData) {
        return <Navigate to="/" replace />;
    }
    
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Quiz</h1>
            <p>Los datos del quiz han sido cargados correctamente.</p>
            
            {/* Aquí puedes renderizar el contenido del quiz según la estructura de tu JSON */}
            <pre className="bg-gray-100 p-4 rounded mt-4">
                {JSON.stringify(quizData, null, 2)}
            </pre>
            
            {/* Implementa aquí la lógica de tu quiz usando quizData */}
        </div>
    );
};

export default Quiz;