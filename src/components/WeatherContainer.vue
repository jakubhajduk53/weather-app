<script setup lang="ts">
import { useWeatherStore } from "../store/store";
const weatherStore = useWeatherStore();
import { ElTree } from "element-plus";
</script>

<template>
  <div
    class="flex flex-col text-center items-center justify-center w-[300px] gap-1 p-3 border rounded-[5%]"
  >
    <div class="text-2xl">
      {{
        `${weatherStore.getBasicData.name?.toUpperCase()}, ${
          weatherStore.getBasicData.tag
        }`
      }}
    </div>
    <div class="flex flex-col items-center border p-2 rounded-[5%] w-[90%]">
      <img
        :src="`https://openweathermap.org/img/wn/${weatherStore.getBasicData.icon}@2x.png`"
        class="w-[75px] h-[75px]"
      />
      <div class="text-4xl">{{ weatherStore.getBasicData.current }}°C</div>
    </div>
    <div>Weather: {{ weatherStore.getBasicData.weatherType }}</div>
    <div>Humidity: {{ weatherStore.getBasicData.humidity }}%</div>
    <el-tree :data="weatherStore.getExtraData" accordion class="w-full" />
  </div>
</template>

<style scoped></style>
