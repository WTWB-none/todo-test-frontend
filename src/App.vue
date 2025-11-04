<script setup lang="ts">
import TaskList from './components/TaskList.vue';
import AddTaskButton from './components/AddTaskButton.vue';
import Header from './components/Header.vue';
import { onMounted } from 'vue';
import { init, viewport, requestFullscreen } from '@telegram-apps/sdk';

</script>
<template>
  <Header />
  <TaskList />
  <AddTaskButton />
</template>

<style scoped></style>
