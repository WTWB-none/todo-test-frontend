<template>
  <div class="add-button-wrapper">
    <div class="add-button">
      <Plus :size="60" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
</script>

<style scoped>
.add-button-wrapper {
  position: sticky;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1em;
  bottom: 1em;
}

.add-button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(45deg, #a020f0 25%, #0077b6);
  border-radius: 25em;
}
</style>
