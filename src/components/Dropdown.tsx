import { createSignal, JSX } from "solid-js"
import useClickOutside from 'solid-click-outside'

interface Props {
    title: string
    children: JSX.Element
    class?: string
}

export default function Dropdown(props: Props) {
    const [open, setOpen] = createSignal(false)
    const [target, setTarget] = createSignal<HTMLElement | undefined>();

    useClickOutside(target, () => {
        setOpen(false)
    })

    return <div class={`flex justify-center relative ${props.class}`} ref={setTarget}>
        <div onclick={() => setOpen(!open())} class="flex items-center cursor-pointer">
            <h1 class="font-bold text-xl">{props.title}</h1>
            <img src="/icons/chevron.svg" alt="chevron"
                class={`h-8 p-1 transition duration-250 ${open() ? "-rotate-90" : "rotate-90"}`}
            />
        </div>

        <div
            class={`flex-col absolute top-10 bg-[#1c1c1c] border border-[#434343] py-3 px-4 rounded-2xl transition ${open() ? "opacity-100 z-2" : "-z-1 opacity-0"}`}
            onMouseLeave={() => setOpen(false)}
        >
            {props.children}
        </div>
    </div>
}