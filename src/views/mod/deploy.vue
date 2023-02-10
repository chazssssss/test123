<template>
  <div class="mod-page">
    <div class="mods-container">
      <div class="header-search">
        <el-input style="width: 55%" v-model="search" placeholder="搜索"></el-input>
        <el-button @click="getMods(search)">搜索</el-button>
      </div>
      <div class="search-content" v-if="modsList.length !== 0">
        <!-- <div class="no-search-msg" v-if="modsList.length == 0">暂无相关模组</div> -->
        <div class="search-mods">
          <div class="mod-item" v-for="(mod,key) in modsList" :key="key" @click="getModsDetail(mod.id)">
            <div class="mod-avatar">
              <img :src="mod.img" alt="">
            </div>
            <div class="mod-authname">
              <div class="item-title">{{mod.name}}</div>
              <div class="mod-status">已添加</div>
            </div>
          </div>
        </div>
        <div class="scroll-bar">
          ss
        </div>
      </div>
      
    </div>
    <div class="mods-detail">
      <div class="detail-header">
        <div class="detail-avatar">
          <img src="" alt="">
        </div>
        <div class="detail-dev-author">
          <div class="dev-title">Show Nicknames</div>
          <div class="author-dev">
            <div class="author-name">作者：Shang</div>
            <div class="else-content">与《饥荒：联机版》兼容</div>
          </div>
        </div>
      </div>
      <div class="detail-content">
        <div class="mod-version">当前版本：7:21 2020-03-25_1.0</div>
        <div class="description">111111</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchMods } from '../../api/user'
export default {
  data(){
    return {
      search: "",
      modsList: [
      ]
    }
  },
  methods:{
    getMods(t){
      console.log("搜索",t);
      getSearchMods({text: t}).then(res=>{
        console.log(res)
        this.modsList = res
      })
    },
    getModsDetail(id){

    }
  }
}
</script>

<style lang="less" scoped>
.mod-page {
  width: 100%;
  height: 100%;
  display: flex;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  .no-search-msg {
    text-align: center;
  }
  .search-content {
    display: flex;
  }
  .mods-container {
    width: 35%;
    height: 100%;
    margin-right: 20px;
    // background: yellow;
  }
  .header-search {
    display: flex;
    align-items: center;
  }
  .search-mods {
    // background: #299944;
    margin-top: 20px;
    height: calc(100% - 60px);
    overflow: scroll;
    .mod-item {
      height: 70px;
      background: #2b2319;
      padding: 10px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      margin-bottom: 10px;
      .mod-avatar {
        width: 60px;
        height: 60px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .mod-authname {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item-title {
          color: #b8b386;
          font-size: 18px;
        }
        .mod-status {
          color: #299944;
        }
      }
    }
  }
  .detail-header {
    height: 80px;
    // background: #b8b386;
    display: flex;
    align-items: center;
    .detail-avatar {
      width: 80px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    
    .detail-dev-author {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      .dev-title {
        font-size: 20px;
      }
      .author-name {
        font-size: 14px;
      }
      .else-content {
        font-size: 12px;
        margin-top: 5px;
      }
    }

  }
  
  .mod-version {
    margin: 10px 0 20px 0;
  }
}
</style>