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
                <div class="Qcolor">{{ content.userInfo.value.userName }}</div>
                <div>
                  <span class="Qcolor">博龄 : {{ content.userInfo.value.createTimeStr }}</span>
                </div>
              </div>

            </div>
            <div class="userHeader02">
              <div class="Txtcenter">
                <div>{{ content.userInfo.value.originalityCount }}</div>
                <div>原创</div>
              </div>
              <div class="Txtcenter">
                <div>???</div>
                <div>周排名</div>
              </div>
              <div class="Txtcenter">
                <div>???</div>
                <div>总排名</div>
              </div>
              <div class="Txtcenter">
                <div>{{ content.userInfo.value.viewCount }}</div>
                <div>访问量</div>
              </div>
              <div class="Txtcenter">
                <div>???</div>
                <div>等级</div>
              </div>
            </div>
            <div class="line"></div>
            <div class="userHeader03">
              <div class="Txtcenter">
                <div>???</div>
                <div>积分</div>
              </div>
              <div class="Txtcenter">
                <div>???</div>
                <div>粉丝</div>
              </div>
              <div class="Txtcenter">
                <div>???</div>
                <div>获赞</div>
              </div>
              <div class="Txtcenter">
                <div>???</div>
                <div>评论</div>
              </div>
              <div class="Txtcenter">
                <div>???</div>
                <div>收藏</div>
              </div>
            </div>
            <div class="Txtcenter btn001">
              <el-button class="follow" type="primary" round @click="content.follow()">{{
                  content.followBtnText.value
                }}
              </el-button>
              <el-button class="send" type="success" round>私信</el-button>
            </div>
          </div>
        </div>
      </div>

      <!--        搜索组件 -->
      <div class="content-left03 wid95 whiteColor">
        <div style="width: 80%;margin: 10px auto;">
          <el-input v-model="input" placeholder="搜博主文章"/>
        </div>
      </div>

      <!--      热门文章-->
      <div class="whiteColor wid95">
        <div class=" content-left04">
          <div class="hot">热门文章</div>
          <div class="hotLinks" v-for="item in content.hotText.value" :key="item">
            <a href="#">
              <span @click="content.clickHotText(item)">{{ item.coverTitle }}</span>
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
    <div class="content-midd">


      <div style="width: 100%" class="whiteColor" id="content-midd">
        <!--    占位元素，有些标签默认有magrin 如果不设置i这个的话，会直接距离顶部有一段距离，有这个元素占在这里就好一些
                这个元素不占用位置，height设置为0
        -->
        <div style="visibility: hidden;height: 0">0000</div>
        <!--      内容主体部分  -->
        <div v-html="content.detailText.value"
             class="html" style="padding: 0 10px;"
        ></div>
        <div class="userInfo cursorHoud whiteColor">
          <div class="html">
            <div class="" style="width: 40px">
              <el-avatar :size="40" src="https://empty">
                <img
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                />
              </el-avatar>
            </div>
            <div class="Qcolor Txtcenter" style="width: 100px">{{ content.userInfo.value.userName }}</div>
            <div class="" style="width: 100px">
              <el-button class="follow" type="primary" round @click="content.follow()">{{
                  content.followBtnText.value
                }}
              </el-button>
            </div>
            <!--        分割-->
            <div style="flex : 1"></div>


            <div class="wid68px">
              <img class="imgLimit24"
                   src="../../../../src/assets/zan.png"
              />
              <span class="marL5">123</span>
            </div>
            <div class="wid68px">
              <img class="imgLimit24"
                   src="../../../../src/assets/cai.png"
              />
              <span class="marL5">123</span>
            </div>
            <div class="wid68px">
              <img class="imgLimit24"
                   src="../../../../src/assets/newCollectBlack.png"
              />
              <span class="marL5">123</span>
            </div>
            <div class="wid68px">
              <img class="imgLimit24"
                   src="../../../../src/assets/newRewardBlack.png"
              />
              <span class="marL5">123</span>
            </div>
            <div class="wid68px">
              <img class="imgLimit24"
                   src="../../../../src/assets/newComment2021Black.png"
              />
              <span class="marL5">123</span>
            </div>
          </div>

        </div>
      </div>


      <!--      评论框-->
      <div class="whiteColor" style="height: 1200px">
        <div class="wid95 commentDiv">
          <div class="cursorHoud" @click="drawer = true">
            <h3 style="display: inline-block;margin: 0;">评论</h3>
            <span style="margin-left: 10px">{{ content.commentTotal.value }}条</span>
            <img style="height: 14px" src="../../../assets/right.png">
            <el-button style="float: right">写评论</el-button>

            <el-drawer
                v-model="drawer"
                title="评论"
                direction="rtl"
                style="margin-top: 50px"
            >
              <!--              写评论部分-->
              <div style="height: 130px">
                <div class="commentContent">
                  <div class="commentContent001"><img src="../../../assets/newComment2021Black.png"
                                                      class="imgLimit24 commentImg"></div>
                  <div style="flex: 1">
                    <el-input
                        v-model="textarea"
                        :rows="2"
                        type="textarea"
                        placeholder="请输入评论,字数限制200"
                        maxlength="200"
                    />
                    <div style="margin-top: 10px">
                      <el-button>提交</el-button>
                    </div>
                  </div>
                </div>
              </div>

              <!--              显示评论-->
              <div class="commentContent" v-for="(item,index) in content.commentData.value.foors" :key="index">

                <div style="flex: 1">
                  <div v-for="(data,i) in content.commentData.value.listMap[item] " :key="i">
                    <div v-if="data.parentComentId == null" class="comment003">
                      <div class=" commentContent">
                        <div class="commentContent001">
                          <img src="../../../assets/newComment2021Black.png" class="imgLimit24 commentImg">
                        </div>
                        <div >
                          <span class=" fontSizeLimit13"> {{ data.userName }} </span>
                          <span class=" fontSizeLimit13" style="margin-left: 5px"> {{ data.createTime }} </span>
                          <div>
                            {{ data.comment }}
                          </div>
                        </div>
                      </div>

                      <div>
                        <img src="../../../assets/zan.png" class="imgLimit20X20">
                      </div>
                    </div>
                    <div v-else class="comment003" style="margin-top: 10px;padding-left: 40px;">
                      <div class="commentContent">
                        <div class="commentContent001">
                          <img src="../../../assets/newComment2021Black.png" class="imgLimit24 commentImg">
                        </div>
                        <div >
                          <span class=" fontSizeLimit13"> {{ data.userName }} </span>
                          <span class=" fontSizeLimit13" style="margin-left: 5px"> {{ data.createTime }} </span>
                          <span class=" fontSizeLimit13"> 回复: {{ data.parentUserName }}</span>
                          <div>
                            {{ data.comment }}
                          </div>
                        </div>

                      </div>
                      <div>
                        <img src="../../../assets/zan.png" class="imgLimit20X20">
                      </div>
                    </div>


                  </div>

                </div>
              </div>


            </el-drawer>


          </div>


        </div>
      </div>


    </div>


    <!--    内容信息右侧-->
    <div class="content-right whiteColor">3</div>


  </div>


