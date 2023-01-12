<template>
  <div class="submitBody">
    <div></div>
    <div id="tinydemo middle" style="width: 100%;">
      <Editor :init="{}"/>
    </div>
    <div class="middle">

      <div>
        <el-form :model="form" label-width="120px">
          <el-form-item label="封面&摘要：" class="koko">
            <el-radio-group v-model="coverPhoto" class="ml-4">
              <el-radio label="1" size="large">单图</el-radio>
              <el-radio label="2" size="large">三图</el-radio>
              <el-radio label="3" size="large">无封面 <span style="color: red">*</span></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <div class="coverPhoto">
              <el-upload
                  class="avatar-uploader"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
              <el-input v-model="coverTitle" class="textarea" type="textarea" placeholder="摘要（必填）：会在推荐、列表等场景外露，帮助读者快速了解内容"></el-input>
            </div>
          </el-form-item>
        </el-form>
      </div>

      <input type="file" id="file" multiple>
      <button @click="s">submit</button>
    </div>


  </div>
</template>

<script lang="ts" setup>
import {httpGet,httpPost} from "@/axios/axios";
import Editor from '@tinymce/tinymce-vue'
import tinymce from "tinymce";
import {onMounted, ref} from "vue";
import { Plus } from '@element-plus/icons-vue'
const api : string = "titleService/api";
const coverPhoto = ref();
const imageUrl = ref(false);
const coverTitle = ref("");

const s = () => {
  var elementById = document.getElementById("file");
  let data = elementById.files[0];
  let data2 = elementById.files[1];
  console.log(data);
  console.log(data2);

  var formdata = new FormData();
  formdata.append("koko",data,"seq1");
  formdata.append("koko",data2,"seq2");


  // httpPost(api + "/text/addText/1/31",  formdata ).then(data => {
  //
  // })
}

</script>

<style scoped>
@import "Submit.css";
</style>