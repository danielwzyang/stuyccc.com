interface Props {
    darken?: string
}

export default function Navbar(props: Props) {
    return <>
        <div class="hidden lg:flex flex-col fixed top-10 left-10 gap-10">
            <a href="/" class="w-fit"><img src="/logo.png" alt="logo" width="100"/></a>
            <div class="flex flex-col text-3xl text-[#BFBFBF] font-bold space-y-2">
                <a href="/about" class="hover:text-[#606060] w-fit">About</a>
                <a href="/lessons" class="hover:text-[#606060] w-fit">Lessons</a>
                <a href="/problems" class="hover:text-[#606060] w-fit">Problems</a>
                <a href="/resources" class="hover:text-[#606060] w-fit">Resources</a>
            </div>
        </div>
    </>
}