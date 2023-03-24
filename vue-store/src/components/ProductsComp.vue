<style>

.link {
    color: inherit;
    text-decoration: none;
}

.link:hover {
    color: #0F9AE9;
}

.arrow_forward {
    color: #777777;
}

</style>

<template>
    <v-sheet class="px-16 pt-16">
        <p class="section-title font-weight-bold">Tous les articles</p>
        <v-main style="{ --v-layout-top: 50px }">
            <v-container class="d-flex">
                <v-row>
                    <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
                        <v-sheet class="border pa-4 pb-10" rounded>
                            <v-chip class="ma-0 pa-2 font-weight-medium" color="primary" label>{{ product.price }}
                                €</v-chip>
                            <v-img :src="product.image" :alt="product.title" :style="{ height: '200px', cursor: 'zoom-in' }"
                                @click="showImage(product.image)"></v-img>
                        </v-sheet>

                        <p class="mt-4"><router-link class="link" :to="{ name: 'ProductDetails', params: { id: product.id } }">{{
                            product.title }}</router-link>
                        </p>

                        <p class="mt-1" :style="{ color: '#777777' }">{{ product.category.slice(0, 1).toUpperCase() +
                            product.category.slice(1) }}</p>
                        <v-container class="d-flex" :style="{ gap: '5px', padding: '0' }">
                            <v-rating v-model="product.rating.rate" color="primary" empty-icon="mdi-star-outline"
                                half-increments readonly density="compact"></v-rating>
                            <p class="mt-1 font-weight-regular" :style="{ fontSize: '14px' }">{{ product.rating.rate }}
                                ({{
                                    product.rating.count }})
                            </p>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>

            <v-dialog v-model="showModal" max-width="800">
                <v-card>
                    <v-card-text class="d-flex justify-center align-center pa-16">
                        <v-img :src="selectedImage" contain max-width="600" max-height="600"></v-img>
                    </v-card-text>
                </v-card>
            </v-dialog>

        </v-main>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            showModal: false,
            selectedImage: null,
        }
    },
    methods: {
        showImage(image) {
            this.selectedImage = image;
            this.showModal = true;
        },
    },
    mounted() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                this.products = data

                // console.log(this.products);
            })
    }
}
</script>