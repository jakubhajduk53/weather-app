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
    class="flex flex-col text-center items-center justify-center w-[600px] max-w-[80vw] gap-5 p-5 rounded-sm bg-radial from-[hsl(195,83%,75%)] to-[hsl(195,83%,55%)] inset-shadow-[0px_5px_5px_hsl(0,0%,0%,0.15)] shadow-[0px_5px_0px_hsl(0,0%,100%,0.15)]"
    v-if="weatherStore.weatherData"
  >
    <div class="text-3xl md:text-5xl font-bold break-all">
      {{ fullCountryName }}
    </div>
    <div
      class="flex flex-col items-center gap-5 inset-shadow-[0px_3px_3px_hsl(0,0%,0%,0.3)] shadow-[0px_3px_0px_hsl(0,0%,100%,0.15)] p-5 rounded-sm w-[20em] max-w-[80%] bg-radial from-[hsl(195,83%,75%)] to-[hsl(195,83%,65%)]"
    >
      <div
        class="inset-shadow-[0px_5px_5px_hsl(0,0%,0%,0.15)] shadow-[0px_5px_0px_hsl(0,0%,100%,0.15)] rounded-sm"
      >
        <img :src="weatherIcon" class="w-[100px] h-[100px]" />
      </div>

      <div class="text-3xl md:text-5xl font-semibold">
        {{ weatherStore.getBasicData.current }}°C
      </div>
      <div class="text-xl md:text-3xl">
        {{ weatherStore.getBasicData.weatherType }}
      </div>
    </div>
    <el-progress
      type="circle"
      :percentage="weatherStore.getBasicData.humidity"
      class="inset-shadow-[0px_5px_5px_hsl(0,0%,0%,0.15)] shadow-[0px_5px_0px_hsl(0,0%,100%,0.15)] rounded-full p-3"
    >
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
.el-progress ::v-deep(.el-progress-circle__path) {
  stroke: hsl(195, 83%, 35%);
}
::v-deep(.el-progress__text) {
  color: hsl(195, 83%, 15%);
}
::v-deep(.el-progress-circle__track) {
  stroke: hsl(195, 83%, 90%);
}
</style>
