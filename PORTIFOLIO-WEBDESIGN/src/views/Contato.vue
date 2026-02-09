<template>
  <section class="section contact">
    <div class="container contact-grid">
      <div>
        <span class="eyebrow">Contato</span>
        <h2>Vamos conversar sobre o seu projeto?</h2>
        <p>
          Envie uma mensagem com o que você precisa. Retorno com propostas e próximos
          passos assim que possível.
        </p>
        <div class="contact-info">
          <div>
            <strong>Email</strong>
            <span>danielle@email.com</span>
          </div>
          <div>
            <strong>Localização</strong>
            <span>Brasil · Trabalho remoto</span>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <label for="nome">Nome</label>
        <input id="nome" v-model="form.nome" type="text" name="nome" placeholder="Seu nome completo">

        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" name="email" placeholder="voce@email.com">

        <label for="mensagem">Mensagem</label>
        <textarea id="mensagem" v-model="form.mensagem" name="mensagem" rows="4" placeholder="Conte um pouco sobre o projeto."></textarea>

        <button type="submit" class="btn btn-primary">Enviar mensagem</button>
        <p v-if="feedback" class="form-feedback" :class="feedbackType">{{ feedback }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nome: '',
  email: '',
  mensagem: ''
})

const feedback = ref('')
const feedbackType = ref('')

function handleSubmit() {
  if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
    feedback.value = 'Preencha todos os campos para enviar a mensagem.'
    feedbackType.value = 'is-error'
    return
  }

  feedback.value = 'Mensagem enviada com sucesso! Obrigada pelo contato.'
  feedbackType.value = 'is-success'
  form.nome = ''
  form.email = ''
  form.mensagem = ''
}
</script>
