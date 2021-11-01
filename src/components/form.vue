<template>
    <div>
        <el-form
            ref="formRef"
            :label-position="labelPosition"
            :model="innerFormData"
            :label-width="labelWidth"
        >
            <el-form-item
                v-for="item in config"
                v-show="item.visiable === undefined ? true : item.visiable"
                :label="item.label"
                :key="item.value"
                :rules="item.rules || [{ required: item.required, message: item.message }]"
            >
                <!-- 数字输入框 -->
                <template v-if="item.type === 'number'">
                    <el-input-number
                        style="width: 100%;"
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
                <template v-if="item.type === 'input' ">
                    <el-input
                        v-model="innerFormData[item.value]"
                        :type="item.tag || 'text'"
                        :placeholder="item.placeholder"
                        :readonly="item.readonly"
                        :row="item.row"
                        :autosize="item.autosize"
                        :maxlength="item.maxlength"
                        :show-word-limit="item.maxlength"
                        :show-password="item.tag === 'password'"
                        @change="handleChange(item)"
                    >
                    </el-input>
                </template>
                <!-- 下拉选择框 -->
                <template v-if="item.type === 'select'">
                    <el-select
                        style="width: 100%;"
                        v-model="innerFormData[item.value]"
                        :placeholder="item.plceholder"
                        :disabled="item.disabled"
                        :multiple="item.multiple"
                    >
                        <el-option
                            v-for="option in item.options"
                            :label="option.label"
                            :value="option.value"
                        >
                            <slot scope="scope"></slot>
                        </el-option>
                    </el-select>
                </template>

                <template v-if="item.slotName">
                    <slot
                        :name="item.slotName"
                        :item="item"
                        :innerFormData="innerFormData"
                    ></slot>
                </template>
            </el-form-item>

            <el-form-item>
                <el-button @click="handleSubmit" type="primary">保存</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props: {
        config: {
            type: Array,
            default: () => []
        },
        data: {
            type: Object,
            default: () => {}
        },
        labelPosition: {
            type: String,
            default: 'left',
        },
        labelWidth: {
            type: String,
            default: '120px',
        }
    },
    data() {
        return {
            innerFormData: {}
        }
    },
    created() {
         this.init()
    },
    watch: {
        data() {
            this.init()
        }
    },
    methods: {
        init() {
            this.innerFormData = {}
            this.config.forEach((item) => {

                if (item.visiable !== false) {
                    this.$set(this.innerFormData, item.value, this.data[item.value] || '')
                }
                // 可以根据不同情况进行赋值， 比如多选可以赋值为数组
                // if (item.type === 'select' && item.multiple) {
                //     this.$set(this.innerFormData, item.value, this.data[item.value] || [])
                // }
            })
        },
        /**
         * change事件
         */
        handleChange(item) {
            this.$emit('change', item, this.innerFormData)
        },
        /**
         * 重置表单
         */
        resetForm() {
            this.$nextTick(() => {
                this.$refs.formRef.resetFields ()
            this.$refs.formRef.clearValidate()
            })

        },
        /**
         * 提交表单
         */
        handleSubmit() {
            this.$emit('submit', this.innerFormData)
        }
    }
}
</script>
