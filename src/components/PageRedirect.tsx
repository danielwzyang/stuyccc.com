interface Props {
    title: string
    link: string
    image: string
    bio: string
}

export function PageRedirect(props: Props) {
    return <a class="group bg-[#1c1c1c] border border-[#434343] p-6 rounded-2xl flex items-center w-full relative transition overflow-hidden hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]" href={props.link}>
        <div>
            <div
                class="absolute inset-0 bg-cover bg-left-top opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-[2px]"
                style={{
                    "background-image": `url(${props.image})`,
                    "mask-image": "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
                    "-webkit-mask-image": "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))"
                }}
            />

            <h1 class="text-2xl font-bold">{props.title}</h1>
            <h1 class="text-xl text-[#bfbfbf]">{props.bio}</h1>
        </div>

        <svg class="transition group-hover:translate-x-1 ml-auto stroke-[#a0a0a0] group-hover:stroke-white w-12 pl-2"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="m12 16 4-4-4-4" />
        </svg>
    </a>
}