<template>
  <n-layout-sider class="bg-gray-800 text-white w-64 h-screen fixed top-16 left-0">
    <n-menu :options="menuOptions" />
  </n-layout-sider>
</template>

<script setup>
import { ref } from 'vue';
import { NLayoutSider, NMenu } from 'naive-ui';

const menuOptions = ref([
  { label: 'Dashboard', key: 'dashboard' },
  { label: 'Profile', key: 'profile' },
  { label: 'Settings', key: 'settings' },
  { label: 'Logout', key: 'logout' },
]);
</script>

<style scoped></style>
