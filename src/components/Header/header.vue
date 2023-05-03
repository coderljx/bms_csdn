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
            <li><a href="#" @click="login"> <div><el-avatar :size="30" :src="user" /></div></a> </li>
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
      <div class=" ">
        <h3 class="cursorHeader">登录</h3>
      </div>

      <div class="loginBody">
        <div style="display: flex">
          <span style="width: 100px;line-height: 32px;">手机号: </span>
          <el-input class="input" v-model="phone"/>
        </div>
        <div style="display: flex;margin-top: 10px">
          <span style="width: 100px;line-height: 32px;">密码: </span>
          <el-input type="password" class="input" v-model="psd"/>
        </div>
        <div style="margin-top: 10px;text-align: center">

          <el-button class="button" @click="sendLogin">登录</el-button>
          <a class="" style="margin-left: 20px" href="#">忘记密码</a>
          <a class="" style="margin-left: 20px" href="#" @click="registDig = true">注册</a>
        </div>
      </div>

    </div>
  </el-dialog>


  <!--注册弹框-->
  <el-dialog
      v-model="registDig" width="25%">
    <div class="loginHeader">
      <div class=" ">
        <h3 class="cursorHeader">注册</h3>
      </div>

      <div class="loginBody">
        <el-form :model="form" label-width="120px">

          <el-form-item label="用户名">
            <el-input class="input" v-model="userName"/>
          </el-form-item>

          <el-form-item label="手机号">
            <el-input class="input" v-model="phone"/>
          </el-form-item>

          <el-form-item label="密码">
            <el-input type="password" class="input" v-model="psd"/>
          </el-form-item>

          <el-form-item label="用户头像">
            <el-upload
                ref="uploadRef"
                class="avatar-uploader"
                list-type="picture-card"
                :auto-upload="false"
                :show-file-list="false"
                name="file"
                :action="uploadUrl"
                :before-upload="beforeAvatarUpload"
            >

              <el-icon   class="avatar-uploader-icon">
                <Plus/>
              </el-icon>


              <template  #file="{ file }">
                <div style="width: 200px;height: 200px;border: 1px solid red">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>

                </div>
              </template>

            </el-upload>


          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="userCreate">创建</el-button>
          </el-form-item>
        </el-form>
      </div>


    </div>
  </el-dialog>


</template>


<script lang="ts" setup>
import {ref, onMounted} from 'vue'
import {httpGet, httpPost} from "@/axios/axios";
import {ApiReturn, MessageBox, Message} from "@/utils/uutils";
import { Delete, Download, Plus, ZoomIn} from '@element-plus/icons-vue';
import type {UploadInstance} from 'element-plus'


const api: string = "userService/api";
let search = ref("");
let loginDig = ref(false); // 打开登录弹框
let registDig = ref(false); // 打开注册弹框

let uploadUrl = ref("");
let userName = ref("1");
let phone = ref("15071452117");
let psd = ref("123");

const uploadRef = ref<UploadInstance>();

let user = ref("登录/注册");

const loadSearch = () => {
  let obj = {
    search: search.value
  }
  httpGet(api, obj);
}

/**
 * 用户登录
 */
const sendLogin = () => {
  let obj = {
    phone: phone.value,
    password: psd.value
  };

  if (obj.password == "" || obj.phone == "") {
    MessageBox(Message.PhoneOrPsdNotNull, "error");
    return;
  }

  httpPost(api + "/user/login", obj).then(data => {
    if (ApiReturn(data)) {
      window.localStorage.setItem("user", JSON.stringify(data.data.data));
      user.value = data.data.data.avatar;
      loginDig.value = false;
    }
  })
}

/**
 * 创建用户
 */
const userCreate = () => {
  let obj = {
    name: userName.value,
    password: psd.value,
    phone: phone.value
  };
  httpPost(api + "/user/register", obj).then(data => {
    if (ApiReturn(data)) {
      let id = data.data.data.id;
      // 根据新创建的类,来调用上传图片接口
      uploadUrl.value = "http://localhost/fileService/api/file/saveFile/1?bucket=img&userid=" + id;
      uploadRef.value!.submit();
    } else {
      MessageBox(Message.createUserMessage, "error");
    }
  });


}

// 上传文件之前的检查
const beforeAvatarUpload = (rawFile: any) => {
  let index = rawFile.name.indexOf(".");
  if (index == -1) {
    MessageBox(Message.uploadFileMessage, "error");
    return false;
  }
  let name = rawFile.name.substr(index + 1);
  if (name === "jpg" || name === "jpeg" || name === "png") {
    // 上传的图片最多只能2M
    if (rawFile.size > 2097152) {
      MessageBox(Message.uploadFileSizeMessage, "error");
      return false;
    }

  } else {
    MessageBox(Message.uploadFileMessage, "error");
    return false;
  }
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
  let user2 = window.localStorage.getItem("user") as string;
  if (user2 != "undefined") {
    let userData = JSON.parse(user2);
    user.value = userData.avatar;
  }
})

</script>

<style scoped src="../Header/hearder.css"></style>


<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color) !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>