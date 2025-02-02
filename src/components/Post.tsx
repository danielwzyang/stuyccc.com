interface Props {
    title: string,
    content: string
    cover?: string
    date: string
}

export default function Post(props: Props) {
    const date = formatDate(props.date)

    return <div class="bg-[#1c1c1c] border border-[#434343] p-6 rounded-2xl block space-y-5">
        <div>
            <h1 class="text-3xl font-bold">{props.title}</h1>
            <h1 class="text-[#bfbfbf] mt-2">{date}</h1>
        </div>
        { props.cover ? <img src={props.cover} alt={props.cover} class="w-full rounded-xl"/> : <></>}
        <div innerHTML={props.content} class="text-xl text-[#bfbfbf]" />
    </div>
}

function formatDate(dateString: string): string {
    const [month, day, year] = dateString.split("/").map(Number)
    const date = new Date(2000 + year, month - 1, day)

    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}