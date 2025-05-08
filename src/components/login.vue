<template>
  <div class="main-bg">
    <div class="box-conatiner">
      <div id="a">
        <div class="circle-ripple"></div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <h1 class="heading-left">For Continue Please Login</h1>
        </div>
        <div class="col-sm-6 col-md-6">
          <div class="wrap-login100">
            <span class="login100-form-title">Sign In</span>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-20" @submit.prevent="handleSubmit">
              <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                <input
                    class="input100"
                    type="text"
                    name="username"
                    placeholder="Username"
                    v-model="form.username"
                >
                <span class="focus-input100"></span>
              </div>
              <div class="wrap-input100 validate-input" data-validate="Please enter password">
                <input
                    class="input100"
                    type="password"
                    name="pass"
                    placeholder="Password"
                    v-model="form.password"
                >
                <span class="focus-input100"></span>
              </div>
              <div class="text-right p-t-13 p-b-23">
                <span class="txt1">Forgot</span>
                <a href="#" class="txt2">Username / Password?</a>
              </div>
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" type="submit">Sign in</button>
              </div>
              <div class="flex-col-c p-t-140 p-b-40">
                <span class="txt1 p-b-9">Don't have an account?</span>
                <a href="#" class="txt3">Sign up now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 响应式表单数据
const form = ref({
  username: 'WWWW',
  password: '123456'
});

// 提交表单处理
const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  // 这里可以添加表单验证和提交逻辑
  // 例如：调用API进行登录验证
};
</script>

<style scoped>

</style>