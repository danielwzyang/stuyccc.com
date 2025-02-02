import { createResource, For, Show } from "solid-js"
import Post from "../components/home/Post"
import Layout from "../components/Layout"
import { getPosts } from "../util/markdown"

export default function Home() {
    const [posts] = createResource(getPosts)

    return <Layout title="StuyCCC" class="space-y-5">
        <h1 class="text-5xl sm:text-6xl font-bold mb-10">StuyCCC</h1>
        <Show when={!posts.loading} fallback={<p>Loading...</p>}>
            <For each={posts()}>
                {(post) => (
                    <Post
                        title={post!.frontmatter.title}
                        cover={post!.frontmatter.cover}
                        content={post!.html}
                        date={post!.frontmatter.date}
                    />
                )}
            </For>
        </Show>
    </Layout>
}