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
<button class="col-xs-6 col-sm-2 round-book covid-btn :before" disabled style="margin-left: 85%;"></button>
<div class="glyphicon glyphicon-remove remove"></div>
<div class="col-xs-12 fill-info_"></div>
</template>


<style scoped>
button {
font-weight: bold;
}
</style>