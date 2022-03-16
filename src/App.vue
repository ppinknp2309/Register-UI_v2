<template>
    <meta charset="utf-8">
      <meta name="description" content="ACI THAIJO REGISTRATION PAGE">
            <meta property="og:title"  content="ThaiJo2: Traning registration" />
            <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css" />
            <link rel="stylesheet" href="css/style.css" type="text/css">
         
    <body>
      <header>
        <nav class="container">
          <div class="row page-head">
              <div class="col-xs col-sm-3 logo-area">
                  <a href="/" class="parent-element"><img class="img-responsive element center-block" src="src/assets/thai-jo.png"></a>
              </div>
              <div class="col-xs-12 col-sm-7 head-name">
                  <p> {{headname}} </p>
              </div>
              <div class="col-xs-12 col-sm-2 registered parent-element">
                  <div class="element"></div>
                 
             <router-link to="/List" class="reg-btn">{{regis}}</router-link><br/>
              <a href="ThaiJo2Agenda.pdf" class="reg-btn">กำหนดการ</a>
              
       
              </div>
          </div>

      </nav>
      
      </header>
      
      
       <div class="container mt-5">
         <router-view></router-view>
         
      </div>
      <div style="display: table;">
            <div style="display: table-row; height: 55vh;">
            <div style="display: table-cell"></div>
            </div>
        </div>
       <footer class="container">
                <div class="row tj-foot">
                    <div class="col-xs-12 foot">
                        <p>TCI THAIJO</p>
                        <p>Copyright 2019-2021. TCI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
           
    </body>


</template>
<script>

import RoundList from './components/RoundLists.vue'
import List from './components/List.vue'
    export default {
    name:"App",
    components:{
        RoundList,
        List
    },
      data(){
      return{
        headname: "ลงทะเบียนอบรม",
        regis: "ผู้ลงทะเบียนแล้ว"
      }
    }
     }
</script>



        
    


