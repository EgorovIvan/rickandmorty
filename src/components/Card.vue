<script setup>

defineProps({
  image: String,
  name: String,
  status: String,
  species: String,
  location: String,
  firstEpisode: Array,
})



</script>

<template>
  <div class="main__item">
    <img :src="image" alt="" class="main__item-img">
    <div class="main__item-content">
      <div class="section">
        <h2 class="item-content__name">{{name}}</h2>
        <p class="item-content__status">
          <span :class="{alive: status === 'Alive', dead: status === 'Dead', unknown: status === 'unknown'}"></span>
          {{status}} - {{species}}</p>
      </div>
      <div class="section">
        <p class="item-content__text">Last known location:</p>
        <p class="item-content__location">{{location}}</p>
      </div>
      <div class="section">
        <p class="item-content__text">First seen in:</p>
        <p class="item-content__episode">{{firstEpisode}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.main {
  &__item {
    width: 600px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    box-sizing: inherit;
  }

  &__item-content {
    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__item-content .section {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
  }

  &__item-content .section:first-child {
    -webkit-box-pack: start;
    justify-content: flex-start;
  }
}

.item-content {

  &__name {
    color: rgb(245, 245, 245);
  }

  &__status {
    font-size: 16px;
    font-weight: 500;
  }

  &__status span {
    display: inline-flex;
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    border-radius: 50%;
  }

  &__text {
    color: rgb(158, 158, 158);
    font-size: 16px;
    font-weight: 500;
  }

  &__location,
  &__episode {
    color: rgb(245, 245, 245);
    font-size: 20px;
    font-weight: 500;
  }
}

.alive {
  background: rgb(85, 204, 68);
}

.dead {
  background: rgb(214, 61, 46);
}

.unknown {
  background: rgb(158, 158, 158);
}


</style>