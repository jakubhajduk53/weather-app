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
  <div class="flex gap-3 md:gap-5 my-3 md:my-5 w-[35em] max-w-[90vw] h-10">
    <el-input
      v-model="inputCityName"
      placeholder="Input city name"
      :prefix-icon="Search"
      @keypress.enter="submit"
      clearable
      class="shadow-[0px_0px_10px_hsl(195,83%,15%)]"
      :disabled="weatherStore.isCitySelected"
    >
      <template #append v-if="weatherStore.weatherData"
        ><el-button
          color="hsl(195,50%,38%)"
          class="shadow-md"
          :icon="Back"
          @click="goBack"
        />
      </template>
    </el-input>
    <el-button
      v-if="!weatherStore.isCitySelected"
      color="hsl(195,50%,38%)"
      @click="submit"
      class="shadow-[0px_0px_5px_hsl(195,83%,15%)]"
      >Search</el-button
    >
  </div>
</template>

<style scoped>
.el-input ::v-deep(.el-input-group__append) {
  background-color: hsl(195, 50%, 38%);
  border-color: hsl(195, 50%, 38%);
  color: hsl(42, 10%, 90%);
}
::v-deep(.el-input-group__append:hover) {
  background-color: hsl(195, 50%, 28%);
  border-color: hsl(195, 50%, 28%);
  color: hsl(42, 10%, 90%);
}
::v-deep(.el-button) {
  height: 40px;
  color: hsl(42, 10%, 90%);
  border-color: hsla(195, 50%, 28%, 0.5);
}
::v-deep(.el-button:hover) {
  background-color: hsl(195, 50%, 28%);
  border-color: hsl(195, 50%, 28%);
  color: hsl(42, 10%, 90%);
}
.el-input ::v-deep(.el-input__wrapper) {
  background-color: hsl(42, 30%, 98%);
  --el-input-focus-border-color: hsl(195, 50%, 28%);
  --el-input-icon-color: hsl(195, 50%, 28%);
  --el-input-placeholder-color: hsl(195, 50%, 28%);
}
</style>
