import Image from "next/image";
import { Handle, Position, NodeProps } from "reactflow";
import Logo from "@/public/message-logo.png";

type TextUpdaterNodeProps = NodeProps<{
    label: string;
}>;

export default function TextUpdaterNode({ data }: TextUpdaterNodeProps) {
    console.log(data);

    return (
        <>
            <Handle type="target" position={Position.Top} id="a" />
            <Handle type="source" position={Position.Left} id="d" />
            <Handle type="source" position={Position.Right} id="b" />
            <Handle type="source" position={Position.Bottom} id="c" />
            <div className="rounded-lg shadow-lg overflow-hidden w-[230px]">
                <div className="px-3 py-2 bg-green-300 text-sm flex items-center justify-between">
                    <h4 className="font-medium">Send Message</h4>
                    <div>
                        <Image src={Logo} alt="logo" height={30} width={30} />
                    </div>
                </div>
                <div className="px-3 py-2 bg-gray-100 text-sm">
                    {data.label}
                </div>
            </div>
        </>
    );
}
