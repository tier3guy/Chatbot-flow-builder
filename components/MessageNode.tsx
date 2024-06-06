"use client";
import { AtSign } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { useAppContext } from "@/providers/AppProvider";
import { nanoid } from "nanoid";

export default function MessageNode() {
    const [text, setText] = useState<string>("");
    const { addNode, isMessageSheetOpen, setIsMessageSheetOpen } =
        useAppContext();

    const handleAddNode = () => {
        const id = nanoid();
        const newNode = {
            id,
            data: { label: text },
            position: { x: Math.random() * 250, y: Math.random() * 250 },
            type: "custom",
        };

        addNode(newNode);
        setText("");
        setIsMessageSheetOpen(false);
    };

    return (
        <Sheet open={isMessageSheetOpen} onOpenChange={setIsMessageSheetOpen}>
            <SheetTrigger>
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
                        className="my-4"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <Button className="w-full" onClick={handleAddNode}>
                        Add Node
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
