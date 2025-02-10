import { useParams } from "@solidjs/router"
import Layout from "../../components/Layout"
import NotFound from "../NotFound"
import { getWriteupData, writeupExists } from "../../util/markdown"
import { For } from "solid-js"
import HoverTooltip from "../../components/HoverTooltip"

export default function Writeup() {
    const { id } = useParams()
    if (!writeupExists(id)) return NotFound()

    const writeup = getWriteupData(id)
    console.log(writeup)

    return (
        <Layout title={""}>
            <h1 class="font-bold text-2xl">{writeup[0].frontmatter.title}</h1>
            <div innerHTML={writeup[0].html} class="text-[#bfbfbf] text-lg space-y-5 mt-5 mb-10" />

            <div class="flex flex-col space-y-5 w-full">
                <For each={writeup.slice(1)}>
                    {
                        (problem) => (
                            <div class="bg-[#1c1c1c] border border-[#434343] p-6 rounded-2xl w-full flex flex-col">
                                <div class="flex mb-2">
                                    <HoverTooltip text="Visit Problem">
                                        <a href={problem.frontmatter.link} class="font-bold text-xl">{problem.frontmatter.title}</a>
                                    </HoverTooltip>
                                    <h1 class="ml-auto font-bold text-xl">{problem.frontmatter.problem}</h1>
                                </div>

                                <div innerHTML={problem.html} class="text-[#bfbfbf] text-lg space-y-5" />
                            </div>
                        )
                    }
                </For>
            </div>
        </Layout>
    )
}