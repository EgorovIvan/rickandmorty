import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

createApp(App)
    .use(VueAwesomePaginate)
    .mount('#app');
