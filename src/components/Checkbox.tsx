import { createSignal, Show } from "solid-js"

interface Props {
    initial: boolean
    onClick: () => void
    class?: string
}

export default function Checkbox(props: Props) {
    const [isChecked, setIsChecked] = createSignal(props.initial)

    const handleClick = () => {
        setIsChecked(!isChecked())
        props.onClick()
    }

    return (
        <div onClick={handleClick} class={`cursor-pointer ${props.class}`}>
            <div class="w-8 h-8 border-2 border-[#434343] rounded-lg flex items-center justify-center">
                <Show when={isChecked()}>
                    <img
                        src="/icons/check.svg"
                        alt="checkmark"
                        class="h-6 w-6"
                    />
                </Show>
            </div>
        </div>
    )
}
