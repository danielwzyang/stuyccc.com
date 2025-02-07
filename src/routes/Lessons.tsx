import Layout from "../components/Layout"
import Lesson, { isArchive } from "../components/Lesson"
import json from "../../content/lessons.json"
import { createSignal, For, onMount, Show } from "solid-js"
import Checkbox from "../components/Checkbox"
import Dropdown from "../components/Dropdown"
import { reverse } from "dns"

export default function Lessons() {
    const sorted = json.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    console.log(sorted)

    const [lessons, setLessons] = createSignal(sorted)
    const [view, setView] = createSignal(0)
    const [viewSize, setViewSize] = createSignal(5)
    const [completed, setCompleted] = createSignal<string[]>(JSON.parse(localStorage.getItem("completedLessons")!) || [])
    const [viewYears, setViewYears] = createSignal<string[]>([new Date().getFullYear().toString().substring(2)])
    const [hideCompleted, setHideCompleted] = createSignal(false)
    const [viewBeginner, setViewBeginner] = createSignal(true)
    const [viewAdvanced, setViewAdvanced] = createSignal(true)

    onMount(() => { updateLessons() })

    function toggleLesson(date: string) {
        setCompleted((old) => {
            const updated = old.includes(date) ? old.filter((e) => e != date) : [...old, date]
            localStorage.setItem("completedLessons", JSON.stringify(updated))
            return updated
        })
    }

    function toggleYear(year: string) {
        setViewYears((old) => old.includes(year) ? old.filter((e) => e != year) : [...old, year])
    }


    function updateLessons() {
        setLessons(
            sorted.filter((lesson) => {
                const matchesYearFilter = viewYears().includes(lesson.date.substring(6))
                const matchesCompleteFilter = !hideCompleted() || !completed().includes(lesson.date)
                const matchesBeginnerFilter = viewBeginner() || lesson.difficulty !== "Beginner"
                const matchesAdvancedFilter = viewAdvanced() || lesson.difficulty !== "Advanced"

                return (
                    matchesYearFilter &&
                    matchesCompleteFilter &&
                    matchesBeginnerFilter &&
                    matchesAdvancedFilter
                )
            })
        )

        setView(Math.min(view(), Math.floor(lessons().length / viewSize()) * viewSize()))
    }

    return (
        <Layout title="Lessons">
            <div class="w-full flex flex-col space-y-4">
                <div class="mb-5 flex flex-col md:flex-row gap-x-5 gap-y-2 items-center justify-center">
                    <Dropdown title="Difficulty">
                        <div class="flex gap-4 items-center">
                            <h1 class="font-bold text-lg text-[#22AA77]">Beginner</h1>
                            <Checkbox
                                class="ml-auto scale-75"
                                initial={viewBeginner()}
                                onClick={() => {
                                    setViewBeginner(!viewBeginner())
                                    updateLessons()
                                }}
                            />
                        </div>
                        <div class="flex gap-4 items-center">
                            <h1 class="font-bold text-lg text-[#FF5555]">Advanced</h1>
                            <Checkbox
                                class="scale-75"
                                initial={viewAdvanced()}
                                onClick={() => {
                                    setViewAdvanced(!viewAdvanced())
                                    updateLessons()
                                }}
                            />
                        </div>
                    </Dropdown>

                    <Dropdown title="Years">
                        <For each={Array(new Date().getFullYear() - 2020).fill(null).map((_, i) => String(i + 21)).reverse()}>
                            {
                                year => (
                                    <div class="flex gap-2 items-center">
                                        <h1 class="font-bold text-lg">20{year}</h1>
                                        <Checkbox
                                            class="ml-auto scale-75"
                                            initial={viewYears().includes(year)}
                                            onClick={() => {
                                                toggleYear(year)
                                                updateLessons()
                                            }}
                                        />
                                    </div>
                                )
                            }
                        </For>
                    </Dropdown>

                    <div class="flex gap-2 items-center">
                        <h1 class="font-bold text-xl">Hide completed</h1>
                        <Checkbox
                            initial={hideCompleted()}
                            onClick={() => {
                                setHideCompleted(!hideCompleted())
                                updateLessons()
                            }}
                            class="scale-75"
                        />
                    </div>
                </div>

                <Show
                    when={lessons().length != 0}
                    fallback={
                        <h1 class="text-center font-bold text-xl text-[#bfbfbf]">No lessons found.</h1>
                    }
                >
                    <For each={lessons().slice(view(), Math.min(view() + viewSize(), lessons().length))}
                    >
                        {(lesson) => (
                            <Lesson
                                name={lesson.name}
                                date={lesson.date}
                                difficulty={lesson.difficulty as "Beginner" | "Advanced"}
                                link={lesson.link}
                                toggle={toggleLesson}
                                completed={completed().includes(lesson.date)}
                            />
                        )}
                    </For>

                    <div class="flex ml-2">
                        <div class="flex space-x-2 font-bold text-xl text-[#a0a0a0]">
                            <h1>n</h1>
                            <h1>=</h1>
                            <For each={[5, 10, 15]}>
                                {
                                    size => (
                                        <button
                                            onclick={() => {
                                                setViewSize(size)
                                                setView(Math.floor(view() / viewSize()) * viewSize())
                                            }}
                                            disabled={size == viewSize()}
                                            class={size != viewSize() ? "text-[#a0a0a0] cursor-pointer" : "text-white"}
                                        >
                                            {size}{size != 15 ? "," : ""}
                                        </button>
                                    )
                                }
                            </For>
                        </div>

                        <div class="ml-auto flex space-x-5">
                            <button aria-label="page left" onclick={() => setView(view() - viewSize())} disabled={view() == 0}>
                                <svg width="24px" height="24px" stroke={view() == 0 ? `#bfbfbf` : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-180">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                            <h1 class="font-bold text-xl">{view() + 1}-{Math.min(view() + viewSize(), lessons().length)} of {lessons().length}</h1>
                            <button aria-label="page right" onclick={() => setView(view() + viewSize())} disabled={lessons().length - view() <= viewSize()}>
                                <svg width="24px" height="24px" stroke={lessons().length - view() <= viewSize() ? `#bfbfbf` : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Show>
            </div>
        </Layout>
    )
}
