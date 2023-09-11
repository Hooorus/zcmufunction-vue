<template>
  <v-footer elevation="4" height="60" class="d-flex flex-column">
    <div class="px-4 py-2 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Yiming Liao</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
}
</script>

<style scoped>

</style>
