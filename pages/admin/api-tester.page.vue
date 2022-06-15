<template>
  <h2>Admin</h2>
  <FormKit type="text" label="Endpoint" v-model="endpoint"
           :sections-schema="{prefix:{$el: 'div', attrs: {class: 'input-prefix'}, children: '/'}}"></FormKit>
  <FormKit type="select" label="Method" v-model="method" :options="['GET', 'POST']" />
  <div class="w-full mt-8">
    <Codemirror
        v-model="editorContent"
        :style="{ height: '200px' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tabSize="2"
    />
  </div>
  <pre :class="{'text-red-500': error}">{{ response }}</pre>
  <button class="button mt-8" @click="submit">Submit</button>
</template>

<script setup>
import { ref } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { api } from '../../utils/api';

let endpoint = ref('');
let editorContent = ref('{}');
let response = ref('');
let error = ref(false);
let method = ref('GET');

async function submit() {
  error.value = false;
  let req;
  if (method.value === 'GET') {
    req = api.get(endpoint.value, { params: JSON.parse(editorContent.value) });
  } else if (method.value === 'POST') {
    req = api.post(endpoint.value, JSON.parse(editorContent.value));
  }
  req.then((r) => {
    response.value = r;
  }).catch(e => {
    response.value = e.response;
    error.value = true;
  });
}
</script>
