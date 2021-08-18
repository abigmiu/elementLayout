<template>
  <div id="app">
    <miu-filter :configModel="filterModel" @filter="onFilter" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Filter from "@/components/filter.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MiuFilter: Filter,
  },
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
  methods: {
    onFilter(filterData) {
      console.log(filterData);
    },
  },
};
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
