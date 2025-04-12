<script setup lang="ts">
import { ElInput, ElButton } from "element-plus";
import { Search, Back } from "@element-plus/icons-vue";
import { useWeatherStore } from "../store/store";
import { ref } from "vue";

const inputCityName = ref<string>("");
const weatherStore = useWeatherStore();

const submit = () => {
  weatherStore.getWeatherData(inputCityName.value);
};

const goBack = () => {
  inputCityName.value = "";
  weatherStore.clear();
};
</script>

<template>
  <div class="flex gap-2 mt-2 mb-2 w-[600px] max-w-[80vw]">
    <el-input
      v-model="inputCityName"
      placeholder="Please Input"
      :prefix-icon="Search"
      @keypress.enter="submit"
      clearable
      class="shadow-xs"
      :disabled="weatherStore.isCitySelected"
    >
      <template #append v-if="weatherStore.weatherData"
        ><el-button color="hsl(195,83%,45%)" :icon="Back" @click="goBack" />
      </template>
    </el-input>
    <el-button
      v-if="!weatherStore.isCitySelected"
      color="hsl(195,83%,45%)"
      @click="submit"
      class="shadow-xs"
      >Search</el-button
    >
  </div>
</template>

<style scoped>
.el-input ::v-deep(.el-input-group__append) {
  background-color: white;
}
</style>
