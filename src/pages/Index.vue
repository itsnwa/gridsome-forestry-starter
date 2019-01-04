<template>
  <Layout>
    <div class="container">
      <Hero />
      <div class="projects">
        <div v-for="item in $page.posts.edges" :key="item.node.id" class="project">
          <!-- <h2>{{ item.node.title }}</h2> -->
          <g-image :src="item.node.thumbnail" :alt="item.node.title + 'thumbnail'" />
          <!-- <div class="categories">
            <span class="category" v-for="(item, index) in item.node.categories" :key="index">{{ item }}</span>
          </div> -->
          <!-- <g-link :to="item.node.path">
            Read more
          </g-link> -->
        </div>
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
import Hero from "@/components/Hero"

export default {
  components: {
    Hero
  },
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.project {
  grid-column: auto / span 1;
}
.project:nth-child(3n) {
  grid-column: auto / span 2;
}
</style>
