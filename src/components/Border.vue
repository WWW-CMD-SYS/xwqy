<script setup>

</script>

<template>
  <div class="border">
    <div class="border-inner"></div>
  </div>
</template>

<style scoped>
.border {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid rgba(182, 177, 177, 0.18);
  z-index: -1;
}
.border-inner {
  width: 100%;
  height: 36px;
  background:linear-gradient(to right, #2b76DB, #599ff6);
}
</style>