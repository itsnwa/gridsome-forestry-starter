<template>
  <div class="layout" :class="{ dark: settings.dark_mode }">
    <Header />
    <slot/>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  components: {
    Header
  },
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  font-size: 16px;
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.layout {
  background: white;
  color: black;
  overflow: hidden;
}
.layout.dark {
  background: black;
  color: white;
}
</style>
