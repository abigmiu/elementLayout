<template>
  <el-card>
    <!-- 头部 -->
    <div
      slot="header"
      style="display: flex; justify-content: space-between; align-item: center;"
    >
      <span>{{ tableName || '列表' }}</span>
      <div class="flex items-center justify-between">
        <slot></slot>
      </div>
    </div>
    <!-- 表格· -->
    <el-table
      :data="tableData"
      @selection-change="handleSelectionChange"
    >
      <!-- 复选框 -->
      <el-table-column
        type="selection"
        v-if="showSelection && tableData.length"
      >
      </el-table-column>

      <el-table-column
        v-for="(item, index) in propList"
        :key="index"
        :label="item.label"
        :width="item.width"
        :prop="item.prop"
      >
        <template #default="scope">
          <!-- 图片 -->
          <template v-if="item.type === 'image'">
            <img :src="scope.row[item.prop]" alt="" />
          </template>
          <!-- 可以自己拓展 -->
          <!-- 默认情况使用插槽 -->
          <slot
            v-else
            :name="item.slotName"
            :row="scope.row"
          >
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-if="showPagination && pagination.total"
      :total="pagination.total"
      :current-page="pagination.page"
      :page-size="pagination.size"
      @size-change="handleSizeChange"
      @page-change="handlePageChange"
    >
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  props: {
    // 数据
    tableData: {
      type: Array,
      default: () => []
    },
    // 配置
    propList: {
      type: Array,
      default: () => []
    },
    // 显示多选框
    showSelection: {
      type: Boolean,
      default: false
    },
    // 显示分页
    showPagination: {
      type: Boolean,
      default: true
    },

    // 分页数据
    pagination: {
      type: Object,
      default: () => ({
        size: 10,
        page: 1,
        total: 0
      })
    },
    // 标题
    tableName: {
      type: String,
      default: ''
    }
  },
  methods: {
    /**
     * 多选框选择改变
     */
    handleSelectionChange(val) {
      this.$emit('selection-change', val)
    },

    /**
     * 分页size改变
     */
    handleSizeChange(val) {
      this.$emit('size-change', val)
    },

    /**
     * 分页page改变
     */
    handlePageChange(val) {
      this.$emit('page-change', val)
    }
  }
}
</script>

<style></style>
