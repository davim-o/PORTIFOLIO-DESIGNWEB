<template>
  <section class="hero">
    <div class="hero-content">
      <p>Bem-vindo ao meu portfólio!</p>
      <h2>Meu nome é Danielle</h2>
      <p>
        Desenvolvedora Front-End focada em criar interfaces modernas,
        acessíveis e responsivas.
      </p>

      <div class="button-container">
        <button class="custom-button" @click="irProjetos">
          Ver Projetos
        </button>
      </div>
    </div>

    <img src="@/assets/images/Coluna - Imagens.png" class="hero-img">
  </section>
</template>

<script>
export default {
  methods: {
    irProjetos() {
      this.$router.push('/projetos')
    }
  }
}
</script>
