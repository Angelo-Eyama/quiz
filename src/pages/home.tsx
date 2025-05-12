import React, { useState } from "react";
import { validate, getPreguntasSeguridad } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { DialogMessage } from "@/components/dialogMessage";

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
            // Crear una instancia de FileReader
            const reader = new FileReader();

            // Configurar el evento onload que se ejecuta cuando termina de leer
            reader.onload = (e) => {
                try {
                    // Intentar parsear el contenido como JSON
                    const contenidoJSON = JSON.parse(e.target?.result as string);
                    // Validar el JSON
                    if (validate(contenidoJSON)) {
                        navigate("/quiz", {
                            state: { quizData: contenidoJSON }
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
    const handleSecurityQuiz = () => {
        const preguntasSeguridad = getPreguntasSeguridad();
        console.log(preguntasSeguridad);
        navigate("/quiz", {
            state: { quizData: preguntasSeguridad }
        });
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Bienvenido al Quiz App</h1>
            <p className="mb-4 text-center">
                Sube un archivo JSON con preguntas tipo test para comenzar.
            </p>
            <div className="mb-4 border">
                <Input
                    type="file"
                    accept=".json"
                    onChange={handleFileChange}
                    className="cursor-pointer w-full rounded shadow hover:bg-gray-100"
                    placeholder="Selecciona un archivo JSON"
                />
            </div>
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer mb-2"
            >
                Comenzar Quiz
            </button>

            <p className="mb-4 text-center"> O... puedes prepararte para el examen de Seguridad Informática. 👀 </p>
            <button
                onClick={handleSecurityQuiz}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer mb-2"
            > Quiz de Seguridad Informática
            </button>

            <div className="fixed top-4 right-4 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
                <DialogMessage
                    buttonText="¿JSON inválido?"
                    dialogTitle="Formato del archivo JSON"
                    dialogDescription={
                        <>
                            El archivo JSON debe contener un array de <b>preguntas</b>, cada una con un <b>tema, enunciado y opciones.</b><br /><br />
                            Cada opción debe tener un <b>texto y un booleano</b> que indique si es correcta o no.<br />
                            Aquí tienes un ejemplo:<br /><br />
                            <code>{`{
                                "preguntas": [
                                    {
                                    "enunciado": "¿Qué es un ataque XSS?",
                                    "tema": "Seguridad Web",
                                    "opciones": [
                                        { "texto": "Un tipo de inyección SQL", "correcta": false },
                                        { "texto": "Un ataque de inyección de scripts", "correcta": true }
                                    ]
                                    }
                                ]
                                }`}</code>
                        </>
                    }
                    dialogCloseText="Volver"
                />
            </div>
        </div>
    );
};

export default Home;