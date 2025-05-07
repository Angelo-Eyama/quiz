import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Ajv from "ajv"
import schema_json from "./test_schema.json"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface Opcion {
  texto: string;
  correcta: boolean;
}

interface Pregunta {
  enunciado: string;
  opciones: Opcion[];
  tema: string;
}

// Instrucciones para el validador
const ajv = new Ajv();
const schema = JSON.parse(JSON.stringify(schema_json));
export const validate = ajv.compile<Pregunta[]>(schema)