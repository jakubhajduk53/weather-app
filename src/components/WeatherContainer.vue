<script setup lang="ts">
import { useWeatherStore } from "../store/store";
const weatherStore = useWeatherStore();
import { ElTree } from "element-plus";
</script>

<template>
  <div class="flex flex-col text-center items-center">
    <div>
      {{
        `${weatherStore.getBasicData.name}, ${weatherStore.getBasicData.tag}`
      }}
    </div>
    <img
      :src="`https://openweathermap.org/img/wn/${weatherStore.getBasicData.icon}@2x.png`"
    />
    <div>{{ weatherStore.getBasicData.current }}°C</div>
    <div>{{ weatherStore.getBasicData.weatherType }}</div>
    <div>Humidity: {{ weatherStore.getBasicData.humidity }}%</div>
    <div>{{ weatherStore.getBasicData.currentTime }}</div>
    <el-tree :data="weatherStore.getExtraData" accordion="" />
  </div>
</template>

<style scoped></style>
