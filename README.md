# admin-template

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

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
