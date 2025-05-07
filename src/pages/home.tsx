import React, { useState } from "react";
import { validate } from "../lib/utils";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const navigate = useNavigate();
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = () => {
        if (file) {
            console.log("Archivo subido:", file.name);
            
            // Crear una instancia de FileReader
            const reader = new FileReader();
            
            // Configurar el evento onload que se ejecuta cuando termina de leer
            reader.onload = (e) => {
                try {
                    // Intentar parsear el contenido como JSON
                    const contenidoJSON = JSON.parse(e.target?.result as string);
                    
                    // Aquí tienes el contenido del JSON
                    console.log("Contenido del JSON:", contenidoJSON);
                    
                    // Validar el JSON
                    if (validate(contenidoJSON)) {
                        // alert("Archivo JSON válido.");
                        // Aquí puedes hacer algo con el contenido JSON válido
                        navigate("/quiz", {
                            state: { quizData: contenidoJSON}
                        })
                    } else {
                        alert("Archivo JSON inválido.");
                        console.log(validate.errors);
                    }
                } catch (error) {
                    // Capturar errores de parsing
                    console.error("Error al parsear el JSON:", error);
                    alert("El archivo no contiene un JSON válido.");
                }
            };
            
            // Configurar el evento onerror
            reader.onerror = () => {
                console.error("Error al leer el archivo");
                alert("Error al leer el archivo.");
            };
            
            // Leer el archivo como texto
            reader.readAsText(file);
        } else {
            alert("Por favor, sube un archivo JSON.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Bienvenido al Quiz App</h1>
            <p className="mb-4 text-center">
                Sube un archivo JSON con preguntas tipo test para comenzar.
            </p>
            <div className="mb-4">
                <input
                    type="file"
                    accept=".json"
                    onChange={handleFileChange}
                    className="w-full"
                />
            </div>
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Comenzar Quiz
            </button>
        </div>
    );
};

export default Home;