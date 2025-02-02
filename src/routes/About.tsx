import Header from "../components/Header"
import HoverTooltip from "../components/HoverTooltip"
import Layout from "../components/Layout"
import Leadership from "../components/Leadership"

export default function About() {
    return (
        <Layout title="About">
            <h1 class="font-bold text-xl text-pretty text-center max-w-[80vw] mt-10">We are the Competitive Coding Club at Stuyvesant High School. We learn and practice competitive programming to foster a community of passionate programmers.</h1>
            <div class="flex space-x-4 mt-5">
                <HoverTooltip text="Visit Epsilon">
                    <a
                        href="https://epsilon.stuysu.org/stuyccc"
                        class="w-[50px] h-[50px] flex justify-center items-center border border-[#434343] rounded-xl bg-[#1c1c1c]"
                    >
                        <img src="/icons/epsilon.png" alt="epsilon" height="22" width="22" />
                    </a>
                </HoverTooltip>
                <HoverTooltip text="Visit Discord">
                    <a
                        href="https://discord.gg/hjcpxfDbdS"
                        class="w-[50px] h-[50px] flex justify-center items-center border border-[#434343] rounded-xl bg-[#1c1c1c]"
                    >
                        <img src="/icons/discord.png" alt="discord" height="25" width="25" />
                    </a>
                </HoverTooltip>
            </div>

            <Header title="2024-25" class="mt-20 mb-3 sm:mb-5" />
            <div class="w-full space-y-3 sm:space-y-5">
                <Leadership name='Chongtian "Mark" Ma' title="President" github="https://github.com/envyaims" />
                <Leadership name="Matthew Chen" title="President" github="https://github.com/MC3297" />
                <Leadership name="Ethan Liu" title="Vice President" github="https://github.com/EL101" />
                <Leadership name="Irene Mouzakitis" title="Faculty Advisor" />
            </div>

            <Header title="2023-24" class="mt-10 mb-3 sm:mb-5" />
            <div class="w-full space-y-3 sm:space-y-5">
                <Leadership name='Chongtian "Mark" Ma' title="President" github="https://github.com/envyaims" />
                <Leadership name="Matthew Chen" title="President" github="https://github.com/MC3297" />
                <Leadership name="Naowal Rahman" title="Vice President" github="https://github.com/naowalrahman" />
                <Leadership name="Stanley Tung" title="Vice President" />
                <Leadership name="Irene Mouzakitis" title="Faculty Advisor" />
            </div>

            <Header title="2022-23" class="mt-10 mb-3 sm:mb-5" />
            <div class="w-full space-y-3 sm:space-y-5">
                <Leadership name="Ben Pan" title="President" github="https://github.com/YBenPan" />
                <Leadership name="Frank Wong" title="President" github="https://github.com/frank-cywong" />
                <Leadership name="Nicholas Tarsis" title="President" github="https://github.com/ntarsis30" />
                <Leadership name="Samuel Konstantinovich" title="Faculty Advisor" />
            </div>

            <Header title="2021-22" class="mt-10 mb-3 sm:mb-5" />
            <div class="w-full space-y-3 sm:space-y-5">
                <Leadership name="Maxwell Zen" title="President" github="https://github.com/MaxwellZen" />
                <Leadership name="Jeremy Ku-Benjet" title="President" github="https://github.com/jku20" />
                <Leadership name="Mohammad Khan" title="Vice President" github="https://github.com/Sayeem2004" />
                <Leadership name="Alvin Li" title="Vice President" github="https://github.com/alvinli04" />
                <Leadership name="Ivan Wei" title="Helper" github="https://github.com/iwei20" />
                <Leadership name="Peter Brooks" title="Faculty Advisor" />
                <Leadership name="Samuel Konstantinovich" title="Faculty Advisor" />
            </div>
        </Layout>
    )
}