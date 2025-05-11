import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export const DialogMessage = () => {
    return (
        <Dialog>
            <DialogTrigger className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
                Prueba de Seguridad
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>No disponible</DialogTitle>
                    <DialogDescription>
                        Hola! Esta sección aún no está disponible ya que no tengo preparadas las preguntas para el examen de Seguridad Informática.
                        <br /> <br />
                        Si quieres ayudarme a publicar preguntas para el examen, puedes hacerlo preparando el archivo JSON con las preguntas siguiendo el
                        formato de ejemplo que puedes encontrar en el <a href="https://github.com/Angelo-Eyama/quiz?tab=readme-ov-file#script-de-python" target="_blank" className="text-blue-500">repositorio de GitHub</a>.
                        <br />
                    </DialogDescription>
                    <DialogClose>
                        <Button>
                            Volver
                        </Button>
                    </DialogClose>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}