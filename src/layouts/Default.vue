<template>
  <div class="layout">
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
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  --color-base: #fff;
  --color-base-1: #f3f3f3;
  --color-contrast: #000;
  --color-contrast-1: #2b2b2b;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:6rem 0 0 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
}

body.dark {
  --color-base: #000;
  --color-base-1: #2b2b2b;
  --color-contrast: #fff;
  --color-contrast-1: #f3f3f3;
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
</style>
