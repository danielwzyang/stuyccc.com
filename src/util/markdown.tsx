
import { marked } from "marked"
import fm from "front-matter"

function parseMarkdown(text: string) {
    return (marked.parse(text) as string)
        .replace(/\$(.*?)\$/g, (_, math) => `<span class="math">${math}</span>`)
}

function processFile(text: string) {
    const { attributes, body } = fm<{ [key: string]: any }>(text)
    return { frontmatter: attributes, html: parseMarkdown(body) }
}

const posts = import.meta.glob("/content/posts/*.md", { query: "?raw", eager: true })

export async function getPosts() {
    return (await Promise.all(
        Object.entries(posts)
            .map(async ([path, file]) => {
                const content = (file as { default: string }).default

                if (typeof content !== "string") {
                    console.error(`Expected string, got ${typeof content} for ${path}`, content)
                    return null
                }

                return processFile(content)
            })
            .filter(Boolean)
    )).sort((a, b) => {
        const dateA = new Date(a!.frontmatter.date)
        const dateB = new Date(b!.frontmatter.date)
        return dateB.getTime() - dateA.getTime()
    })
}