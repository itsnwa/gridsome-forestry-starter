<template>
  <Layout>
    <div class="projects">
      <div v-for="item in $page.posts.edges" :key="item.node.id" class="project">
        <h2>{{ item.node.title }}</h2>
        <g-image :src="item.node.thumbnail" :alt="item.node.title + 'thumbnail'" />
        <p>{{ item.node.categories }}</p>
        <g-link :to="item.node.path">
          Read more
        </g-link>
      </div>
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
        categories
        thumbnail
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>
