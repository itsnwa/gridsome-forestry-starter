<template>
    <div class="project">
        <g-link to="/">
          Back
        </g-link>
        <h1 v-html="$page.post.title"/>
        <div v-html="$page.post.date"/>
        <p>{{ $page.post.categories }}</p>
        <hr>
        <div v-html="$page.post.content"/>
    </div>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    date (format: "YYYY")
    content
    categories
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
