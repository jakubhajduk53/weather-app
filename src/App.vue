<script setup lang="ts">
import { ElMessage } from "element-plus";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useWeatherStore } from "./store";
import SearchBar from "./components/SearchBar.vue";
import WeatherContainer from "./components/WeatherContainer.vue";
import WeatherIcons from "./components/WeatherIcons.vue";

const store = useWeatherStore();
const { weatherData, loadingStatus, errorStatus } = storeToRefs(store);

watch(errorStatus, (newStatus) => {
  if (newStatus) {
    ElMessage({
      showClose: true,
      message: `${newStatus}. Please try again with different input.`,
      type: "error",
      plain: true,
    });
  }
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full font-montserrat"
  >
    <div
      class="h-4 w-full bg-[hsl(195,83%,15%)] shadow-[0px_0px_5px_hsl(195,83%,15%)]"
    />
    <div
      class="flex flex-col items-center h-full bg-radial from-[hsl(195,50%,65%)] to-[hsl(195,50%,55%)] w-[800px] min-w-[30%] max-w-[100vw] shadow-[0px_0px_15px_hsl(195,83%,15%)]"
    >
      <div
        v-if="!weatherData"
        class="flex flex-col w-full h-full justify-center items-center"
      >
        <div
          class="w-[35em] max-w-[70vw] flex flex-col items-center justify-center text-center gap-3 md:gap-5"
        >
          <p class="text-xl md:text-3xl font-bold">
            Welcome!<br />Ready to explore today's weather?
          </p>
          <WeatherIcons />
          <p class="text-base md:text-xl w-[25em] max-w-[60vw] mb-3 md:mb-5">
            Whether you're chasing the sun or bracing for rain, we've got you
            covered
          </p>
        </div>
        <SearchBar />
      </div>
      <SearchBar v-else />
      <WeatherContainer
        v-loading="loadingStatus"
        element-loading-text="Loading..."
      />
      <div v-if="!weatherData" id="pattern" class="h-[30%] w-full" />
    </div>
    <div
      class="h-4 w-full bg-[hsl(195,83%,15%)] shadow-[0px_0px_5px_hsl(195,83%,15%)]"
    />
  </div>
</template>

<style scoped></style>
