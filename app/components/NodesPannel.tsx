import ActionNode from "@/components/ActionNode";
import MessageNode from "@/components/MessageNode";

export default function NodesPannel() {
    return (
        <aside className="h-full w-1/3 overflow-y-scroll">
            <div className="py-2 text-center bg-gray-200">NODES PANNEL</div>
            <div className="p-3 grid grid-cols-2 gap-2">
                <MessageNode />
                <ActionNode label="Another Node 1" />
                <ActionNode label="Another Node 2" />
                <ActionNode label="Another Node 3" />
                <ActionNode label="Another Node 4" />
            </div>
        </aside>
    );
}
