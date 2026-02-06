<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="eyebrow">Portfólio Front-End</span>
        <h2>Olá, eu sou a Danielle</h2>
        <p>
          Desenvolvedora focada em criar interfaces modernas, acessíveis e
          responsivas com foco em experiência do usuário.
        </p>
        <div class="hero-actions">
          <RouterLink to="/projetos" class="btn btn-primary">Ver projetos</RouterLink>
          <RouterLink to="/contato" class="btn btn-ghost">Fale comigo</RouterLink>
        </div>
        <div class="hero-highlights">
          <div>
            <strong>5+</strong>
            <span>Páginas completas</span>
          </div>
          <div>
            <strong>UI moderna</strong>
            <span>Design consistente</span>
          </div>
          <div>
            <strong>Vue.js</strong>
            <span>Componentização</span>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/images/Coluna - Imagens.png" alt="Ilustração de trabalho criativo">
      </div>
    </div>
  </section>
</template>
