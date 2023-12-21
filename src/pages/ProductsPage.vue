<template>
    <h1>Products</h1>
    <ProductsList :products="products"/>
</template>

<script setup>
import { products } from '@/temp-data';
import ProductsList from '../components/ProductsList.vue'
</script>