import { Meta, MetaProvider, Title } from "@solidjs/meta"
import { JSX } from "solid-js"
import Navbar from "./Navbar"

interface Props {
    title: string,
    description?: string,
    children: JSX.Element
}

export default function Layout(props: Props) {
    return (
        <MetaProvider>
            <Title>{props.title}</Title>
            {props.description ? <Meta property="description" content={props.description} /> : <></>}
            <Navbar />
            <div class="flex justify-center my-5 md:my-10">
                {props.children}
            </div>
        </MetaProvider>
    )
}