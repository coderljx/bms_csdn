<template>
  <div class="blogBody">
<!--    博客网站顶部栏目-->
    <headers></headers>
<!--    博客网站主体部分-->
    <div class="blogContext">
      <div class="bgColorH">
        <div class="menu public bgColorWithe cursorHeader">
          <span>后端</span>
          <span>前端</span>
          <span>移动开发</span>
          <span>编程语言</span>
          <span>Java</span>
          <span>Python</span>
          <span>人工智能</span>
          <span>大数据</span>
          <span>数据结构与算法</span>
          <span>cc</span>

        </div>
      </div>
    </div>

  </div>
</template>


<script lang="ts" setup>
import {Index} from "./index"
// 导入头部组件
import headers from "../Header/header.vue"

const index = new Index();



</script>

<style>
@import "index.css";
</style>