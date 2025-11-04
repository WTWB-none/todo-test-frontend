<template>
  <div class="tasks-wrapper">
    <Task v-for="item in items" :task-name="item.taskName" :task-id="item.taskId" :done="item.done" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getTasks, type Task as Tasks } from '@/lib/utils';
import Task from './Task.vue';
let items = ref<Tasks[]>([]);
onMounted(async () => {
  let val = await getTasks();
  items.value = val;
})
</script>
<style scoped>
.tasks-wrapper {
  min-width: 100%;
  max-height: 82vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
}
</style>
