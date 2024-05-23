<script setup>

import Card from "@/components/Card.vue";

defineProps({
  heroes: Array,
  firstEpisodeNew: Array,
})

</script>
<template>
  <div class="main">
    <Card v-for="(hero, number) in heroes"
          :key="hero.id"
          :image="hero.image"
          :name="hero.name"
          :status="hero.status"
          :species="hero.species"
          :location="hero.location.name"
          :firstEpisode="firstEpisodeNew[number]"
    />
  </div>
</template>

<style scoped lang="less">
.main {
  //position: relative;
  //display: grid;
  //grid-template-columns: 1fr 1fr 1fr;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.5rem 0px;
  max-width: 1920px;
  height: auto;
}
</style>