<template>
    <div class="img-wrap">
        <img :src="product.imageName" />
    </div>
    <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button class="add-to-cart">Add to Cart</button>
    </div>
</template>

<script setup>
import { products } from '@/temp-data';
import { useRoute } from 'vue-router'

const route =  useRoute();
const product = products.find((product) => product.id === route.params.productId);
</script>