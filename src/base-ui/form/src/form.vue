<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <!-- 解决屏幕响应式的问题 -->
          <el-col v-bind="colLayout">
            <!-- :rules="item.rules" 规则校验-->
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :style="itemStyle"
              :rules="item.rules"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <!-- <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                /> -->
                <!-- v-modle本质是一个语法糖 -->
                <!-- 分解 -->
                <!--  :model-value -->
                <!-- @data:modelValue -->
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}
                  </el-option>
                </el-select>
              </template>

              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>

        <!-- 只保留一个,其余的都删掉 -->
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
//PropType:
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
  props: {
    //接收user组件传来的值
    // formData: {
    //   type: Object,
    //   required: true
    // },
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      //把Array 当做  PropType
      //作用:接收泛型
      //这个数组里面的元素都是字符串
      type: Array as PropType<IFormItem[]>,
      //写默认值:如果是基本类型,可以直接跟默认值
      //如果是对象或者数组,需要写上函数=>要求写上箭头函数
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '10px 40px'
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 一个占6分 24/6=4
        lg: 8,
        md: 12,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //方法一:
    //props.modelValue 是父组件的值
    //因为是拷贝出来的对象,重置以后,这里的数据不会发生改变
    // const formData = ref({ ...props.modelValue }) //和原来组件没有关系
    // const formData = ref({ ...props.modelValue })
    // watch(
    //   formData,
    //   (newValue) => {
    //     console.log(newValue)

    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     //改某一个属性,深度监听
    //     deep: true
    //   }
    // )
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      // formData
      handleValueChange
    }
  }
})
</script>

<style lang="less" scoped>
.hy-form {
  padding-top: 22px;
}
</style>
