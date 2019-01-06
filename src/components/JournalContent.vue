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
pre, code {
    font-family: Space Mono,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
    font-size: 0.8rem;
    border-radius: 2px;
}
pre {
    padding: 0.8rem 1rem;
    background-color: var(--color-base-1);
    color: var(--color-contrast);
}
code {
    padding: 0.15em 0.5em;
    background-color: var(--color-base-1);
    color: var(--color-contrast);
}
</style>
