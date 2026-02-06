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

      <form class="contact-form">
        <label for="nome">Nome</label>
        <input id="nome" type="text" name="nome" placeholder="Seu nome completo">

        <label for="email">Email</label>
        <input id="email" type="email" name="email" placeholder="voce@email.com">

        <label for="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte um pouco sobre o projeto."></textarea>

        <button type="submit" class="btn btn-primary">Enviar mensagem</button>
      </form>
    </div>
  </section>
</template>
