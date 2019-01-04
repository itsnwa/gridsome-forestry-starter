<template>
    <header class="header">
        <div class="left">
            <g-link :to="{ name: 'home' }">
                <img :src="settings.logo" :alt="settings.site_name" class="logo" />
            </g-link>
        </div>
        <nav class="nav right">
            <g-link class="nav__link" :to="{ name: 'journal' }">Journal</g-link>
            <g-link class="nav__link" :to="{ name: 'about' }">Say Hi!</g-link>
        </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
}
.logo {
    height: 2rem;
}
.nav > * {
    text-decoration: none;
    margin-top: 4px;
    margin-right: 1rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
}
.nav > *:last-of-type {
    margin: 0;
}
.nav > *:hover {
    border-color: black;
}
.nav > .active {
    border-color: black;
}
</style>
