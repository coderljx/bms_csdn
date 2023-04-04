<template>
  <div class="submitBody">
    <div style="width: 100%;height: auto">
      <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          mode="defult"
      />
    </div>
    <div class="middle" style="width: 50%;margin: 0 auto;">
      <div style="border: 1px solid #ccc">
        <Editor
            style="height: 500px; overflow-y: hidden;"
            :defaultConfig="editorConfig"
            mode="defult"
            @onCreated="handleCreated"
        />
      </div>
    </div>


    <div class="middle">
      <div>
        <el-form :model="form" label-width="120px">
          <el-form-item label="文章标签:">
            <el-button  @click="submits.addTitle">添加文章标签</el-button>
<!--            <el-tag-->
<!--                v-for="tag in submits.m.value"-->
<!--                :key="tag.moduleName"-->
<!--                class="mx-1"-->
<!--                closable-->
<!--            />-->
          </el-form-item>
          <el-form-item label="封面&摘要：" class="koko">
            <el-radio-group v-model="submits.coverPhoto.value" class="ml-4">
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
                <img v-if="imageUrl" :src="imageUrl" class="avatar"/>
                <el-icon class="avatar-uploader-icon">
                  <Plus/>
                </el-icon>
              </el-upload>
              <el-input v-model="coverTitle" class="textarea" type="textarea"
                        placeholder="摘要（必填）：会在推荐、列表等场景外露，帮助读者快速了解内容"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="文章摘要:">
            <el-input v-model="coverTitle"  type="textarea"
                      placeholder="请输入文章摘要"></el-input>
          </el-form-item>
          <el-form-item label="文章类型:">
            <el-radio-group v-model="submits.textType.value" class="ml-4">
              <el-radio label="1" size="large">转载</el-radio>
              <el-radio label="2" size="large">自制</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="可见范围:">
            <el-radio-group v-model="submits.releaseForm.value" class="ml-4">
              <el-radio label="1" size="large">全部可见</el-radio>
              <el-radio label="2" size="large">仅我可见</el-radio>
              <el-radio label="3" size="large">粉丝可见</el-radio>
              <el-radio label="4" size="large">VIP可见</el-radio>
            </el-radio-group>
          </el-form-item>

        </el-form>
      </div>

      <input type="file" id="file" multiple>
      <button @click="submit">submit</button>
    </div>


  </div>
</template>

<script lang="ts" setup>
import {httpGet, httpPost,apiUrl} from "@/axios/axios";
import {onMounted, ref,onBeforeUnmount,shallowRef} from "vue";
//@ts-ignore
import {Plus} from '@element-plus/icons-vue'
import {ApiReturn} from "@/utils/uutils"
//@ts-ignore
import {Submit} from "./Submit"
import { Editor, Toolbar} from '@wangeditor/editor-for-vue'



const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const formData = new FormData(); // 接口用来传输数据的
let id = null; // 用来区分本次提交是提交还是更新

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()


let submits;

onMounted(() => {
  submits = new Submit();
  // httpGet(apiUrl.titleApiUrl + "text/get",{}).then(data => {
  //   if (ApiReturn(data)) {
  //     id = data.data.data[0].id;
  //     valueHtml.value = data.data.data[0].detail;
  //   }
  // })
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

//组件创建的时候调用
const handleCreated = (editor : any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}


const submit = () => {
  let detail : string = editorRef.value.getHtml();
  formData.append("detail",detail);

  httpPost(apiUrl.titleApiUrl + "text/addText",formData);
}




</script>

<style scoped src="./Submit.css"></style>
<style src="@wangeditor/editor/dist/css/style.css"></style>