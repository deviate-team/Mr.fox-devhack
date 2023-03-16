<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const onSubmit = (
  values: unknown,
  { resetForm }: { resetForm: () => void }
) => {
  console.log(values);

  resetForm();
};
</script>

<template>
  <AuthLayout>
    <div class="bg-white shadow-lg p-6 rounded-2xl max-w-sm w-full">
      <h1 class="text-center text-verydarkblue text-3xl font-semibold">
        BAMBOO
      </h1>
      <Form class="mt-6" @submit="onSubmit" :validation-schema="schema">
        <div>
          <label class="label">Username</label>
          <Field
            name="username"
            class="input"
            type="text"
            placeholder="Enter username"
            required
          />
          <ErrorMessage name="username" class="error" />
        </div>
        <div class="mt-4">
          <label class="label">Email address</label>
          <Field
            name="email"
            class="input"
            type="email"
            placeholder="Enter email address"
            required
          />
          <ErrorMessage name="email" class="error" />
        </div>
        <div class="mt-4">
          <label class="label">Password</label>
          <Field
            name="password"
            class="input"
            type="password"
            placeholder="Enter password"
            required
          />
          <ErrorMessage name="password" class="error" />
        </div>
        <div class="mt-4">
          <label class="label">Confirmed Password</label>
          <Field
            name="confirmedPassword"
            class="input"
            type="password"
            placeholder="Enter confirmed password"
            required
          />
          <ErrorMessage name="confirmedPassword" class="error" />
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="bg-darkcyan text-white w-full p-3 font-bold rounded-lg hover:bg-darkcyanhover transition duration-200"
          >
            Sign Up
          </button>
          <p
            class="text-xs font-semibold text-center text-darkgrayishblue mt-2"
          >
            Already have an account?
            <RouterLink to="/login" class="text-darkcyan">Sign In</RouterLink>
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
