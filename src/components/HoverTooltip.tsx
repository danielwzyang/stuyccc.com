import { createSignal, JSX } from "solid-js"

interface Props {
    text: string,
    children: JSX.Element
}

export default function HoverTooltip(props: Props) {
    const [mouseX, setMouseX] = createSignal(0)
    const [mouseY, setMouseY] = createSignal(0)

    const handleMouseMove = (event: MouseEvent) => {
        setMouseX(event.clientX + window.scrollX)
        setMouseY(event.clientY + window.scrollY)
    }

    return <div onMouseMove={handleMouseMove} class="group">
        {props.children}
        <div
            class="opacity-0 group-hover:opacity-100 transition-opacity duration-250 absolute bg-[#1C1C1C] border border-[#434343] py-1 px-4 rounded-2xl"
            style={{ left: `${mouseX() - 115}px`, top: `${mouseY() - 35}px` }}
        >
            <h1 class="font-bold">{props.text}</h1>
        </div>
    </div>
}