<script setup lang="ts">
import { ElInput, ElButton } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import { useWeatherStore } from "../store/store";
import { ref } from "vue";

const inputCityName = ref<string>();

const weatherStore = useWeatherStore();

const getWeatherData = async () => {
  weatherStore.setCityName(inputCityName);
  await weatherStore.fetch();
};
</script>

<template>
  <div class="flex gap-2">
    <el-input
      v-model="inputCityName"
      style="width: 240px"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    <el-button @click="getWeatherData">Search</el-button>
  </div>
</template>

<style scoped></style>
