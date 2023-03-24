
<style>
.section-title {
    font-size: 32px;
    color: black;
}

.home {
    cursor: pointer;
}
</style>

<template>
    <v-app>

        <v-app-bar color="white" :elevation="0" class="px-10"
            :style="{ height: '64px', position: 'relative', borderBottom: '1px solid #DDDDDD' }">
            <v-img src="logo.svg" alt="Vue Store Logo" max-width="44" @click="toHome" class="home" />
            <div class="ml-3" >
                <v-toolbar-title class="font-weight-bold home"  @click="toHome">Vue Store</v-toolbar-title>
            </div>
        </v-app-bar>

        <v-main :style="{ padding: '0px', marginBottom: '64px' }">
            <router-view />
        </v-main>

        <v-footer :elevation="0" class="mt-4 justify-end" :style="{ height: '64px', borderTop: '1px solid #DDDDDD' }">
            <p>&copy; 2023 - Yaël COËFFIER</p>
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

    methods: {
        toHome() {
            this.$router.push('/')
        },
    },

    data: () => ({
        //
    }),
}
</script>