</template>

<script setup>
import headers from "@/components/Header/header.vue"
import {Content} from "../C/content"
import {nextTick, onBeforeUnmount, onMounted, ref} from "vue";

const content = new Content();
const drawer = ref(false); // 是否打开抽屉， 用来显示评论信息


onMounted(() => {
  /**
   * 在页面渲染后，获取width，设置用户信息的width（根据不同的屏幕大小动态渲染）
   * @type {HTMLElement}
   */
  let elementData = document.getElementById("content-midd");
  let width = elementData.offsetWidth;


  let userInfo = document.getElementsByClassName("userInfo");
  userInfo.item(0).setAttribute("style", "height : 60px;width : " + width + "px");

  /**
   *   给当前窗口添加事件监听
   *
   */
  window.addEventListener("scroll", () => {
    let element = document.getElementById("content-midd");
    // 获取渲染的v-html 的总高度
    let height = element.offsetHeight;
    // 获取当前窗口的 y 轴距离顶部的长度
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    // 当前浏览器的可视化高度
    let windHeight = document.documentElement.clientHeight;

    /**
     *     如果当前滚动小于整个元素的height，证明当前窗口还没有浏览到最底下
     *     此时用户信息就要用position ： flex 固定显示
     */
    if (windHeight + scrollTop < height) {
      userInfo.item(0).classList.add("userInfoFixed");
    } else {
      userInfo.item(0).classList.remove("userInfoFixed");
    }

    // //变量scrollTop是滚动条滚动时，距离顶部的距离
    // var scrollTop1 = document.documentElement.scrollTop||document.body.scrollTop;
    // //变量windowHeight是可视区的高度
    // var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // //变量scrollHeight是滚动条的总高度
    // var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
    // //滚动条到底部的条件
    // if(scrollTop1 +windowHeight==scrollHeight){
    //   //写后台加载数据的函数
    //   console.log("距顶部"+scrollTop1+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
    // }


  });
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll');
})

nextTick(() => {

});


</script>

<style scoped src="./content.css">
</style>