<template>
  <div class="task-gradient-border">
    <div class="task-wrapper">
      <input type="checkbox" :checked="props.done" :onclick="() => checkTask(props.taskId)" />
      <div class="name-and-close-group">
        <p>{{ props.taskName }}</p>
        <CircleX :onclick="() => deleteTask(props.taskId)" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CircleX } from 'lucide-vue-next';
import { checkTask, deleteTask } from '../lib/utils.ts'

let props = defineProps({
  taskName: String,
  taskId: Number,
  done: Boolean,
});
</script>


<style>
.task-gradient-border {
  background: linear-gradient(45deg, #a020f0 25%, #0077b6);
  min-width: 90%;
  padding: 3px;
  border-radius: 18px;
}

.task-wrapper {
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background-color: white;
}

.name-and-close-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
</style>
