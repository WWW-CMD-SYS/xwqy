<!--  页面背景公共组件-->
<!--    <Border/>
    <BorderQuery/>
    <BorderResult/>-->
<!--  外部框架组件-->
<template>
    <div class="border">
      <div class="border-inner"><div class="b-f"><el-icon><LocationInformation /></el-icon> 页面名称 》SOHT01</div></div>
      <!--查询区域-->
      <div class="border-query">
        <div class="b-content"><div class="b-c">查询条件</div></div>
        <div class="c-x">
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
              XX<el-input v-model="input" style="width: 240px" placeholder="Please input" />
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
              XX<el-input v-model="input" style="width: 240px" placeholder="Please input" />
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
              XX<el-input v-model="input" style="width: 240px" placeholder="Please input" />
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
              XX<el-input v-model="input" style="width: 240px" placeholder="Please input" />
            </el-col>
          </el-row>
        </div>
      </div>
      <!--结果集-->
      <div class="border-result">
        <div class="b-content"><div class="b-c">记录集</div></div>
<!--        <div class="container">
                          <div class="floating-button">
                            <el-button type="primary"  @click="addNewRow" >新增 +</el-button>
                          </div>
                          <el-table :data="tableData" style="width: 100%" :border="true">
                            <el-table-column prop="date" label="Date" width="180">
                              <template #default="scope">
                                <div v-if="scope.row.editMode !== 'date'" @click="enterEditMode(scope.row, 'date')">
                                  {{ scope.row.date || '点击编辑' }}
                                </div>
                                <el-input
                                    v-else
                                    v-model="scope.row.date"
                                    @blur="exitEditMode(scope.row, 'date')"
                                    @keyup.enter="exitEditMode(scope.row, 'date')"
                                    autofocus
                                />
                              </template>
                            </el-table-column>
                            <el-table-column prop="name" label="Name" width="180">
                              <template #default="scope">
                                <div v-if="scope.row.editMode !== 'name'" @click="enterEditMode(scope.row, 'name')">
                                  {{ scope.row.name || '点击编辑' }}
                                </div>
                                <el-input
                                    v-else
                                    v-model="scope.row.name"
                                    @blur="exitEditMode(scope.row, 'name')"
                                    @keyup.enter="exitEditMode(scope.row, 'name')"
                                    autofocus
                                />
                              </template>
                            </el-table-column>
                            <el-table-column prop="address" label="Address">
                              <template #default="scope">
                                <div v-if="scope.row.editMode !== 'address'" @click="enterEditMode(scope.row, 'address')">
                                  {{ scope.row.address || '点击编辑' }}
                                </div>
                                <el-input
                                    v-else
                                    v-model="scope.row.address"
                                    @blur="exitEditMode(scope.row, 'address')"
                                    @keyup.enter="exitEditMode(scope.row, 'address')"
                                    autofocus
                                />
                              </template>
                            </el-table-column>
                            <el-table-column label="操作" width="120">
                              <template #default="scope">
                                <el-button
                                    size="small"
                                    type="danger"
                                    @click="removeRow(scope.$index)"
                                >
                                  删除
                                </el-button>
                              </template>
                            </el-table-column>
                          </el-table>

                          <div style="margin-top: 20px">
                            <el-button type="primary" @click="getEditedData">保存</el-button>
                            <pre>{{ editedData }}</pre>
                          </div>
                        </div>-->
      </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
// 初始化表格数据
const tableData = ref([
  {
    date: '2024-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    editMode: '' // 用于跟踪当前编辑的字段
  },
  {
    date: '2024-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    editMode: ''
  }
])

const editedData = ref<any[]>([])

// 添加新行
const addNewRow = () => {
  tableData.value.push({
    date: '2025-04-27',
    name: '小查查',
    address: '苏州市',
    editMode: ''
  })
}

// 删除行
const removeRow = (index: number) => {
  tableData.value.splice(index, 1)
}

// 进入编辑模式
const enterEditMode = (row: any, field: string) => {
  row.editMode = field
}

// 退出编辑模式
const exitEditMode = (row: any, field: string) => {
  row.editMode = ''
  console.log(`字段 ${field} 已更新为:`, row[field])
}

// 获取所有数据
const getEditedData = () => {
  editedData.value = tableData.value.map(item => {
    const { editMode, ...rest } = item
    return rest
  })
}
</script>