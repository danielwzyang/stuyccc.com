import { Meta, MetaProvider, Title } from "@solidjs/meta"
import { JSX } from "solid-js"
import Navbar from "./Navbar"

interface Props {
    title: string,
    description?: string,
    children?: JSX.Element,
    class?: string
}

export default function Layout(props: Props) {
    return (
        <MetaProvider>
            <Title>{props.title}</Title>
            {props.description ? <Meta property="description" content={props.description} /> : <></>}
            <Navbar />
            <div class={`flex flex-col items-center my-5 md:my-10 ${props.class}`}>
                {props.children}
            </div>
        </MetaProvider>
    )
}