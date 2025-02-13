import Header from "../components/Header"
import Layout from "../components/Layout"
import { PageRedirect } from "../components/PageRedirect"

export default function Resources() {
    return (
        <Layout title="Resources" class="space-y-14">
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

            <div class="space-y-5 w-full">
                <Header title="References" />

                <PageRedirect
                    title="Competitive Programmer's Handbook"
                    link="https://usaco.guide/CPH.pdf"
                    image="/pages/cph.png"
                    bio="Textbook to learn competitive programming"
                />

                <PageRedirect
                    title="USACO Guide"
                    link="https://usaco.guide/"
                    image="/pages/usacoguide.png"
                    bio="Extensive practice for every division"
                />

                <PageRedirect
                    title="CP Algorithms"
                    link="https://cp-algorithms.com/"
                    image="/pages/cpalgorithms.png"
                    bio="Explanations for data structures and algorithms"
                />

                <PageRedirect
                    title="Principles of Algorithmic Problem Solving"
                    link="https://www.csc.kth.se/~jsannemo/slask/main.pdf"
                    image="/pages/poaps.png"
                    bio="Textbook to learn algorithms"
                />

                <PageRedirect
                    title="Geeks for Geeks"
                    link="https://www.geeksforgeeks.org/"
                    image="/pages/geeksforgeeks.png"
                    bio="Resource to learn all things coding"
                />
            </div>

            <div class="space-y-5 w-full">
                <Header title="Practice" />

                <PageRedirect
                    title="Codeforces"
                    link="https://codeforces.com/"
                    image="/pages/codeforces.png"
                    bio="Join competitions and solve problems"
                />

                <PageRedirect
                    title="CSES"
                    link="https://cses.fi/"
                    image="/pages/cses.png"
                    bio="Solve problems and submit your solutions"
                />

                <PageRedirect
                    title="AtCoder"
                    link="https://atcoder.jp/"
                    image="/pages/atcoder.png"
                    bio="Competitions similar to Codeforces"
                />

                <PageRedirect
                    title="CodeChef"
                    link="https://www.codechef.com/"
                    image="/pages/codechef.png"
                    bio="Learn how to code and practice algorithms"
                />

                <PageRedirect
                    title="USACO Train"
                    link="https://usaco.training/"
                    image="/pages/usacotraining.png"
                    bio="Train to compete for USACO"
                />

                <PageRedirect
                    title="SPOJ"
                    link="https://www.spoj.com/"
                    image="/pages/spoj.png"
                    bio="Test and submit solutions"
                />
            </div>

            <div class="space-y-5 w-full">
                <Header title="Contests" />

                <PageRedirect
                    title="USACO"
                    link="https://usaco.org/index.php?page=contests"
                    image="/pages/usaco.png"
                    bio="USA Computing Olympiad"
                />

                <PageRedirect
                    title="PClassic"
                    link="https://www.pclassic.org/"
                    image="/pages/pclassic.png"
                    bio="Philadelphia Classic"
                />

                <PageRedirect
                    title="LIT"
                    link="https://lit.lhsmathcs.org/"
                    image="/pages/lit.png"
                    bio="Lexington Informations Tournament"
                />

                <PageRedirect
                    title="mBIT"
                    link="https://mbit.mbhs.edu/"
                    image="/pages/mbit.png"
                    bio="Montgomery Blair Informatics Tournament"
                />

                <PageRedirect
                    title="TeamsCode"
                    link="https://www.teamscode.org/"
                    image="/pages/teamscode.png"
                    bio="TeamsCode Team Programming Contests"
                />
            </div>
        </Layout>
    )
}