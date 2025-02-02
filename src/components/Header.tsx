interface Props {
    title: string,
    class?: string,
}

export default function Header(props: Props) {
    return <div class={`flex items-center overflow-hidden w-full ${props.class}`}>
        <hr class="w-64 text-[#a0a0a0]" />
        <h1 class="whitespace-nowrap mx-5 text-2xl sm:text-3xl font-bold">{props.title}</h1>
        <hr class="w-64 text-[#a0a0a0]" />
    </div>
}