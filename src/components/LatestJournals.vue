<template>
    <div>
        <div class="latest-journals-heading container">
        <h3>Latest and greatest</h3>
        </div>
        <div class="latest-journals">
        <div class="container">
            <g-link :to="item.node.path" class="journal" v-for="item in journals" :key="item.node.id">
            <h3 class="journal-title">{{ item.node.title }}</h3>
            </g-link>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        journals: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.latest-journals {
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
}
.latest-journals > .container {
  display: flex;
}
.journal {
  flex: 1;
  display: block;
  padding: 2rem;
  border-right: 1px solid #f3f3f3;
  transition: background 0.25s ease;
  text-decoration: none;
}
.journal:last-of-type {
  border: 0;
}
.journal:hover {
  background: #f7f7f7;
}
</style>
