<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import { RouterLink } from 'vue-router';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function onSubmit(values: unknown, { resetForm }: { resetForm: () => void }) {
  console.log(values);

  resetForm();
}
</script>

<template>
  <AuthLayout>
    <div class="shadow-md bg-white p-6 rounded-2xl max-w-sm w-full">
      <div>
        <h1 class="text-center text-verydarkblue text-3xl font-semibold">
          BAMBOO
        </h1>
      </div>
      <Form class="mt-6" @submit="onSubmit" :validation-schema="schema">
        <div>
          <label class="label">Email address</label>
          <Field
            name="email"
            class="input"
            type="email"
            required
            placeholder="Enter email address"
          />
          <ErrorMessage name="email" class="error" />
        </div>
        <div class="mt-4">
          <label class="label">Password</label>
          <Field
            name="password"
            class="input"
            type="password"
            required
            placeholder="Enter password"
          />
          <ErrorMessage name="password" class="error" />
        </div>
        <p class="text-xs text-right text-darkgrayishblue font-semibold mt-2">
          Forgot Password?
        </p>
        <div class="mt-6">
          <button
            type="submit"
            class="bg-darkcyan text-white w-full p-3 font-bold rounded-lg hover:bg-darkcyanhover transition duration-200"
          >
            Sign in
          </button>
          <p
            class="text-xs font-semibold text-center text-darkgrayishblue mt-2"
          >
            Don't have an account?
            <RouterLink to="/register" class="text-darkcyan"
              >Sign Up</RouterLink
            >
          </p>
        </div>
      </Form>
    </div>
  </AuthLayout>
</template>

<style lang="postcss" scoped>
.label {
  @apply text-sm text-verydarkblue font-semibold;
}

.input {
  @apply w-full block mt-4 border-2 border-gray-200 rounded-lg p-2 font-medium text-verydarkblue focus:outline-none focus:border-darkcyan;
}

.error {
  @apply text-xs text-red-500 font-semibold;
}
</style>
