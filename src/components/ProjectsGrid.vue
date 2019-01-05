<template>
    <div class="projects">
        <div class="project" v-for="item in projects" :key="item.node.id">
            <g-link :to="item.node.path" class="project-link">
            <g-image
                :src="item.node.thumbnail"
                :alt="item.node.title"
                class="thumbnail"
            />
            <h3 class="project-title">{{ item.node.title }}</h3>
            <div class="categories">
                <span class="category" v-for="(item, index) in item.node.categories" :key="index">{{ item }}</span>
            </div>
            </g-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        projects: {
            type: Object,
            required: true
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
.project:nth-child(3n+1) {
  grid-column: auto / span 2;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: 560px;
  object-fit: cover;
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
