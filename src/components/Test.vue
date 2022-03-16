<template>
<div id="app">
    <div v-if="display_div">Test</div>
    <input type="button" value="Toggle Collapse" v-on:click="toggleDiv()"/>
</div>

</template>
<script>
    new Vue({
        el: '#app',
        data: {
            display_div: false
        },
        methods: {
            toggleDiv: function() {
                this.display_div = !this.display_div;
            }
        }
    });
</script>