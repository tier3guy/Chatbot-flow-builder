import ActionNode from "@/components/ActionNode";
import MessageNode from "@/components/MessageNode";

export default function NodesPannel() {
    return (
        <aside className="h-full w-1/3 overflow-y-scroll">
            <div className="py-2 text-center bg-gray-200">NODES PANNEL</div>
            <div className="p-3 flex flex-wrap gap-2">
                <MessageNode />
                <ActionNode />
            </div>
        </aside>
    );
}
