<!--
 * @Author: wangxuan wangxuanniu@yeah.net
 * @Date: 2024-07-23 14:18:28
 * @LastEditors: wangxuan wangxuanniu@yeah.net
 * @LastEditTime: 2024-07-24 13:27:25
 * @FilePath: /nuxt3-app/pages/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="p-5">
    <UInput v-model="value" @input="debounceFn(value)" />
    <div class="pt-5">
      <UButton @click="debounceFn(value)">按钮</UButton>
    </div>
    <div class="mt-5">
      <NuxtLink to="/about">关于我门/about us</NuxtLink>
    </div>
  </div>

</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const value = ref('')
  // 防抖函数，在时间间隔内只执行最后一次函数
  const debounce = (fu: Function, delay: any) => {
    console.log('debounce')
    let timer: any| null = null
    return function (...args: any[]) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fu(...args)
      }, delay)
    }
  }
  // 截流函数在一定时间内只执行一次函数

  const throttle = (fu: Function, delay: any) => {
    let lastTime = 0
    return function (...args: any[]) {
      let nowTime = new Date().getTime()
      if (nowTime - lastTime > delay) {
        fu(...args)
        lastTime = nowTime
      }
    }
  }
  const debounceFn = throttle( (e: any)=> {
    console.log(e)
  }, 3000)

</script>

<style scoped></style>