<template>
    <div class="container">
        <div 
            class="journal-content"
            v-html="content"
        />
    </div>
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style>
p {
    line-height: 1.5;
}
</style>
