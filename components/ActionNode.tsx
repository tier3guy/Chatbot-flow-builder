import { FireExtinguisher } from "lucide-react";

interface ActionNodeProps {
    label?: string;
}

export default function ActionNode({
    label = "Another Node",
}: ActionNodeProps) {
    return (
        <div className="shadow p-4 grid place-content-center cursor-not-allowed bg-gray-100">
            <div className="flex gap-2 items-center justify-center">
                <FireExtinguisher className="font-light" size={20} />
                <p>{label}</p>
            </div>
        </div>
    );
}
