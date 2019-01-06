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
pre {
    padding: 0.5rem 1rem;
    background: var(--color-base-1);
    color: var(--color-contrast);
}
code {
    background: var(--color-base-1);
    color: var(--color-contrast);
}
</style>
