<template>
    <div class="space-y-2">
        <TodoItem />
        <TodoItem />
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue'
    
    export default {
        components: {
            TodoItem
        }
    }
</script>