<script setup lang="ts">
import { ElInput, ElButton } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import { useWeatherStore } from "../store/store";
import { ref } from "vue";

const inputCityName = ref<string>();
const weatherStore = useWeatherStore();
</script>

<template>
  <div class="flex gap-2 mt-2 mb-2 w-[300px]">
    <el-input
      v-model="inputCityName"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    <el-button @click="weatherStore.getWeatherData(inputCityName as string)"
      >Search</el-button
    >
  </div>
</template>

<style scoped></style>
