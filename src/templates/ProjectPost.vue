<template>
    <div class="project">
        <h1 v-html="$page.post.title"/>
        <div v-html="$page.post.date"/>
        <div v-html="$page.post.content"/>
    </div>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style>

</style>
