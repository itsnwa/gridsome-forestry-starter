<template>
  <Layout>
    <h1>Projects</h1>
    <div v-for="item in $page.posts.edges" :key="item.node.id">
      <h1>{{ item.node.title }}</h1>
      <p>{{ item.node.date }}</p>
      <p>{{ item.node.excerpt }}</p>
    </div> 
  </Layout>
</template>

<page-query>
query Posts {
	posts: allProjectPost {
    edges {
      node {
        id
        date (format: "D. MMMM YYYY")
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>
