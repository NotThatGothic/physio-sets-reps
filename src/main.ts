import { createApp } from 'vue'
import App from './App.vue'
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPause)
library.add(faPlay)
library.add(faArrowUp)
library.add(faArrowDown)
library.add(faCircleXmark)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')