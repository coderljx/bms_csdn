<template>
  <div style=" clear: both; content: ''"></div>
  <div class="listDataTemplate">
    <div class="listDataTemplateDiv" v-for="(item,index) in 3">
      <div class="listDataTemplateDiv-padd">
        <div class="fontSizeLimit13">一一哥Sun  发布博客 3小时前 </div>
        <div class="marTop10 marBo10"><a>剖析valueOf方法，深入探究Integer缓存实现机制</a></div>
        <div class="listDataTemplateDiv-All">
          <div class="listDataTemplateDiv-left">
            <div class="gensuiParent">
              <img class="gensuiParent" src="../../../src/assets/20230112025204.jpg">
            </div>
          </div>
          <div class="listDataTemplateDiv-right">
            <a><p class="txt">经过上面壹哥给大家的分析，你现在是不是已经对Integer的缓存机制有了深入的认识呢？最后咱们再把上述内容总结一下，看看该如何清晰地回答面试官的问题吧，对于这类面试题，我们可以这么回答：在我们给Integer对象赋值时，其实是调用了Integer类的valueOf这个静态方</p></a>
            <div class="txtBtn">
              <p>
                <img class="img16X16" src="../../../src/assets/zan.png">
                <span class="txt2">102赞</span>
              </p>
              <p>
                <img class="img16X16" src="../../../src/assets/cai.png">
                <span class="txt2">踩</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<!--显示的列表数据，封装成组件-->
<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
  listData : {
    type : String,
    default : ""
  }
});

// const listData = JSON.parse(props.listData);

</script>

<style scoped>
.listDataTemplate {
  width: 100%;
  margin-top: 10px;
}
.listDataTemplateDiv {
  width: 100%;
  height: 170px;
  border-bottom: 1px solid rgb(240, 240, 242);
}
.listDataTemplateDiv-padd {
  padding: 15px 0 0;
}

.listDataTemplateDiv-All {
  width: 100%;
  height: 90px;
  display: flex;
}
.listDataTemplateDiv-All .listDataTemplateDiv-left {
  width: 30%;
}
</style>