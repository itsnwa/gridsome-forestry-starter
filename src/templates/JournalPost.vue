<template>
    <div class="journal">
        <h1 v-html="$page.post.title"/>
        <div v-html="$page.post.date"/>
        <div v-html="$page.post.content"/>
    </div>
</template>

<page-query>
query JournalPost ($path: String!) {
  post: journalPost (path: $path) {
    title
    author
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
