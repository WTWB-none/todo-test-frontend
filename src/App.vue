<script setup lang="ts">
import TaskList from './components/TaskList.vue';
import AddTaskButton from './components/AddTaskButton.vue';
import Header from './components/Header.vue';

</script>
<template>
  <div class="main-wrapper">
    <Header />
    <TaskList />
    <AddTaskButton />
  </div>
</template>

<style scoped>
.main-wrapper {
  max-height: 100vh;
  overflow: hidden;
}
</style>
