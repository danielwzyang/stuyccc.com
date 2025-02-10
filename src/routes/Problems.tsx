import HoverTooltip from "../components/HoverTooltip"
import Layout from "../components/Layout"

export default function Problems() {
    return (
        <Layout title="Problems">
            <h1 class="text-xl sm:text-2xl font-bold mt-14 mb-5 text-pretty text-center mx-10">
                Join our group for practice problems!
            </h1>
            <a
                href="https://codeforces.com/group/O7gdNvlx4L/blog"
                class="h-[55px] w-[280px] flex justify-center items-center border border-[#434343] rounded-xl bg-[#1c1c1c] p-2 gap-4"
            >
                <img src="/icons/codeforces.png" alt="codeforces" width="30"/>
                <h1 class="font-bold text-xl sm:text-2xl">Visit Codeforces</h1>
            </a>
            <h1 class="text-xl sm:text-2xl font-bold mt-14 mb-5 text-pretty text-center mx-10">
                View archived problems on our old site!
            </h1>
            <a
                href="https://codeforces.com/group/O7gdNvlx4L/blog"
                class="h-[55px] w-[280px] flex justify-center items-center border border-[#434343] rounded-xl bg-[#1c1c1c] px-4 gap-4"
            >
                <h1 class="font-bold text-xl sm:text-2xl">Visit Archive</h1>
            </a>
        </Layout>
    )
}