import { useParams } from "@solidjs/router"
import Layout from "../../components/Layout"
import { getLessonData, lessonExists } from "../../util/markdown"
import NotFound from "../NotFound"
import { onMount } from "solid-js"
import hljs from "highlight.js"

export default function Lesson() {
    const { id } = useParams()
    if (!lessonExists(id)) return NotFound()

    onMount(() => {
        hljs.highlightAll()
    })

    const lesson = getLessonData(id)
    console.log(lesson)

    return (
        <Layout title={lesson.frontmatter.title} class="items-baseline!">
            <div class="bg-[#1c1c1c] border border-[#434343] p-6 rounded-2xl w-full flex flex-col space-y-5">
                <h1 class="font-bold text-2xl">{lesson.frontmatter.title}</h1>
                <div innerHTML={lesson.html} class="text-[#bfbfbf] text-lg space-y-5" />
            </div>
        </Layout>
    )
}