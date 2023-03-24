/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const myTheme = {
    dark: false,
    colors: {
        background: '#F9F9F9',
        surface: '#FFFFFF',
        stroke: '#DDDDDD',
        primary: '#0F9AE9',
        'primary-darken-1': '#084D75',
        secondary: '#FFD43C',
        'secondary-darken-1': '#806A1E',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        secondary_info: '#777777',
    }
}

export default createVuetify({
    theme: {
        defaultTheme: 'myTheme',
        themes: {
            myTheme,
        }
    }
})
