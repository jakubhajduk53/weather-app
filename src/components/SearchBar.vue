<script setup lang="ts">
import { ElInput, ElButton } from "element-plus";
import { Search, Back } from "@element-plus/icons-vue";
import { useWeatherStore } from "../store/store";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const inputCityName = ref<string>("");
const weatherStore = useWeatherStore();
const { cityName, isCitySelected } = storeToRefs(weatherStore);

const submit = () => {
  weatherStore.getWeatherData(inputCityName.value);
};

const goBack = () => {
  inputCityName.value = "";
  weatherStore.clear();
};
</script>

<template>
  <div class="flex my-3 md:my-5 w-[35em] max-w-[90vw] h-10">
    <div v-if="!isCitySelected" class="flex w-full gap-3 md:gap-5">
      <el-input
        v-model="inputCityName"
        placeholder="Input city name"
        :prefix-icon="Search"
        @keypress.enter="submit"
        clearable
        class="shadow-[0px_0px_5px_hsl(195,83%,15%)]"
      />
      <el-button
        color="hsl(195,50%,38%)"
        @click="submit"
        class="shadow-[0px_0px_5px_hsl(195,83%,15%)]"
        >Search</el-button
      >
    </div>
    <el-input
      v-else
      v-model="cityName"
      placeholder="Input city name"
      :prefix-icon="Search"
      class="shadow-[0px_0px_5px_hsl(195,83%,15%)]"
      disabled
    >
      <template #append
        ><el-button color="hsl(195,50%,38%)" :icon="Back" @click="goBack" />
      </template>
    </el-input>
  </div>
</template>

<style scoped>
.el-input ::v-deep(.el-input-group__append) {
  background-color: hsl(195, 50%, 26%);
  border-color: hsl(195, 50%, 26%);
  color: hsl(42, 10%, 95%);
}
::v-deep(.el-input-group__append:hover) {
  background-color: hsl(195, 50%, 22%);
  border-color: hsl(195, 50%, 22%);
  color: hsl(42, 10%, 95%);
}
::v-deep(.el-button) {
  height: 40px;
  color: hsl(42, 10%, 95%);
  border-color: hsla(195, 50%, 22%, 0.5);
  background-color: hsl(195, 50%, 26%);
}
::v-deep(.el-button:hover) {
  background-color: hsl(195, 50%, 22%);
  border-color: hsl(195, 50%, 22%);
  color: hsl(42, 10%, 95%);
}
.el-input ::v-deep(.el-input__wrapper) {
  background-color: hsl(42, 30%, 98%);
  --el-input-focus-border-color: hsl(195, 50%, 28%);
  --el-input-icon-color: hsl(195, 50%, 28%);
  --el-input-placeholder-color: hsl(195, 50%, 28%);
}
::v-deep(.el-input__inner) {
  color: hsl(195, 83%, 15%);
}
.el-input.is-disabled ::v-deep(.el-input__inner) {
  -webkit-text-fill-color: hsl(195, 50%, 38%);
}
::v-deep(.el-icon) {
  font-size: 20px;
}
@media (max-width: 768px) {
  ::v-deep(.el-icon) {
    font-size: 16px;
  }
}
</style>
