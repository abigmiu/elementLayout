<template>
  <el-card class="table">
    <!-- hader -->
    <div
      slot="header"
      class="flex justify-between items-center"
    >
      <div class="title">{{ tableName }}</div>
      <div
        class="header-handler flex justify-between items-center"
      >
        <slot name="headerHandler"></slot>
      </div>
    </div>
    <!-- table -->
    <el-table :data="tableData">
      <el-table-column
        v-if="showSelection"
        type="selection"
      >
      </el-table-column>

      <el-table-column
        v-for="item in propList"
        :key="item.prop"
        v-bind="item"
      >
        <template #default="scope">
          <slot :name="item.slotName" :scope="scope">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <!-- paganition -->
    <el-pagination
      v-if="showPagination"
      :page-size="pageData.size"
      :current-page="pageData.page"
      :total="pageData.total"
      @size-change="onSizeChange"
      @current-change="onPageChange"
      layout="total, sizes, prev, pager, next"
    >
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  props: {
    tableName: {
      type: String,
      default: ''
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    showSelection: {
      type: Boolean,
      default: false
    },
    pageData: {
      type: Object,
      default: () => ({
        page: 1,
        size: 10,
        total: 0
      })
    },
    tableData: {
      type: Array,
      default: () => []
    },
    propList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onSizeChange(size) {
      this.$emit('sizeChange', size)
    },
    onPageChange(page) {
      this.$emit('pageChange', page)
    },
    log(val) {
      console.log(val)
    }
  }
}
</script>

<style>
.table {
  margin-top: 40px;
}
</style>
