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
            <div class={`flex flex-col items-center mx-auto my-5 md:my-10 w-[90%] max-w-[600px] ${props.class}`}>
                {props.children}
            </div>
        </MetaProvider>
    )
}