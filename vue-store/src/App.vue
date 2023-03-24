
<style>
.section-title {
    font-size: 32px;
    color: black;
}
</style>

<template>
    <v-app>

        <v-app-bar color="white" :elevation="0" class="px-10"
            :style="{ height: '64px', position: 'relative', borderBottom: '1px solid #DDDDDD' }">
            <v-img src="logo.svg" alt="Vue Store Logo" max-width="44"></v-img>
            <v-toolbar-title class="font-weight-bold">Vue Store</v-toolbar-title>
            <v-btn to="/">Accueil</v-btn>
            <v-btn to="/hello">À propos</v-btn>
        </v-app-bar>

        <v-main :style="{ padding: '0px' }">
            <router-view />
        </v-main>

        <v-footer :elevation="0">
            <v-row align="center" justify="center">
                <v-col cols="12" class="text-center">
                    <v-btn icon>
                        <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="12" class="text-center">
                    <span class="caption">&copy; 2021 - Mon site e-commerce</span>
                </v-col>
            </v-row>
        </v-footer>

    </v-app>
</template>

<script>
import ProductsComp from './components/ProductsComp.vue'

export default {
    name: 'App',

    components: {
        ProductsComp,
    },

    data: () => ({
        //
    }),
}
</script>