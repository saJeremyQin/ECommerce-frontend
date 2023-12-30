<template>
    <h1>Products</h1>
    <ProductsList :products="products"/>
</template>

<script setup>
// import { products } from '@/temp-data';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const products = ref([]);

onMounted(async () => {
    try {
        const response =  await axios.get('/api/products');
        products.value = response.data;   

    } catch (error) {
        if(error.response) {
            console.error('Server responded with an error:', error.response.status);
        } else if(error.request) {
            console.error('No response received from the server');
        } else {
            console.error('Error in request setup:', error.message);
        }
    }
})


import ProductsList from '../components/ProductsList.vue'
</script>