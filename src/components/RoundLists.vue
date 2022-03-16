<template>
<center><h1><a href="https://tci-thailand.org/?p=1361">รายละเอียดการลงทะเบียน</a></h1></center>
    <div class="container">
         <section class="row bottom-margin">
                <div class="col-xs-1 roundth parent-element">
                    <p class="element">{{ roundth }}</p>
                </div>
                <div class="col-xs-11 form-prop">
                    <div class="col-xs-12 rounds full">
                        <div class="col-xs-3 col-sm-3 round-date parent-element">
		     <div class="element">
                 <p>{{round_date}}</p>
                 <p>{{round_date}}</p>
      </div>
                        </div>
                        <div class="col-xs-9 col-sm-5 round-place parent-element">
                            <div class="element">
                                <p>{{round_place}} <span class="map"><span class="glyphicon glyphicon-map-marker"></span> แผนที่</span></p>
                                <p>{{round_place}}</p>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-2 round-left parent-element">
                            <div class="element">
                                <p>ที่นั่งอบรมเหลือ</p>
                                <p>{{round_left}}<span>{{round_left}}</span></p>
                            </div>
                        </div>
                        <input class="imap" type="checkbox" id="map_25" data-id="25"  data-geo="14.080994,100.604054"/>
                        <!-- input class="ibook" type="checkbox" / -->
                        <button type="button" class="col-xs-6 col-sm-2 round-book reserv-btn" id="frm_25" data-id="25" disabled></button>
                        <div class="glyphicon glyphicon-remove remove"></div>
                        <div class="col-xs-12 fill-info_25">
                                <div class="form-style-10">
                                        <h1>ลงทะเบียน<span>กรุณากรอกทุกหัวข้อ</span></h1>
<br />
                                </div>
                        </div>
                        <div class="col-xs-12 map-panel" id="ee_map_25">
                            <div class="ee">
			<iframe id="gMap_25" src="loading.html" style="display: block; width: 100%; height: 350px; border: none;" allowfullscreen></iframe>
			</div>
                        </div>
                    </div>
                </div><!--old form-->
            </section>
            <!--End round pattern-->
    </div>
</template>

<script>import { ref } from "vue"

export default {
    name:"RoundList",
    data(){
        const roundth = ref()
        const round_date = ref()
        const round_place = ref()
        const map = ref()
        const round_left = ref()
        const round_book = Boolean

        return{
            roundth: "รอบที่ 49",
            round_date: "26-28 ม.ค. 2565",
            round_place: "สถานที่ เนคเทค",
            round_left: "0"
        }
    }
}
</script>