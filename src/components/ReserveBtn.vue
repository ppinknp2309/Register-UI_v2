<script>
import regis from "./regist-form.vue";
export default {
    components:{
        regis
    },
data() {
return {
    display_div: false
}
}
}
</script>


<template>
<button class="col-xs-6 col-sm-2 round-book reserv-btn" @click="display_div = !display_div" style="margin-left: 85%;"></button>
<div v-if="display_div">
    <regis></regis>
</div>
</template>


<style scoped>
button {
font-weight: bold;
}
</style>