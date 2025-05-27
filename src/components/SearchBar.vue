<script setup lang="ts">
import { ElInput, ElButton } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import { useWeatherStore } from "../store";
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";

const inputCityName = ref<string>("");
const weatherStore = useWeatherStore();
const { cityName, isCitySelected } = storeToRefs(weatherStore);

const placeholder = computed(() => {
  return isCitySelected.value ? cityName.value : "Input city name";
});

const submit = () => {
  weatherStore.fetchWeatherData(inputCityName.value);
};

onMounted(() => {
  if (isCitySelected) {
    inputCityName.value = cityName.value as string;
  }
});
</script>

<template>
  <div class="flex flex-col w-full items-center gap-3 md:gap-5 py-3 md:py-5">
    <div class="flex max-w-[90vw] w-[35em] gap-3 md:gap-5">
      <el-input
        v-model="inputCityName"
        :placeholder="placeholder"
        :prefix-icon="Search"
        @keypress.enter="submit"
        clearable
        class="shadow-sm"
      />
      <el-button color="hsl(195,50%,38%)" @click="submit" class="shadow-sm"
        >Search</el-button
      >
    </div>
  </div>
</template>

<style scoped>
.el-alert {
  width: 35em;
  max-width: 90vw;
}
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
