<script setup>
import Filter from "@/components/Filter.vue";
import Main from "@/components/Main.vue";
import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";
import {VueAwesomePaginate} from "vue-awesome-paginate";


const heroes = ref([]);
const firstEpisodeNew = ref([]);

const totalPages = ref(0);
const totalItems = ref(0);

const currentPage = ref(1);

// Выбор страницы
const changePage = (page) => {
  currentPage.value = page;
}

// Фильтры
const filters = reactive({
  filterByName: '',
  filterByStatus: '',
});

// Применить фильтр
const applyChanges = (name, status) => {
  currentPage.value = 1;
  filters.filterByName = name;
  filters.filterByStatus = status;
}

// Сбросить фильтр
const resetChanges = () => {
  currentPage.value = 1;
  filters.filterByName = '';
  filters.filterByStatus = '';
}

// Загрузка первого эпизода карточки
const fetchItem = async (url, obj) => {
  try {
    const {data} = await axios.get(url);
    // Костыль
    firstEpisodeNew.value.push(data.name);
    // При таком методе исчезает после перезагрузки
    obj.firstEpisode = data.name;
    return obj;
  } catch (err) {
    console.log(err);
  }

}

// Загрузка карточек
const fetchHeroes = async () => {
  try {
    const params = {
      page: currentPage.value,
      name: filters.filterByName,
      status: filters.filterByStatus,
    }

    const {data} = await axios.get('https://rickandmortyapi.com/api/character', {
      params
    });

    // Количество страниц
    totalPages.value = data.info.pages;
    totalItems.value = data.info.count;

    // Очищение массива эпизодов
    firstEpisodeNew.value.splice(0, firstEpisodeNew.value.length);

    // Массив карточек на странице
    heroes.value = data.results.map((obj) => {
          fetchItem(obj.episode[0], obj);
          return obj;
        }
    );
  } catch (err) {
    console.log(err);
    alert(err.message ? err.message : err);
  }
}

onMounted(async () => {
  await fetchHeroes();
});

watch(currentPage, fetchHeroes);
watch(filters, fetchHeroes);

</script>

<template>
  <div class="container">
    <Filter
        @apply-changes="applyChanges"
        @reset-changes="resetChanges"
    />
    <Main
        :heroes="heroes"
        :first-episode-new="firstEpisodeNew"
    />
    <vue-awesome-paginate
        :total-items="totalItems"
        :items-per-page="20"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="changePage"
    />
  </div>
</template>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}
</style>
