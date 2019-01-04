<template>
  <Layout>
    <h1>Journal</h1>
    <div v-for="item in $page.posts.edges" :key="item.node.id">
      <h1>{{ item.node.title }}</h1>
      <p>{{ item.node.date }}</p>
      <p>{{ item.node.excerpt }}</p>
      <g-link :to="item.node.path">
        Read more
      </g-link>
    </div> 
  </Layout>
</template>

<page-query>
query Journal {
	posts: allJournalPost {
    edges {
      node {
        id
        path
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
