<script>
    import TodoCompoent from "./TodoCompoent.svelte";

    export let todoList = []
</script>

{#each todoList as todo,pos}
    <TodoCompoent {todo} {pos}/>
{/each}