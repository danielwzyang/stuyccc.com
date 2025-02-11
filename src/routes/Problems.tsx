import Layout from "../components/Layout"
import { PageRedirect } from "../components/PageRedirect"

export default function Problems() {
    return (
        <Layout title="Problems" class="space-y-5">
            <PageRedirect
                title="Codeforces"
                link="https://codeforces.com/group/O7gdNvlx4L/blog"
                image="/pages/codeforcesgroup.png"
                bio="Join our group for practice problems!"
            />

            <PageRedirect
                title="StuyCCC Problem Archive"
                link="https://www.stuyccc.com/interim/pages/main/problems_archive.html"
                image="/pages/problemarchive.png"
                bio="View archived problems on our old site!"
            />
        </Layout>
    )
}