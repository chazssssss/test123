<template>
  <div class="myhome-page">
    <div class="room-contain">
      <div class="detail-update">
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基础" name="first">基础</el-tab-pane>
          <el-tab-pane label="高级" name="second">高级</el-tab-pane>
          <el-tab-pane label="群组和管理员" name="third">群组和管理员</el-tab-pane>
          <el-tab-pane label="服务器" name="fourth">服务器</el-tab-pane>
        </el-tabs> -->
        <el-form
          label-position="left"
          :model="roomUpdateForm"
          ref="ruleForm"
          label-width="100px"
          class="room-rule-form"
        >
          <el-form-item v-for="(item) in houseInfoList" 
            :key="item.id"
            class="room-set" :label="item.setName">
            <el-input v-if="item.type == 'INPUT'" class="room-input"></el-input>
            <el-radio-group 
              v-show="item.type == 'RADIO'"
              v-model="gameCheck"
              v-for="(game, key) in gameModule"
              :key="key"
            >
              <el-radio-button :label="game"></el-radio-button>
            </el-radio-group>
            <el-input v-if="item.type == 'TEXTAREA'" type="textarea" class="room-input"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >确认</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="chamber-detail">
        <div class="des-title">描述</div>
        <div class="dex-content">
          <div class="content-label">{{ roomDescript.authName }}</div>
          <div class="content-main-content">
            {{ roomDescript.narration }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { data } from "./config/index.js"
export default {
  data() {
    return {
      roomUpdateForm: {},
      houseInfoList: data,
      gameCheck: "无尽",
      gameModule: ["无尽", "生存", "荒野"],
      roomDescript: {
        authName: "房间名称",
        narration: "大厅列表中最多显示 35 个汉字，英文数字稍多一些。"
      },
    };
  },
  methods: {},
  mounted() {
    let self = this;
    (function () {
      let focusItem = $(".room-set");
      for (let i = 0; i < focusItem.length; i++) {
        // console.log(focusItem[i])
        focusItem[i].onmouseover = function () {
          self.roomDescript.authName = $(this).children("label")[0].innerHTML;
          // self.roomDescript.narration = self.roomDescript.allDescriptions[i]
        };
      }
    })();
  },
};
</script>

<style lang="less" scoped>
.myhome-page {
  // background: #f4f4f4;
  height: 100%;
}
.room-contain {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: scroll;
  display: flex;

  .detail-update {
    width: 65%;
    padding: 20px 40px;
    box-sizing: border-box;
    overflow: scroll;
  }
  .chamber-detail {
    width: 35%;
    background: #ecf5ff;
    border-radius: 10px;
    overflow: hidden;
    .des-title {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      // background-color: #d5d3d1;
      background-color: #81b9f1;
    }
    .dex-content {
      padding: 30px;
      .content-label {
        margin: 20px 0;
      }
    }
  }
}
</style>