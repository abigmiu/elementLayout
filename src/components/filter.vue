<template>
  <el-card>
    <el-form ref="filterForm" :model="filterData">
      <el-row :gutter="20">
        <el-col
          :span="8"
          v-for="item in configModel"
          :key="item.value"
        >
          <el-form-item
            :label="item.label"
            :prop="item.value"
            label-width="80px"
          >
            <!-- 文本输入框 -->
            <el-input
              v-model="filterData[item.value]"
              v-if="item.type === 'text'"
              :placeholder="item.placeholder"
            >
            </el-input>
            <!-- 选择器 -->
            <el-select
              v-if="item.type === 'select'"
              v-model="filterData[item.value]"
              :placeholder="item.placeholder"
              :multiple="item.multiple"
              class="w-full"
            >
              <el-option
                v-for="option in item.options"
                :key="option.value"
                :value="option.value"
                :label="option.label"
              >
              </el-option>
            </el-select>
            <!-- 日期范围选择器 -->
            <el-date-picker
              v-if="item.type === 'daterange'"
              v-model="filterData[item.value]"
              type="daterange"
              value-format="timestamp"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 100%"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="flex flex-end">
        <el-button @click="reset">
          重置
        </el-button>
        <el-button type="primary" @click="submit">
          搜索
        </el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script>
export default {
  props: {
    configModel: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      filterData: {}
    }
  },

  created() {
    this.initDefaultData()
  },

  methods: {
    // 搜索提交
    submit() {
      this.$emit('filter', this.filterData)
    },

    // 重置
    reset() {
      this.$refs.filterForm.resetFields()
      this.submit()
    },

    // 给filterData赋值默认值
    initDefaultData() {
      const stringType = ['text']
      const arrayType = ['daterange']

      /**
       * @type string or array
       */
      const setDafault = (value, type) => {
        if (type === 'array') {
          this.$set(this.filterData, value, [])
        } else if (type === 'string') {
          this.$set(this.filterData, value, '')
        }
      }

      this.configModel.forEach((configItem) => {
        const { type, value } = configItem

        if (stringType.includes(type)) {
          setDafault(value, 'string')
        } else if (arrayType.includes(type)) {
          setDafault(value, 'array')
        } else if (type === 'select') {
          const { multiple } = configItem
          if (!multiple) {
            setDafault(value, 'string')
          } else {
            setDafault(value, 'array')
          }
        }
      })
    }
  }
}
</script>

<style></style>
