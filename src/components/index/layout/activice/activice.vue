<template>
  <div class="actives">
    <div class="wid85">
      <div class="acticesHeader">
        <h3 style="margin: 0">向你推荐</h3>
      </div>

      <div class="acticesContext" v-for="(item,index) in activice.actives.value" :key="index">
        <div style="width: 28px">
          <el-avatar :size="28" src="https://empty">
            <img
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            />
          </el-avatar>
        </div>
        <div  style="width: 70%;margin-left: 10px;font-size: 14px">{{item}}</div>
        <div  style="flex: 1"><img class="img16X16" src="../../../../../src/assets/rightActivices.png"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {Activice} from "./activice"
import {onMounted} from "vue";

const activice = new Activice();

onMounted(() => {
  // this.activice = new Activice();
})

</script>

<style scoped src="./activice.css">

</style>