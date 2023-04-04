<template>
  <div class="blogBody">
    <!--    博客网站顶部栏目-->
    <div class="blogHeader bgColorWithe">
      <div class="blogHeader-left">
        <div style="width: 100%;height: 100%">
          <img src="../../assets/20201124032511.png">
          <ul>
            <li><a href="#">博客</a></li>
            <li><a href="#">下载</a></li>
            <li><a href="#">学习</a></li>
            <li><a href="#">社区</a></li>
            <li><a href="#">GitCode</a></li>
            <li><a href="#">云服务</a></li>
            <li><a href="#">Coco</a></li>
          </ul>
        </div>
      </div>
      <div class="blogHeader-midd">

        <div class="blogHeader-midd-context">
          <el-input class="input" v-model="search"/>
          <el-button class="button" @click="loadSearch">搜索</el-button>
        </div>
      </div>
      <div class="blogHeader-right">
        <div class="blogHeader-right-context">
          <ul>
            <li><a href="#" @click="login">{{user}}</a></li>
            <li><a href="#">会员中心</a></li>
            <li><a href="#">足迹</a></li>
            <li><a href="#">动态</a></li>
            <li><a href="#">创作中心</a></li>
          </ul>
        </div>
        <div class="blogHeader-right-context2">
          <el-button class="submit" @click="jumpSubmit">发布</el-button>
        </div>
      </div>
    </div>
  </div>


<!--  登录弹框 -->
  <el-dialog
      v-model="loginDig" width="25%">
    <div class="loginHeader">
      <div class="loginTitle">
        <span class="cursorHeader">微信登录</span>
        <span class="cursorHeader">免密登录</span>
        <span class="cursorHeader">密码登录</span>
      </div>

      <div class="loginBody">
        <el-input class="input" v-model="phone"/>
        <el-button class="button" @click="sendLogin">登录</el-button>
      </div>

    </div>

  </el-dialog>

</template>


<script lang="ts" setup>
import {ref,onMounted} from 'vue'
import {httpGet,httpPost} from "@/axios/axios";
import {ApiReturn} from "@/utils/uutils"

const api : string = "http://localhost/userService/api";
let search = ref("");
let loginDig = ref(false); // 打开登录弹框
let phone = ref("15071452117");

let user = ref("登录/注册");

const loadSearch = () => {
  let obj = {
    search : search.value
  }
  httpGet(api,obj);
}

const sendLogin = () => {
  let obj = {
    phone : phone.value,
    status : 1
  };

  httpPost(api + "/user/login",obj).then(data => {
    if (ApiReturn(data)) {
      window.localStorage.setItem("user",JSON.stringify(data.data.data));
      user.value = data.data.data.name;
    }
  })
}

const jumpSubmit = () => {
  var htmlAnchorElement = document.createElement("a");
  htmlAnchorElement.href = "http://localhost:8080/Submit";
  htmlAnchorElement.target = "_blank"
  document.body.appendChild(htmlAnchorElement);
  htmlAnchorElement.click();
  document.body.removeChild(htmlAnchorElement);
}

const login = () => {
  loginDig.value = true;
}


onMounted(() => {
  let user2 = window.localStorage.getItem("user");
  if (user2 != undefined) {
    let userData = JSON.parse(user2);
    user.value = userData.name;
  }
})

</script>

<style scoped>
@import "hearder.css";
</style>