import { FireExtinguisher } from "lucide-react";

export default function ActionNode() {
    return (
        <div className="shadow p-4 grid place-content-center cursor-not-allowed w-[48%] bg-gray-100">
            <div className="flex gap-2 items-center justify-center">
                <FireExtinguisher className="font-light" size={20} />
                <p>Action</p>
            </div>
        </div>
    );
}
