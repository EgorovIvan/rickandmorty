<script setup>

import {ref} from "vue";

const emit = defineEmits(['applyChanges', 'resetChanges'])

const name = ref('');
const status = ref('');

const options = [
  { text: 'Alive', value: 'alive' },
  { text: 'Dead', value: 'dead' },
  { text: 'unknown', value: 'unknown' }
]

</script>

<template>
  <div class="filter">
    <div class="filter__title">
      filter by:
    </div>

    <input v-model="name" type="text" placeholder="name" class="filter__input"/>

    <div class="filter__select">
      <select v-model="status">
        <option  value="">Choose a hero</option>
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>

    <button @click="emit('applyChanges', name, status)" class="filter__btn">Применить</button>
    <button @click="emit('resetChanges')" class="filter__btn">Сбросить</button>
  </div>
</template>

<style scoped lang="less">
.filter {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  gap:0.5rem;
  padding: 1.5rem 0px;
  max-width: 1920px;
  height: auto;

  &__title {
    padding: 0.375rem 1rem 0.5rem 0;
    color: #FFF;
    font-size: 1.88rem;
    font-weight: 700;
    line-height: 100%;
    text-align: left;
  }

  &__input {
    width: 350px;
    position: relative;
    //width: 100%;
    font-size: 1.15rem;
    padding: 0.675em 6em 0.675em 1em;
    background-color: #fff;
    border: 1px solid #caced1;
    border-radius: 0.25rem;
  }

  &__select {
    min-width: 350px;
    position: relative;
  }

  select {
    appearance: none;
    /*  safari  */
    -webkit-appearance: none;
    /*  other styles for aesthetics */
    width: 100%;
    font-size: 1.15rem;
    padding: 0.675em 6em 0.675em 1em;
    background-color: #fff;
    border: 1px solid #caced1;
    border-radius: 0.25rem;
    color: #000;
    cursor: pointer;
  }

  &__select::before,
  &__select::after {
    --size: 0.3rem;
    content: "";
    position: absolute;
    right: 1rem;
    pointer-events: none;
  }

  &__select::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid black;
    top: 40%;
  }

  &__select::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid black;
    top: 55%;
  }

  &__btn {
    padding: 0.5rem 1.25rem;
    color: #000;
    font-size: 1.88rem;
    font-weight: 700;
    line-height: 100%;
    text-align: left;
    background: #FFD700;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
  }

  &__btn:hover {
    filter: brightness(1.25);
    transition: filter .2s;
  }
}

input[type="checkbox"]:checked + label {
  color: rgb(255, 255, 255);
  background: rgb(196, 196, 196);
}

[type="checkbox"] {
  display: none;
}


</style>