<template>
    <footer class="footer">
        <p v-html="settings.footer" />
    </footer>
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
.footer {
    font-size: 0.8rem;
    padding: 6rem 2rem;
}
</style>
