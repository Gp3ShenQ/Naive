<template>
  <n-layout-header class="bg-white shadow-md fixed w-full top-0 left-0 z-10 flex justify-between items-center h-16">
    <!-- Logo 或標題 -->
    <div class="flex-shrink-0">
      <span class="text-xl font-bold">My Website</span>
    </div>

    <!-- 導航連結 -->
    <div class="hidden md:flex space-x-4">
      <n-button text>Home</n-button>
      <n-button text>About</n-button>
      <n-button text>Contact</n-button>
    </div>

    <!-- 移動端菜單按鈕 -->
    <div class="md:hidden">
      <n-button text @click="toggleMenu">
        <n-icon size="18">
          <template #default>
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </template>
        </n-icon>
      </n-button>
    </div>

    <!-- 移動端菜單 -->
    <n-drawer v-model:show="isMenuOpen" placement="left" size="256">
      <n-drawer-content>
        <div class="flex flex-col space-y-4 p-4">
          <n-button text>Home</n-button>
          <n-button text>About</n-button>
          <n-button text>Contact</n-button>
        </div>
      </n-drawer-content>
    </n-drawer>
  </n-layout-header>
</template>

<script setup>
import { ref } from 'vue';
import { NLayoutHeader, NButton, NIcon, NDrawer, NDrawerContent } from 'naive-ui';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped></style>
