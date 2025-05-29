<script setup lang="ts">
import { ElTree } from "element-plus";
import { storeToRefs } from "pinia";
import { useWeatherStore } from "../store";

const store = useWeatherStore();
const { weatherData, getBasicData, getExtraData } = storeToRefs(store);
</script>

<template>
  <div
    class="flex flex-col text-center items-center justify-center max-h-full w-[35em] max-w-[90vw] gap-3 md:gap-5 p-3 md:p-5 rounded-xl z-10 inset-shadow-[0px_3px_3px_hsla(0,0%,10%,0.2)] shadow-[0px_3px_3px_hsla(0,0%,90%,0.2)]"
    v-if="weatherData"
  >
    <div
      class="flex flex-col items-center gap-3 md:gap-5 p-3 md:p-5 w-[35em] max-w-[90%]"
    >
      <div class="text-3xl md:text-5xl font-bold break-all">
        {{ getBasicData.fullCountryName }}
      </div>
      <div
        class="flex items-center justify-center p-3 md:p-5 rounded-xl bg-radial from-[hsl(195,50%,60%)] to-[hsl(195,50%,65%)] inset-shadow-[0px_3px_3px_hsla(0,0%,0%,0.10)] shadow-[0px_3px_3px_hsla(0,0%,0%,0.10)]"
      >
        <img
          :src="getBasicData.icon"
          class="w-[75px] h-[75px] md:w-[100px] md:h-[100px]"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-xl md:text-3xl">
          {{ getBasicData.weatherType }}
        </span>
        <span class="text-3xl md:text-5xl font-semibold">
          {{ getBasicData.current }}°C
        </span>
      </div>
      <div class="flex flex-col">
        <span class="text-base md:text-xl">Humidity</span>
        <span class="text-xl md:text-3xl font-semibold"
          >{{ getBasicData.humidity }}%</span
        >
      </div>
      <el-tree
        :data="getExtraData"
        accordion
        class="p-1 md:p-3 w-full inset-shadow-[0px_3px_3px_hsla(0,0%,0%,0.1)] shadow-[0px_3px_3px_hsla(0,0%,0%,0.1)]"
      />
    </div>
  </div>
</template>

<style scoped>
.el-tree {
  --el-tree-text-color: black;
  --el-tree-expand-icon-color: black;
}
::v-deep(.el-tree) {
  background-color: hsl(195, 50%, 55%);
  border-radius: 12px;
  color: hsl(195, 83%, 15%);
  --el-tree-node-hover-bg-color: hsl(195, 50%, 55%);
  font-size: 18px;
  font-weight: 600;
}
@media (max-width: 768px) {
  ::v-deep(.el-tree) {
    font-size: 14px;
  }

  .el-tree ::v-deep(.el-tree-node__children) {
    font-size: 12px;
  }
}
::v-deep(.el-tree-node__content) {
  border-radius: 12px;
}
::v-deep(.el-tree-node__expand-icon) {
  color: hsl(195, 83%, 15%);
}
::v-deep(.el-tree-node__children) {
  font-size: 16px;
  font-weight: 500;
}
</style>
