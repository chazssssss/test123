<template>
  <el-container>
      <el-aside width="210px">
        <div class="manage-system">饥荒后台管理系统</div>
        <el-menu
          default-active="2"
          class="el-menu-dont"
          background-color="#304156"
          text-color="#fff"
          unique-opened
          router
        >
          <el-submenu :index="menu.id + ''" v-for="menu in menuList" :key="menu.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{menu.menuTitle}}</span>
            </template>
            <el-menu-item :index="item.path" v-for="item in menu.children" :key="item.id">{{item.submenuTitle}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    <el-container>
      <el-header>
        <user-header />
        <bread-tag />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import UserHeader from '@/components/header/Header.vue'
import BreadTag from '@/components/header/tag.vue'

export default {
    data(){
        return {
            menuList: [
                {
                    id: "1",
                    menuTitle:"世界设置",
                    path: null,
                    children: [
                        {
                            id: "1-1",
                            submenuTitle:"房间设置",
                            path: "room",
                        },
                        {
                            id: "1-2",
                            submenuTitle:"森林与洞穴设置",
                            path: "forest",
                        },
                    ]
                },
                {
                    id: "2",
                    menuTitle:"模组设置",
                    path: null,
                    children: [
                      {
                            id: "2-1",
                            submenuTitle:"获取模组",
                            path: "deploy-mods",
                        },
                        {
                            id: "2-2",
                            submenuTitle:"配置模组",
                            path: "mods-setting",
                        },
                    ]
                },
            ]
        }
    },
    components:{
      UserHeader,
      BreadTag
    },
    methods: {
        handleOpen(){

        }
    }
};
</script>

<style lang='less' scoped>
.el-container {
  height: 100%;
}
.el-header{
  background-color: #ffffff;
  color: #304156;
  height: 90px !important;
  padding: 0;
}
.el-aside {
  .manage-system {
    font-size: 18px;
    color: #fff;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  background-color: #304156;
  color: #333;
  // height: calc(100vh - 60px);
}
.el-main {
  background-color: #f0f2f5;
  color: #333;
  height: calc(100vh - 60px);
}
.el-menu {
  background-color: #d3dce6;
  border-right: none;
}
</style>