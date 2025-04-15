<script setup lang="ts">
import { useWeatherStore } from "../store/store";
const weatherStore = useWeatherStore();
import { ElTree } from "element-plus";
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
    class="flex flex-col text-center items-center justify-center max-h-full w-[35em] max-w-[90vw] gap-3 md:gap-5 p-3 md:p-5 rounded-sm bg-radial from-[hsl(195,50%,75%)] to-[hsl(195,50%,55%)] inset-shadow-[0px_5px_5px_hsl(0,0%,0%,0.15)] shadow-[0px_5px_0px_hsl(0,0%,100%,0.05)]"
    v-if="weatherStore.weatherData"
  >
    <div class="text-3xl md:text-5xl font-bold break-all">
      {{ fullCountryName }}
    </div>
    <div
      class="flex flex-col items-center gap-3 md:gap-5 p-3 md:p-5 rounded-sm w-[20em] max-w-[80%] inset-shadow-[0px_3px_3px_hsl(0,0%,0%,0.3)] shadow-[0px_3px_0px_hsl(0,0%,100%,0.15)] bg-radial from-[hsl(195,50%,75%)] to-[hsl(195,50%,65%)]"
    >
      <div
        class="rounded-sm inset-shadow-[0px_5px_5px_hsla(0,0%,0%,0.15)] shadow-[0px_5px_0px_hsla(0,0%,100%,0.15)]"
      >
        <img
          :src="weatherIcon"
          class="w-[75px] h-[75px] md:w-[100px] md:h-[100px]"
        />
      </div>

      <div class="text-3xl md:text-5xl font-semibold">
        {{ weatherStore.getBasicData.current }}°C
      </div>
      <div class="text-xl md:text-3xl">
        {{ weatherStore.getBasicData.weatherType }}
      </div>
    </div>
    <div
      class="flex flex-col p-3 rounded-sm inset-shadow-[0px_5px_5px_hsla(0,0%,0%,0.15)] shadow-[0px_5px_0px_hsla(0,0%,100%,0.15)]"
    >
      <span>Humidity</span>
      <span class="text-xl md:text-3xl font-semibold"
        >{{ weatherStore.getBasicData.humidity }}%</span
      >
    </div>
    <el-tree
      :data="weatherStore.getExtraData"
      accordion
      class="w-full shadow-md"
    />
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
::v-deep(.el-tree) {
  background-color: hsl(195, 50%, 38%);
  border-radius: 4px;
  color: hsl(42, 10%, 90%);
  --el-tree-node-hover-bg-color: hhsl(195, 50%, 38%);
}
::v-deep(.el-tree-node__content) {
  border-radius: 4px;
}
::v-deep(.el-tree-node__expand-icon) {
  color: hsl(42, 10%, 90%);
}
</style>
