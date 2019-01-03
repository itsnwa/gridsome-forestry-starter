<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link :to="{ name: 'home' }">itsnwa.com</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'journal' }">Journal</g-link>
        <g-link class="nav__link" :to="{ name: 'about' }">Say Hi!</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
}
</style>
