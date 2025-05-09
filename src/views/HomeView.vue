<template>
  <div class="common-layout">
    <el-container>
<!--      顶部菜单-->
      <el-header style="padding: 0 0 0 0">
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >

          <el-menu-item index="1"><span>LOGO</span><span class="title">XXXXXXXXXXXXXX</span></el-menu-item>
          <el-menu-item index="5" style="margin-left: 600px">
            <el-input
                v-model="input"
                style="width: 240px"
                placeholder="请输入页面号"
                :prefix-icon="Search"
            />
          </el-menu-item>
          <el-sub-menu index="2" Style="margin-left: 50px">
            <template #title>用户姓名</template>
            <el-menu-item index="2-1">个人信息</el-menu-item>
            <el-menu-item index="2-2">注销</el-menu-item>
            <el-menu-item index="2-3">锁屏</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-container>
<!--        左侧菜单-->
        <el-aside>
            <el-col :span="24">
              <el-menu
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  class="el-menu-vertical-demo"
                  default-active="2"
                  text-color="#fff"
                  @open="handleOpen"
                  @close="handleClose"
                  style="max-height: 100vh; overflow-y: auto;width: fit-content; min-width: 280px;"
              >
                <el-sub-menu index="1">
                  <template #title><el-icon><FolderChecked /></el-icon>合同管理</template>
                  <el-menu-item index="1-1">合同看板</el-menu-item>
                  <el-menu-item index="1-2">合同维护</el-menu-item>
                  <el-menu-item index="1-3">合同审批</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                  <template #title><el-icon><Coin /></el-icon>财务管理</template>
                  <el-sub-menu index="2-1">
                    <template #title><el-icon><FolderChecked /></el-icon>总账管理</template>
                    <el-sub-menu index="2-1-1">
                      <template #title><el-icon><FolderChecked /></el-icon>凭证管理</template>
                      <el-menu-item index="2-1-1-1">凭证制单</el-menu-item>
                      <el-menu-item index="2-1-1-2">凭证处理</el-menu-item>
                      <el-menu-item index="2-1-1-3">分录序时</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2-1-2">
                      <template #title><el-icon><FolderChecked /></el-icon>总分类账</template>
                      <el-menu-item index="2-1-2-1">科目总账</el-menu-item>
                      <el-menu-item index="2-1-2-2">科目余额账</el-menu-item>
                      <el-menu-item index="2-1-2-3">辅助核算科目总账</el-menu-item>
                      <el-menu-item index="2-1-2-4">辅助核算科目余额账</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2-1-3">
                      <template #title><el-icon><FolderChecked /></el-icon>明细分类账</template>
                      <el-menu-item index="2-1-3-1">科目明细账</el-menu-item>
                      <el-menu-item index="2-1-3-2">现金流量汇总表</el-menu-item>
                      <el-menu-item index="2-1-3-3">现金流量明细表</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2-1-4">
                      <template #title><el-icon><FolderChecked /></el-icon>日记账</template>
                      <el-menu-item index="2-1-4-1">科目日记账</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2-1-5">
                      <template #title><el-icon><FolderChecked /></el-icon>账龄管理</template>
                      <el-menu-item index="2-1-5-1">预收账款账龄明细</el-menu-item>
                      <el-menu-item index="2-1-5-2">预收账款账龄分析</el-menu-item>
                      <el-menu-item index="2-1-5-3">预付账款账龄明细</el-menu-item>
                      <el-menu-item index="2-1-5-4">预付账款账龄分析</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2-1-6">
                      <template #title><el-icon><FolderChecked /></el-icon>期末管理</template>
                      <el-menu-item index="2-1-6-1">资材领用结转</el-menu-item>
                      <el-menu-item index="2-1-6-2">固资月末抛账</el-menu-item>
                      <el-menu-item index="2-1-6-3">应付薪酬结转</el-menu-item>
                      <el-menu-item index="2-1-6-4">制造费用结转</el-menu-item>
                      <el-menu-item index="2-1-6-5">汇兑损益结转</el-menu-item>
                      <el-menu-item index="2-1-6-6">期间损益结转</el-menu-item>
                      <el-menu-item index="2-1-6-7">年末余额结转</el-menu-item>
                      <el-menu-item index="2-1-6-8">凭证断号整理</el-menu-item>
                      <el-menu-item index="2-1-6-9">财务总账报表</el-menu-item>
                    </el-sub-menu>
                  </el-sub-menu>
                  <el-sub-menu index="2-2">
                    <template #title><el-icon><FolderChecked /></el-icon>应收管理</template>
                    <el-sub-menu index="2-2-1">
                      <template #title><el-icon><FolderChecked /></el-icon>客户信用</template>
                      <el-menu-item index="2-2-1-1">客户信用申请</el-menu-item>
                      <el-menu-item index="2-2-1-2">客户信用审批</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2-2-2">
                      <template #title><el-icon><FolderChecked /></el-icon>贷款管理</template>
                      <el-menu-item index="2-2-2-1">网银流水导入</el-menu-item>
                      <el-menu-item index="2-2-2-2">网银流水收款</el-menu-item>
                      <el-menu-item index="2-2-2-3">收款单管理</el-menu-item>
                      <el-menu-item index="2-2-2-4">转抹账管理</el-menu-item>
                      <el-menu-item index="2-2-2-5">客户款项分配</el-menu-item>
                      <el-menu-item index="2-2-2-6">客户资金余额账</el-menu-item>
                      <el-menu-item index="2-2-2-7">客户资金明细账</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2-2-3">
                      <template #title><el-icon><FolderChecked /></el-icon>结算管理</template>
                    </el-sub-menu>
                  </el-sub-menu>
                  <el-sub-menu index="2-3">
                    <template #title><el-icon><FolderChecked /></el-icon>应付管理</template>

                  </el-sub-menu>
                  <el-sub-menu index="2-4">
                    <template #title><el-icon><FolderChecked /></el-icon>票据管理</template>

                  </el-sub-menu>
                  <el-sub-menu index="2-5">
                    <template #title><el-icon><FolderChecked /></el-icon>资产管理</template>

                  </el-sub-menu>
                </el-sub-menu>
              </el-menu>
            </el-col>
        </el-aside>
<!--        右侧内容-->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {Search,Avatar,CirclePlus,} from '@element-plus/icons-vue'
import {Document, Menu as IconMenu, Location, Setting} from '@element-plus/icons-vue'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const input = ref('')


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
</style>