import { useParams } from "@solidjs/router"
import Layout from "../../components/Layout"
import NotFound from "../NotFound"
import { getWriteupData, writeupExists } from "../../util/markdown"
import { For, onMount } from "solid-js"
import HoverTooltip from "../../components/HoverTooltip"
import hljs from "highlight.js"

export default function Writeup() {
    const { id } = useParams()
    if (!writeupExists(id)) return NotFound()

    onMount(() => {
        hljs.highlightAll()
    })

    const writeup = getWriteupData(id)

    return (
        <Layout title={writeup[0].frontmatter.title} class="max-w-[60%]! space-y-5">
            <h1 class="font-bold text-2xl">{writeup[0].frontmatter.title}</h1>
            <div innerHTML={writeup[0].html} class="text-[#bfbfbf] text-lg space-y-5 self-baseline" />

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
        </Layout>
    )
}