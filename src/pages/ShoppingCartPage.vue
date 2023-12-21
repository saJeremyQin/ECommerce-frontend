<template>
    <h1>Shopping Cart</h1>
    <ShoppingCartList :cartItems="cartItems"/>
</template>

<script setup>
import ShoppingCartList from '@/components/ShoppingCartList.vue';
// import { cartItems } from '@/temp-data';
const cartItems = [];
</script>