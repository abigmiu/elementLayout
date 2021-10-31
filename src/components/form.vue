<template>
  <div>
    <el-form
      ref="formRef"
      :label-position="labelPosition"
      :model="innerFormData"
      :label-width="labelWidth"
    >
      <el-form-item
        v-for="item in items"
        v-show="
          item.visiable === undefined ? true : item.visiable
        "
        :label="item.label"
        :key="item.value"
        :rules="
          item.rules || [
            {
              required: item.required,
              message: item.message
            }
          ]
        "
      >
        <!-- 数字输入框 -->
        <template v-if="item.type === number">
          <el-input-number
            v-model.number="innerFormData[item.value]"
            controls-position="right"
            :min="item.min"
            :max="item.max"
            :readonly="item.readonly"
            :placeholder="item.placeholder"
            @change="handleChange(item)"
          ></el-input-number>
        </template>
        <!-- 输入框 -->
        <template v-if="item.type === 'input'">
          <el-input
            v-model="innerFormData[item.value]"
            :type="itme.tag"
            :placeholder="item.placeholder"
            :row="item.row"
            :autosize="item.autosize"
            :maxlength="item.maxlength"
            :show-word-limit="item.maxlength"
            :show-password="item.tag === 'password'"
            @change="handleChange(item)"
          >
          </el-input>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      innerFormData: {}
    }
  },
  methods: {
    /**
     * change事件
     */
    handleChange(item) {
      this.$emit(item, this.innerFormData)
    },
    /**
     * 重置表单
     */
    resetForm() {
      this.$refs.formRef.resetField()
      this.$refs.formRef.clearValidate()
    }
  }
}
</script>
