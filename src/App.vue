<template>
  <div id="app">
    <miu-filter
      :configModel="filterModel"
      @filter="onFilter"
    />
    <miu-table
      v-bind="tableConfig"
      @sizeChange="onSizeChange"
      @pageChange="onPageChange"
    >
      <template #headerHandler>
        <el-button type="primary">按钮1</el-button>
        <el-button type="danger">按钮2</el-button>
      </template>

      <template #image="slotProp">
        <img :src="slotProp.scope.row.image" />
      </template>
    </miu-table>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Filter from '@/components/filter.vue'
import Table from '@/components/table.vue'
import MockTableData from '@/utils/data'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MiuFilter: Filter,
    MiuTable: Table
  },
  data() {
    return {
      filterModel: [
        {
          label: '名字',
          field: 'name',
          type: 'text'
        },
        {
          label: '昵称',
          field: 'nickname',
          type: 'text',
          placeholder: '在这里填写昵称'
        },
        {
          label: '性别',
          field: 'sex',
          type: 'select',
          options: [
            {
              label: '男',
              value: '0'
            },
            {
              label: '女',
              value: '1'
            }
          ]
        },
        {
          label: '职业',
          field: 'job',
          type: 'select',
          multiple: true,
          options: [
            {
              label: '前端',
              value: 'front'
            },
            {
              label: '后端',
              value: 'end'
            },
            {
              label: '大数据',
              value: 'bigData'
            }
          ]
        },
        {
          label: '日期',
          field: 'date',
          type: 'daterange'
        }
      ],
      tableConfig: {
        tableName: '这是标题',
        tableData: MockTableData.list,
        pageData: {
          page: 1,
          size: 10,
          total: 100
        },
        showSelection: true,
        propList: [
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'region',
            label: '地区'
          },
          {
            prop: 'province',
            label: '省份'
          },
          {
            prop: 'datetime',
            label: '日期'
          },
          {
            prop: 'image',
            label: '图像',
            slotName: 'image'
          }
        ]
      }
    }
  },
  methods: {
    onFilter(filterData) {
      console.log(filterData)
    },
    onSizeChange(size) {
      console.log(`size改变${size}`)
    },
    onPageChange(page) {
      console.log(`page改变${page}`)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
