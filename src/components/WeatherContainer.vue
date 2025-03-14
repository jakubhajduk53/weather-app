<script setup lang="ts">
import { useWeatherStore } from "../store/store";
const weatherStore = useWeatherStore();
import { ElTree, ElProgress } from "element-plus";
import { computed } from "vue";

const weatherIcon = computed(() => {
  return `https://openweathermap.org/img/wn/${weatherStore.getBasicData.icon}@2x.png`;
});

const fullCountryName = computed(() => {
  return `${weatherStore.getBasicData.name?.toUpperCase()}, ${
    weatherStore.getBasicData.tag
  }`;
});
</script>

<template>
  <div
    class="flex flex-col text-center items-center justify-center w-[300px] gap-1 p-3 rounded-[5%] outline-1 outline-gray-100 shadow-lg"
    v-if="weatherStore.weatherData"
  >
    <div class="text-2xl break-all">
      {{ fullCountryName }}
    </div>
    <div
      class="flex flex-col items-center outline-1 outline-gray-100 shadow p-2 rounded-[5%] w-[90%]"
    >
      <img :src="weatherIcon" class="w-[75px] h-[75px]" />
      <div class="text-4xl">{{ weatherStore.getBasicData.current }}°C</div>
    </div>
    <div class="text-2xl">
      {{ weatherStore.getBasicData.weatherType }}
    </div>
    <el-progress type="circle" :percentage="weatherStore.getBasicData.humidity">
      <div class="flex flex-col">
        <span>Humidity</span>
        <span>{{ weatherStore.getBasicData.humidity }}%</span>
      </div>
    </el-progress>
    <el-tree :data="weatherStore.getExtraData" accordion class="w-full" />
  </div>
  <div v-else-if="weatherStore.errorStatus">
    {{ weatherStore.errorStatus + ". Please try again with different input." }}
  </div>
</template>

<style scoped>
.el-tree {
  --el-tree-text-color: black;
  --el-tree-expand-icon-color: black;
}
</style>
