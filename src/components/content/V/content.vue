<template>
  <headers></headers>

  <div class="gensuiParent contentDiv">
    <!--    内容信息左侧-->
    <div class="content-left">
      <div class="content-left01 whiteColor wid95">
        <div class="content-left02">
          <div class="userHeader">
            <div class="userHeader01">
              <div class="userHeader01-left">
                <el-avatar :size="40" src="https://empty" @error="errorHandler">
                  <img
                      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  />
                </el-avatar>
              </div>
              <div class="userHeader01-right">
                <div class="Qcolor">Brother</div>
                <div>
                  <span class="Qcolor">总会议局总会议长</span>
                </div>
              </div>

            </div>
            <div class="userHeader02">
              <div class="Txtcenter">
                <div>1</div>
                <div>原创</div>
              </div>
              <div class="Txtcenter">
                <div>1</div>
                <div>周排名</div>
              </div>
              <div class="Txtcenter">
                <div>1</div>
                <div>总排名</div>
              </div>
              <div class="Txtcenter">
                <div>1</div>
                <div>访问量</div>
              </div>
              <div class="Txtcenter">
                <div>1</div>
                <div>等级</div>
              </div>
            </div>
            <div class="line"></div>
            <div class="userHeader03">
              <div class="Txtcenter">
                <div>1</div>
                <div>积分</div>
              </div>
              <div class="Txtcenter">
                <div>1</div>
                <div>粉丝</div>
              </div>
              <div class="Txtcenter">
                <div>1</div>
                <div>获赞</div>
              </div>
              <div class="Txtcenter">
                <div>1</div>
                <div>评论</div>
              </div>
              <div class="Txtcenter">
                <div>1</div>
                <div>收藏</div>
              </div>
            </div>
            <div class="Txtcenter btn001">
              <el-button class="follow" type="primary" round>关注</el-button>
              <el-button class="send" type="success" round>私信</el-button>
            </div>
          </div>
        </div>
      </div>

      <!--        搜索组件 -->
      <div class="content-left03 wid95 whiteColor">
        <div style="width: 80%;margin: 10px auto;">
          <el-input v-model="input" placeholder="搜博主文章" />
        </div>
      </div>

<!--      热门文章-->
      <div class="whiteColor wid95">
        <div class=" content-left04">
          <div class="hot">热门文章</div>
          <div class="hotLinks" v-for="item in 5">
            <a href="#">
              <span>开源IOT——一个最小的物联网系统设计方案及源码</span>
            </a>
          </div>
        </div>
      </div>

<!--    热门评论  -->
      <div class="whiteColor wid95">
        <div class=" content-left05 ">
          <div class="hot">热门评论</div>
          <div class="hotLinks" v-for="item in 5">
            <a href="#">
              <span>开源IOT——一个最小的物联网系统设计方案及源码</span>
            </a>
          </div>
        </div>
      </div>

    </div>


    <!--内容信息中间部分-->
    <div class="content-midd whiteColor">
      <div v-html="content.detailText.value"></div>
    </div>
    <!--    内容信息右侧-->
    <div class="content-right whiteColor">3</div>
  </div>

</template>

<script setup>
import headers from "@/components/Header/header.vue"
import {Content} from "../C/content"

const content = new Content();



</script>

<style scoped src="./content.css">
</style>