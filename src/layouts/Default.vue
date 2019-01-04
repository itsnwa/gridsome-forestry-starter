<template>
  <div class="layout" :class="{ dark: settings.dark_mode }">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
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
  padding:6rem 0 0 0;
  font-size: 16px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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
