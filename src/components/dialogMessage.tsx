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

export const DialogMessage = ({buttonText, dialogTitle, dialogDescription, dialogCloseText} : {buttonText: string, dialogTitle: string, dialogDescription: React.ReactNode, dialogCloseText: string}) => {
    return (
        <Dialog>
            <DialogTrigger className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
                {buttonText}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogDescription>
                        {dialogDescription}
                    </DialogDescription>
                    <DialogClose>
                        <Button>
                            {dialogCloseText}
                        </Button>
                    </DialogClose>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}