
<style>

.product-container {
    gap: 50px;
    flex-wrap: wrap;
}

.product-image {
    height: 450px;
    width: 450px;
}

@media (max-width: 768px) {
    .product-image {
        height: 300px;
        width: 300px;
    }

    .product-image--container {
    width: -webkit-fill-available;
}
}

</style>

<template>
    <v-sheet class="px-16 pt-16 pb-16">
        <p class="d-flex align-center text-truncate" :style="{ gap: '5px' }"><router-link class="link" to="/">Accueil</router-link> <span
                class="material-symbols-outlined arrow_forward">chevron_right</span> {{ product.title }}</p>
        <v-main style="{ --v-layout-top: 50px }" class="d-flex justify-start product-container">
            <v-sheet class="border pa-4 pb-10 product-image--container" rounded>
                <v-img :src="product.image" :alt="product.title" class="product-image"></v-img>
            </v-sheet>
            <v-container class="pa-0" style="max-width: 500px; margin-left: 0">
                <p class="mt-1" :style="{ color: '#777777' }">{{ product.category }}</p>
                <p style="font-size: 24px;" class="font-weight-bold mt-4 mr-0 mb-5 ml-0">{{ product.title }}</p>
                <p style="font-size: 24px;" class="mb-3">{{ product.price }}</p>
                <p :style="{ color: '#777777' }" class="mb-3">Description</p>
                <p>{{ product.description }}</p>
            </v-container>
        </v-main>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            product: {},
        };
    },
    mounted() {
        fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
            .then((response) => response.json())
            .then((data) => {
                this.product = data;
            });
    },
};
</script>