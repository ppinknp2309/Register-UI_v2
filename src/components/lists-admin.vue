<template>
<div class="container">

   <div class="col-sm-2" style="text-align: right;width: 100%;padding-bottom: 5px;">
   <a href="/" class="btn ">
   <i class="fas fa-plus"></i>
   </a>
   <a href="/" class="btn ">
   <i class="fas fa-file-csv  text-success"></i>
   </a>
   <a href="logout.php" class="btn">
      <i class="fas fa-power-off  text-danger"></i>
   </a>
</div>

        <div class="row">
            <div class="col-sm-12 round-report">
                <p class="topic1">รอบที่ 49: วันที่ 26 -28 ม.ค. สถานที่: เนคเทค</p>
            </div>
            <table class="table table-striped">
                <thead class="thead-color">
                    <tr>
                        <th>สิทธิ์</th>
                        <th>วารสาร</th>
                        <th>ผู้ลงทะเบียน</th>
                        <th>จำนวนผู้อบรม</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <a href="/" ><span class="glyphicon glyphicon-edit text-success" arial-hidder></span></a>
                            <a href="/" ><span class="glyphicon glyphicon-remove text-danger" arial-hidder></span></a>
                        </th>
                            <td>Journal of Social Science an Humanities Reserch in Asia (JSHRA)</td>
                            <td>เบญจมาศ รัตนพงศ์</td>
                            <td>3</td>
                    </tr>
                    <tr>
                        <td colspan="3" style="align-items: center;">
                            <table class="table table-striped">
                                <thead class="thead-color" style="background-color: #d2d2d2;">
                                    <tr>
                                        <th>ลำดับ</th>
                                        <th>ชื่อ</th>
                                        <th>อาหาร</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>ผศ.ดร.กันยปริณ ทองสามสี (นาง)</td>
                                        <td>อาหารปกติ</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>น.ส.เบญจมาศ รัตนพงศ์</td>
                                        <td>อาหารปกติ</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">3</td>
                                        <td>น.ส.บศกร ลีลาฤทธิ์</td>
                                        <td>ฮาลาล</td>
                                    </tr>
                                    </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
</template>
<script>
import {ref , reactive} from "vue"

export default {
    setup(){

    }
   
}

</script>