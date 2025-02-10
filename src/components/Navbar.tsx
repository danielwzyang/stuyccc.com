import { createSignal, For, Show } from "solid-js"

export default function Navbar() {
    const [open, setOpen] = createSignal(false)

    return <>
        <div class="hidden lg:flex flex-col fixed top-10 left-10 gap-10">
            <a href="/" class="w-fit"><img src="/logo.png" alt="logo" width="100" /></a>
            <div class="flex flex-col text-3xl text-[#BFBFBF] font-bold space-y-2">
                <a href="/about" class="hover:text-[#606060] w-fit">About</a>
                <a href="/lessons" class="hover:text-[#606060] w-fit">Lessons</a>
                <a href="/problems" class="hover:text-[#606060] w-fit">Problems</a>
                <a href="/resources" class="hover:text-[#606060] w-fit">Resources</a>
            </div>
        </div>
        <div
            class="fixed lg:hidden left-5 bottom-5 w-12 h-12 flex justify-center items-center bg-[#202020] border border-[#434343] rounded-lg p-2 z-1"
            onclick={() => setOpen(!open())}
        >
            <img src={open() ? "/icons/folder-open.svg" : "/icons/folder.svg"} alt="folder" class="w-full" />
        </div>
        <div
            class={`fixed top-0 left-0 backdrop-blur-sm h-screen w-screen transition duration-250 flex flex-col justify-center items-center text-2xl text-center space-y-3
            ${open() ? "opacity-100" : "opacity-0 -z-1"}`}
            onclick={() => setOpen(false)}
        >
            <For each={["Home", "About", "Lessons", "Problems", "Resources"]}>
                {
                    (page, i) => (
                        <a 
                            href={`/${page == "Home" ? "" : page.toLowerCase()}`}
                            class={`hover:text-[#606060] w-[240px] py-3 rounded-2xl bg-[#202020] border border-[#434343]
                            transform transition-all duration-500 ease-out 
                            ${
                                open() 
                                ? "translate-x-0 translate-y-0 opacity-100 scale-100" 
                                : "translate-x-[-100vw] translate-y-[100vh] opacity-0 scale-0"
                            }`}
                            style={{ "transition-delay": `${i() * 100}ms` }}
                        >
                            {page}
                        </a>
                    )
                }
            </For>
        </div>
    </>
}