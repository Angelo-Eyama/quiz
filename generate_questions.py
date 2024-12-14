# Se debe volver a procesar todo porque se ha reiniciado el estado de ejecución.
import json

# Recargar el archivo corregido
file_path_corrected = 'preguntas.txt'

with open(file_path_corrected, 'r', encoding='utf-8') as file:
    contenido_correcto = file.read()


#Proceso para estrucutrar el JSON por preguntas
def parse_preguntas(contenido):
    preguntas = []
    tema_actual = None
    
    for linea in contenido.splitlines():
        linea = linea.strip()
        if linea:
            if linea.startswith("Tema"):
                tema_actual = linea.split(":")[1].strip()
                print("Tema:", tema_actual)
            elif linea and tema_actual:
                # Procesar preguntas y opciones
                if linea[0].isdigit() and "." in linea:
                    # Nueva pregunta detectada
                    pregunta = {"enunciado": linea.split(".", 1)[1].strip(), "opciones": [], "tema": tema_actual}
                    preguntas.append(pregunta)
                elif linea[0] in "abcdABCD":
                    # Nueva opción detectada
                    correcta = "*" in linea
                    partes = linea.replace("*", "").split(")", 1)
                    texto = partes[1].strip() if len(partes) > 1 else "Texto faltante"
                    opcion = {"texto": texto, "correcta": correcta}
                    if preguntas:
                        preguntas[-1]["opciones"].append(opcion)
                        
    return {"preguntas": preguntas}


# Crear la estructura JSON
estructura_json_correcta = parse_preguntas(contenido_correcto)

# Escribir el JSON a un archivo
output_path_corrected = 'preguntas.json'
with open(output_path_corrected, 'w', encoding='utf-8') as json_file_corrected:
    json.dump(estructura_json_correcta, json_file_corrected, ensure_ascii=False, indent=4)

output_path_corrected # Devolver la ruta del archivo generado