

# Filter

```vue
<template>
  <miu-filter :configModel="filterModel" />
</template>
<script>
data() {
  return {
    filterModel: [
      {
        label: "名字",
        value: "name",
        type: "text",
      },
      {
        label: "昵称",
        value: "nickname",
        type: "text",
        placeholder: "在这里填写昵称",
      },
      {
        label: "性别",
        value: "sex",
        type: "select",
        options: [
          {
            label: "男",
            value: "0",
          },
          {
            label: "女",
            value: "1",
          },
        ],
      },
      {
        label: "职业",
        value: "job",
        type: "select",
        multiple: true,
        options: [
          {
            label: "前端",
            value: "front",
          },
          {
            label: "后端",
            value: "end",
          },
          {
            label: "大数据",
            value: "bigData",
          },
        ],
      },
      {
        label: "日期",
        value: "date",
        type: "daterange",
      },
    ],
  };
},
</script>
```

## filterOutput

![filter](/readmeIMG/filterUI.png)



# table

```vue
<miu-table
	v-bind="tableConfig"
	@sizeChange="onSizeChange"
	@pageChange="onPageChange"
>
    <template #headerHandler>
        <el-button type="primary">按钮1</el-button>
		<el-button type="danger">按钮2</el-button>
	</template>

	<template #action="slotProp">
   		<el-button @click="handleClick(slotProp)">
       		按钮
		</el-button>
	</template>
</miu-table>
<script>\
// table配置
      tableConfig: {
        tableName: '这是标题',
        tableData: [],
        pagination: {
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
            prop: 'city',
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
            type: 'image'
          },
          {
            label: '操作',
            slotName: 'action'
          }
        ]
      }

</script>

```

table显示的内容主要通过slot进行显示，如果没有slot名字，就默认显示文本
