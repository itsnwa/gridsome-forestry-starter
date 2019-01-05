<template>
  <Layout>
    <div class="project">

      <div class="journal-container">
        <h1 class="project-title" v-html="$page.post.title" />
        <div class="project-info">
          <div class="categories">
            <span 
              class="category"
              v-for="(category, index) in $page.post.categories" 
              :key="index"
              v-text="category"
            />
          </div>
          <div v-html="$page.post.date"/>
        </div>

        <div v-html="$page.post.content" class="content" />

      </div>

    </div>
  </Layout>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    date (format: "YYYY")
    content
    categories
    projectBgColor
    projectFgColor
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        style: `background-color: ${this.$page.post.projectBgColor ? this.$page.post.projectBgColor : 'var(--color-base-1)'}; color: ${this.$page.post.projectFgColor ? this.$page.post.projectFgColor : 'var(--color-contrast)'}`
      }
    }
  }
}
</script>

<style scoped>
.project-title {
  font-size: 4rem;
  margin: 0;
  padding: 0;
}
.journal-container {
  width: 600px;
  margin: 0 auto;
  padding: 6rem 2rem 6rem 2rem;
}
</style>
