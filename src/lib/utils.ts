import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Ajv from "ajv"
import schema_json from "./test_schema.json"
import preguntasSeguridad from "./preguntasSeguridad.json"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface Opcion {
  texto: string;
  correcta: boolean;
}

export interface Pregunta {
  enunciado: string;
  opciones: Opcion[];
  tema: string;
}

// Instrucciones para el validador
const ajv = new Ajv();
const schema = JSON.parse(JSON.stringify(schema_json));
export const validate = ajv.compile<Pregunta[]>(schema)

// Utilidades para mezclar y filtrar preguntas

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const filterByThemes = (array: Pregunta[], themes: string[]) => {
  let newArray = shuffleArray(array);

  //Verificamos si el array de temas está vacío
  if (!themes.length) {
    return newArray;
  }
  let themeArray = newArray.filter((pregunta) => themes.includes(pregunta.tema));
  return themeArray;
};

export const getPreguntasSeguridad = () => {
  return preguntasSeguridad;
  
}