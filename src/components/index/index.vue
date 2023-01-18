<template>
  <div class="blogBody">
<!--    博客网站顶部栏目-->
    <headers></headers>
<!--    博客网站主体部分-->
    <div class="blogContext">
      <div class="bgColorH">
        <div class="menu public bgColorWithe cursorHoud">
          <span v-for="(item,index) in index.moduleData.value">{{item.moduleName}}</span>
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
              <img class="imgLimit20 marRi10" src="../../assets/left.png">
              <img class="imgLimit20" src="../../assets/right.png">
            </div>
            <div class="recommend2-bottom">
              <div class="recommendDiv" v-for="(item,index) in 5">
                <a class="txtHearder">Apache 顶级开源项目的突围之路！</a>
                <a class="fontSizeLimit13 marTop5">开源发展，已经从蓝海变为红海</a>
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
            <div class="recommend2-bottom">
              <div class="recommendDiv" v-for="(item,index) in 5">
                <a class="txtHearder">Apache 顶级开源项目的突围之路！</a>
                <a class="fontSizeLimit13 marTop5">开源发展，已经从蓝海变为红海</a>
              </div>
            </div>
          </div>
          <div class="recommend4">
              <div class="block text-center">
                <el-carousel>
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small justify-center" text="2xl">asdasd</h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
          </div>
        </div>
      </div>

<!--      内容部分-->
      <div class="bgColorY">
        <div class="bgBody public">
          <div class="bgContext-left">
            <el-menu
                :default-active="activeIndex"
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



          <div class="bgContext-right">asdasdas</div>
        </div>
    </div>


    </div>

  </div>
</template>


<script lang="ts" setup>
import {Index} from "./index"
// 导入头部组件
import headers from "../Header/header.vue"
import {getCurrentInstance} from "vue";
import {Router} from "vue-router";


const index = new Index();
const instanse = getCurrentInstance();

const handleSelect = (data : any) => {
  let route = instanse?.proxy?.$router as Router;
  route.push("/index/" + data);
}


</script>

<style>
@import "index.css";
</style>