<template>
  <div class="border">
    <div class="border-inner">
      <div class="b-f">
        <el-icon><LocationInformation/></el-icon>&nbsp;合同管理&nbsp; 》SOHT01
      </div>
    </div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <!--查询区域-->
          <div class="border-query">
            <div class="b-content">
              <div class="b-c">查询条件</div>
            </div>
            <div class="c-h">
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="grid-content ep-bg-purple"/>
                  合同号
                  <el-input v-model="input" style="width: 180px" placeholder="Please input"/>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content ep-bg-purple"/>
                  商务合同号
                  <el-input v-model="input" style="width: 180px" placeholder="Please input"/>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content ep-bg-purple"/>
                  合同状态
                  <el-input v-model="input" style="width: 180px" placeholder="Please input"/>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content ep-bg-purple"/>
                  是否经过法审
                  <el-input v-model="input" style="width: 180px" placeholder="Please input"/>
                </el-col>
              </el-row>

              <el-row :gutter="20" style="margin-top: 10px">
                <el-col :span="6">
                  <div class="grid-content ep-bg-purple"/>
                  签约客商名称
                  <el-input v-model="input" style="width: 180px" placeholder="Please input"/>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content ep-bg-purple"/>
                  签订人名称
                  <el-input v-model="input" style="width: 180px" placeholder="Please input"/>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content ep-bg-purple"/>
                  合同履约起始日
                  <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="Pick a day"
                      style="width: 130px"
                  />
                </el-col>
                <el-col :span="6">
                  <div class="grid-content ep-bg-purple"/>
                  合同履约终止日
                  <el-date-picker
                      v-model="value2"
                      type="date"
                      placeholder="Pick a day"
                      :disabled-date="disabledDate"
                      :shortcuts="shortcuts"
                      style="width: 130px"
                  />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-header>
        <el-main style="margin-top: 80px">
          <!--结果集-->
          <div class="border-result">
            <div class="b-content">
              <div class="b-c">记录集</div>
            </div>
            <div>
              <!-- 新增、保存、取消、删除按钮-->
              <div>
                <el-row>
                  <el-col :span="18">
                    <el-button style="margin-left: 10px" type="primary" @click="addNewRow">新增&nbsp;+</el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-button type="primary" @click="getEditedData">
                      <el-icon><Select/></el-icon>&nbsp;&nbsp;保存
                    </el-button>
                    <el-button type="primary" @click="resetTable">
                      <el-icon>
                        <RefreshLeft/>
                      </el-icon>&nbsp;&nbsp;取消
                    </el-button>
                    <el-button type="primary" @click="">
                      <el-icon>
                        <Delete/>
                      </el-icon>&nbsp;&nbsp;删除
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <!--table-->
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="selection" width="30"/>
                <el-table-column type="index" width="30"/>
                <el-table-column prop="name" label="合同号" width="150">
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
                <el-table-column prop="address" label="账套名称" width="150">
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
                <el-table-column prop="address" label="商务合同号" width="150">
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
                <el-table-column prop="address" label="合同状态" width="150">
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
                <el-table-column prop="address" label="签约客商代码" width="150">
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
                <el-table-column prop="address" label="签约客商名称" width="150">
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
                <el-table-column prop="address" label="签订部门代码" width="150">
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
                <el-table-column prop="address" label="签订部门名称" width="150">
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
                <el-table-column prop="address" label="签订人工号" width="150">
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
                <el-table-column prop="address" label="签订人名称" width="150">
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
                <el-table-column prop="address" label="合同起草人工号" width="150">
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
                <el-table-column prop="address" label="合同起草人名称" width="150">
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
                <el-table-column prop="address" label="合同末及审核人工号" width="150">
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
                <el-table-column prop="address" label="合同末级审核人姓名" width="150">
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
                <el-table-column prop="address" label="合同名称" width="150">
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
                <el-table-column prop="address" label="合同标的" width="150">
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
                <el-table-column prop="address" label="合同大类" width="150">
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
                <el-table-column prop="address" label="合同细类" width="150">
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
                <el-table-column prop="date" label="合同签订日期" width="150">
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
                <el-table-column prop="date" label="合同履约起始日" width="150">
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
                <el-table-column prop="date" label="合同履约终止日" width="150">
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
                <el-table-column prop="address" label="是否法审格式合同" width="150">
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
                <el-table-column prop="address" label="是否进过法审" width="150">
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
                <el-table-column prop="address" label="是否多次结算" width="150">
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
                <el-table-column prop="address" label="税率" width="150">
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
                <el-table-column prop="address" label="汇率" width="150">
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
                <el-table-column prop="address" label="币种" width="150">
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
                <el-table-column prop="address" label="附件地址" width="150">
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
                <el-table-column prop="address" label="来源系统" width="150">
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
                <el-table-column prop="address" label="归档标记" width="150">
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
                <el-table-column prop="address" label="租户代码" width="150">
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
                <el-table-column prop="address" label="租户中文名称" width="150">
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
                <el-table-column prop="address" label="记录创建者" width="150">
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
                <el-table-column prop="date" label="记录创建时刻" width="150">
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
                <el-table-column prop="address" label="记录修改者" width="150">
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
                <el-table-column prop="date" label="记录修改时刻" width="150">
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
                <el-table-column label="操作" width="120">
                  <template #default="scope">
                    <el-button size="small" type="danger" @click="removeRow(scope.$index)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 计数、分页-->
          <div class="demo-pagination-block" style="margin-top: 10px">
            <el-pagination
                v-model:current-page="currentPage4"
                v-model:page-size="pageSize4"
                :page-sizes="[100, 200, 300, 400]"
                :size="size"
                :disabled="disabled"
                :background="background"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import type {ComponentSize} from 'element-plus'

const input = ref('')
// 初始化表格数据
const tableData = ref([
  {
    date: '2024-05-03',
    name: 'Tom',
    address: 'Los Angeles',
    editMode: '' // 用于跟踪当前编辑的字段
  },
  {
    date: '2024-05-02',
    name: 'Tom',
    address: 'Los Angeles',
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
    const {editMode, ...rest} = item
    return rest
  })
}
//日期组件
const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: '今天',
    value: new Date(),
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
//分页、计数
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
//取消按钮
const resetTable = () => {
  window.location.reload() // 完全刷新页面（会丢失Vue状态）
}
</script>