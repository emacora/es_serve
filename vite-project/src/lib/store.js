import{writable} from "svelte/store"

export const todos = writable([
    {
        title: "cosa da fare",
        done: false
    },
    {
        title: "cosa da fare 2",
        done: false
    }
])