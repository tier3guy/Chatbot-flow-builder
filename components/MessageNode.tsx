import { AtSign } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Textarea } from "./ui/textarea";

export default function MessageNode() {
    return (
        <Sheet>
            <SheetTrigger className="w-[48%]">
                <div className="border shadow p-4 grid place-content-center cursor-pointer">
                    <div className="flex gap-2 items-center justify-center">
                        <AtSign className="font-light" size={20} />
                        <p>Message</p>
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent className="w-1/3 p-3">
                <div className="text-center">
                    <h3>Message</h3>

                    <Textarea
                        placeholder="Type your message here."
                        className="mt-4"
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
}
