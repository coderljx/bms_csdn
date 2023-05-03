<template>
  <div class="blogBody">
<!--    博客网站顶部栏目-->
    <headers></headers>
<!--    博客网站主体部分-->
    <div class="blogContext">
      <div class="bgColorH">
        <div class="menu public bgColorWithe cursorHoud">
          <span v-for="(item,index) in indexs.moduleData.value" :key="index">{{item.moduleName}}</span>
        </div>
        <div class="public recommend">
          <div class="recommend1">
            <div class="recommend1-top">
              <img class="imgLimit24" src="../../assets/20220107104621.png">
              <strong>头条</strong>
            </div>
            <div class="recommend1-bottom">
              <img class="imgLimitHei240" src="../../assets/20230112025204.jpg">
              <div style="margin: 5px 0;"><a class="txtHearder" href="#">崔宝秋国际开源经验在小米开花 | 开源英雄</a></div>
              <div><a class="fontSizeLimit13">从IBM、雅虎、LinkedIn 到小米这一路走来，从一个开源的追随者成长为开源的推动者，小米的开源文化、丰硕的成果输出、吸引开源创造者，他始终都是核心所在。</a></div>
            </div>
          </div>
          <div class="recommend2">
            <div class="recommend2-top">
              <img class="imgLimit20 marRi10" src="../../assets/left.png" style="visibility: hidden">
              <img class="imgLimit20" src="../../assets/right.png" style="visibility: hidden">
            </div>
            <div class="recommend2-bottom">
              <div class="recommendDiv" v-for="(item,index1) in indexs.hotText.value" :key="index1">
                <a class="txtHearder hiddenText cursorHoud" @click="indexs.clickHotText(item)">{{item.coverTitle}}</a>
              </div>
            </div>
          </div>
          <div class="recommend3">
            <div class="recommend3-top">
              <div class="divInblok">
                <img class="imgLimit24" src="../../assets/redian.png">
                <strong>热点</strong>
              </div>
              <div  class="divInblok" style="float: right">
                <img class="imgLimit20 marRi10" src="../../assets/left.png">
                <img class="imgLimit20" src="../../assets/right.png">
              </div>
            </div>
            <div class="recommend3-bottom">
              <div class="recommendDiv" v-for="(item,index) in indexs.hotText.value" :key="index">
                <a class="txtHearder hiddenText cursorHoud">{{item.coverTitle}}</a>
              </div>
            </div>
          </div>
          <div class="recommend4">
              <div class="block text-center">
                <el-carousel>
                  <el-carousel-item v-for="item in indexs.advLinks.value" :key="item">
                    <img v-bind:src="item" />
                  </el-carousel-item>
                </el-carousel>
              </div>
          </div>
        </div>
      </div>

<!--      内容部分-->
      <div class="bgColorY">
        <div class="bgBody public">
<!--          内容部分左侧               :default-active="activeIndex"  -->
          <div class="bgContext-left">
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
            >
                <el-menu-item index="follow">关注</el-menu-item>
                <el-menu-item index="recommend">推荐</el-menu-item>
                <el-menu-item index="info">资讯</el-menu-item>
                <el-menu-item index="4">热榜</el-menu-item>
            </el-menu>

<!--            动态切换后，显示不同的路由-->
            <router-view />
          </div>

<!--          内容部分右侧-->
          <div class="bgContext-right">
            <activice></activice>
          </div>
        </div>
    </div>

    </div>

  </div>
</template>


<script lang="ts" setup>
//@ts-ignore
import {Index} from "./index"
// 导入头部组件
import headers from "../Header/header.vue"
import {getCurrentInstance,onMounted} from "vue";
import {Router} from "vue-router";
import Mock from "mockjs";
import activice from "@/components/index/layout/activice/activice.vue";

const indexs = new Index();
const instanse = getCurrentInstance();


onMounted(() => {});

/**
 * 再选择后进行路由的跳转,(对应的路由规则已经匹配完成)
 * @param data
 */
const handleSelect = (data : any) : void => {
  let route = instanse?.proxy?.$router as Router;
  route.push("/index/" + data);
}


</script>

<style src="./index.css">
</style>