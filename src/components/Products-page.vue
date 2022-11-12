<template>
    <div class="container">
        <SearchBoxTwo v-if="this.$store.state.isActive">

        </SearchBoxTwo>

        <div v-else class="pags">
            <h1> Product Page </h1>
            <h3> Please Click on search button (Icon)</h3>
        </div>
    </div>
</template>
<script>

import SearchBoxTwo from "./Search-box-two.vue"

export default {
    name: 'ProductsPage',

    components: {
        SearchBoxTwo,
    }
}
</script>

<style scoped>
.container {
    height: auto;
}

.pags {
    height: 300px;
}
</style>