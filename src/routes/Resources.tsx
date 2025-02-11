import Header from "../components/Header"
import Layout from "../components/Layout"
import { PageRedirect } from "../components/PageRedirect"

export default function Resources() {
    return (
        <Layout title="Resources" class="space-y-10">
            <div class="space-y-5 w-full">
                <Header title="Writeups" />
                <PageRedirect
                    title="PClassic 2024 Spring"
                    link="/writeups/pclassic2024s"
                    image="/pages/pclassic2024s.png"
                    bio="Problems 1-3, 6-8, and 10-12"
                />

                <PageRedirect
                    title="Advent of Code 2021"
                    link="/writeups/adventofcode2021"
                    image="/pages/adventofcode2021.png"
                    bio="Days 1-8"
                />

                <PageRedirect
                    title="PClassic 2021 Fall"
                    link="/writeups/pclassic2021f"
                    image="/pages/pclassic2021f.png"
                    bio="Days 1-11"
                />
            </div>
        </Layout>
    )
}