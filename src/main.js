import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

import { pt_br } from '../src/locales/pt_br.js';
import { en } from '../src/locales/en.js';
import { it } from '../src/locales/it.js';

const languages = {
    pt_br,
    en,
    it
}

const i18n  = createI18n({
    locale: 'pt_br',
    fallbackLocale: 'pt_br',
    messages: languages
}) 


createApp(App).use(i18n).mount('#app')
