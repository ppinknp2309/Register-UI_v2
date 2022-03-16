<template>

    <v-body>
        <v-header>
            <v-nav class="container">
                <div class="row page-head">
                    <div class="col-xs col-sm-3 logo-area">
                        <a href="/" class="parent-element"><img class="img-responsive element center-block" src="src/assets/thai-jo.png"></a>
                    </div>
                    <div class="col-xs-12 col-sm-7 head-name">
                        <p>ลงทะเบียนอบรม</p>
                    </div>
                    <div class="col-xs-12 col-sm-2 registered parent-element">
                        <div class="element"></div>
                        <rounter-link to="/" class="reg-btn">ผู้ลงทะเบียนแล้ว</rounter-link>
                        <a href="ThaiJo2Agenda.pdf" class="reg-btn">กำหนดการ</a>
                    </div>
                </div>

            </v-nav>
        </v-header>
    </v-body>
    <router-view></router-view>

</template>

<script>

export default {
    name:"Header"
}
</script>

<style>

</style>