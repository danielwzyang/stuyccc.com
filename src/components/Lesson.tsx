import { Show } from "solid-js"
import Checkbox from "./Checkbox"
import HoverTooltip from "./HoverTooltip"

interface Props {
    name: string
    date: string
    difficulty: "Beginner" | "Advanced"
    link: string
    toggle: (date: string) => void
    completed: boolean
}

export default function Lesson(props: Props) {
    return <div class="bg-[#1C1C1C] border border-[#434343] rounded-2xl p-4 flex items-center">
        <div class="flex flex-col space-y-2 max-w-[80%]">
            <HoverTooltip text="Visit Lesson" class="w-fit max-w-[100%]">
                <a href={props.link}>
                    <h1 class="text-xl font-bold ml-1 truncate">
                        {props.name}
                    </h1>
                </a>
            </HoverTooltip>
            <div class="flex space-x-5">
                <h1 class="font-bold text-xl text-[#bfbfbf] ml-1">
                    {props.date}
                </h1>

                <Show when={props.difficulty == "Beginner"} fallback={
                    <h1 class="font-bold text-xl text-[#FF5555]">Advanced</h1>
                }>
                    <h1 class="font-bold text-xl text-[#22AA77]">Beginner</h1>
                </Show>

                <Show when={isArchive(props.date)}>
                    <h1 class="font-bold text-xl text-[#EECC66]">Archive</h1>
                </Show>
            </div>
        </div>
        <Checkbox
            onClick={() => {
                props.toggle(props.date)
            }}
            initial={props.completed}
            class="ml-auto mr-2"
        />
    </div>
}

export function isArchive(date: string) {
    const newDate = new Date(date)
    const currentYear = new Date().getFullYear()
    const schoolYearStart = new Date().getMonth() >= 8 ? currentYear : currentYear - 1

    return newDate.getFullYear() < schoolYearStart || (newDate.getFullYear() === schoolYearStart && newDate.getMonth() < 8)
}
