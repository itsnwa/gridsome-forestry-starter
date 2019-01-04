<template>
    <div class="journal">
        <g-link to="/journal">
          Back
        </g-link>
        <h1 v-html="$page.post.title"/>
        <div v-html="$page.post.date"/>
        <p>{{ $page.post.timeToRead }} min read</p>
        <div v-html="$page.post.content"/>
    </div>
</template>

<page-query>
query JournalPost ($path: String!) {
  post: journalPost (path: $path) {
    title
    author
    date (format: "D. MMMM YYYY")
    timeToRead
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
