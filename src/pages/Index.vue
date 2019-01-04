<template>
  <Layout>
    <h1>Projects</h1>
    <div v-for="item in $page.posts.edges" :key="item.node.id">
      <h1>{{ item.node.title }}</h1>
      <g-image :src="item.node.thumbnail" :alt="item.node.title + 'thumbnail'" />
      <p>{{ item.node.category }}</p>
      <g-link :to="item.node.path">
        Read more
      </g-link>
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
        category
        thumbnail
        path
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>
