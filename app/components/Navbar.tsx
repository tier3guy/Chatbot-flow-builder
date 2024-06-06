"use client";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/providers/AppProvider";

export default function Navbar() {
    const { onSave } = useAppContext();

    return (
        <nav className="bg-gray-300 py-2 w-full px-4 flex items-center justify-between">
            <h1>Chatbot Flow Builder</h1>
            <Button className="shadow" onClick={onSave}>
                Save Changes
            </Button>
        </nav>
    );
}
