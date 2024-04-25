<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

      <Spinner v-if="loading" />

      <template v-else>
        <TodoForm />

        <TodoItens />

        <TodoEmpty />
      </template>
    </div>
  </div>
</template>

<script>
import Spinner from './components/TodoSpinner.vue'
import TodoForm from './components/TodoForm.vue'
import TodoItens from './components/TodoItens.vue'
import TodoEmpty from './components/TodoEmpty.vue'

export default {
  name: 'App',
  components: { Spinner, TodoForm, TodoItens, TodoEmpty },

  data() {
    return {
      loading: false
    }
  },

  created() {
    this.loading = true
    this.$store.dispatch('getTodos').finally(() => {
      this.loading = false
    })
  },
}
</script>

<style></style>
