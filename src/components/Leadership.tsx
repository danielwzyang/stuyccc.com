import HoverTooltip from "./HoverTooltip"

interface Props {
    name: string,
    title: string,
    github?: string,
}

export default function Leadership(props: Props) {
    const content = <div class="w-full bg-[#1C1C1C] border border-[#434343] rounded-2xl p-2 sm:p-4 flex">
        <h1 class="font-bold ml-2 sm:text-xl truncate mr-3">{props.name}</h1>
        <h1 class="font-bold ml-auto mr-2 text-[#bfbfbf] sm:text-xl whitespace-nowrap">{props.title}</h1>
    </div>
    return props.github ?
        <HoverTooltip text="Visit Github">
            <a href={props.github} >{content}</a>
        </HoverTooltip>
        : content
}