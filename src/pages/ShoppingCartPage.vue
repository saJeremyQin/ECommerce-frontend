<template>
    <h1>Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
        <ShoppingCartList :products="cartItems"/>
        <button class="checkout-button">Proceed to Checkout</button>
    </div>
    <div v-else>
        You have no items in your cart yet.
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import ShoppingCartList from '@/components/ShoppingCartList.vue';
const cartItems = ref([]);

onMounted(async () => {
    const response = await axios.get('/api/users/12345/cart');
    cartItems.value = response.data;
})

</script>
