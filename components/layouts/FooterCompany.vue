<template>
  <div class="flex py-4 border-y-2 text-black flex-col gap-2 sm:gap-0 bg-blue-500 sm:flex-row items-center sm:justify-around w-full text-sm">
    <label class="text-white font-medium">2022 - Muhammad Ivan Bastomi</label>
  </div>
</template>
<script>
export default {
  name: 'FooterCompany',
  computed: {
    thisYear() {
      return this.$moment().format('YYYY')
    },
    buildVersion() {
      return 'version: ' + this.$config.versionName + '(' + this.$config.versionCode + ')'
    }
  }
}
</script>
