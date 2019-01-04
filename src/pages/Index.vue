<template>
  <Layout>
    <div class="container">
      <Hero />
      <div class="projects">

        <div class="project" v-for="item in $page.posts.edges" :key="item.node.id">
          <g-link :to="item.node.path" class="project-link">
            <div
              class="thumbnail"
              :style="{ backgroundImage: `url(${item.node.thumbnail.src})` }"
            />
            <h3 class="project-title">{{ item.node.title }}</h3>
            <div class="categories">
              <span class="category" v-for="(item, index) in item.node.categories" :key="index">{{ item }}</span>
            </div>
          </g-link>
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
  text-align: center;
}
.project:nth-child(3n) {
  grid-column: auto / span 2;
}
.thumbnail {
  height: 560px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.project-link {
  text-decoration: none;
}
.project-title {
  font-size: 1rem;
  margin: 2rem 0 1rem 0;
}
.categories {
  font-size: 0.8rem;
  opacity: 0.6;
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
</style>
