<template>
  <section class="section projects">
    <div class="container">
      <span class="eyebrow">Projetos</span>
      <h2>Cases e experiências recentes</h2>
      <p class="section-subtitle">
        Projetos reais desenvolvidos com foco em design, usabilidade e performance.
      </p>

      <div class="projects-grid">
        <a
          href="https://csa.cnat.ifrn.edu.br/projetos/geoform/"
          target="_blank"
          rel="noreferrer"
          class="project-card"
        >
          <img src="@/assets/images/Geoform.png" alt="Capa do projeto Geoform">
          <div class="project-info">
            <h3>Geoform</h3>
            <span>Mapas e visualizações inteligentes</span>
          </div>
        </a>

        <a
          href="https://csa.cnat.ifrn.edu.br/projetos/mais-incra/"
          target="_blank"
          rel="noreferrer"
          class="project-card"
        >
          <img src="@/assets/images/incra.png" alt="Capa do projeto Mais Incra">
          <div class="project-info">
            <h3>Mais Incra</h3>
            <span>Gestão e transparência digital</span>
          </div>
        </a>

        <a
          href="https://csa.cnat.ifrn.edu.br/projetos/escola-de-governo/"
          target="_blank"
          rel="noreferrer"
          class="project-card"
        >
          <img src="@/assets/images/escola.png" alt="Capa do projeto Escola de Governo">
          <div class="project-info">
            <h3>Escola de Governo</h3>
            <span>Capacitação e conhecimento</span>
          </div>
        </a>
      </div>

      <section class="control-list">
        <h3>Lista de controle de conteúdos</h3>
        <p class="section-subtitle">Use os filtros para acompanhar produtos, notícias e posts sem poluir a tela.</p>

        <div class="control-toolbar">
          <input
            v-model="query"
            type="search"
            class="control-search"
            placeholder="Buscar por título ou categoria"
            aria-label="Buscar conteúdo"
          >
          <div class="control-filters">
            <button
              v-for="option in filterOptions"
              :key="option"
              type="button"
              class="filter-btn"
              :class="{ active: selectedType === option }"
              @click="selectedType = option"
            >
              {{ option }}
            </button>
          </div>
        </div>

        <ul class="control-items">
          <li v-for="item in filteredItems" :key="item.id" class="control-item">
            <div>
              <h4>{{ item.title }}</h4>
              <small>{{ item.type }} · {{ item.updatedAt }}</small>
            </div>
            <span class="status-pill" :class="item.statusClass">{{ item.status }}</span>
          </li>
          <li v-if="!filteredItems.length" class="control-empty">
            Nenhum resultado encontrado para os filtros atuais.
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const query = ref('')
const selectedType = ref('Todos')
const filterOptions = ['Todos', 'Produto', 'Notícia', 'Post']

const items = [
  { id: 1, title: 'Lançamento do painel Geoform', type: 'Produto', updatedAt: 'Atualizado hoje', status: 'Publicado', statusClass: 'status-live' },
  { id: 2, title: 'Nova integração do Mais Incra', type: 'Notícia', updatedAt: 'Ontem', status: 'Em revisão', statusClass: 'status-review' },
  { id: 3, title: 'Boas práticas de acessibilidade', type: 'Post', updatedAt: '2 dias atrás', status: 'Rascunho', statusClass: 'status-draft' },
  { id: 4, title: 'Agenda de melhorias da Escola de Governo', type: 'Produto', updatedAt: 'Esta semana', status: 'Publicado', statusClass: 'status-live' }
]

const filteredItems = computed(() => {
  const normalizedQuery = query.value.trim().toLowerCase()

  return items.filter((item) => {
    const matchesType = selectedType.value === 'Todos' || item.type === selectedType.value
    const matchesQuery = !normalizedQuery
      || item.title.toLowerCase().includes(normalizedQuery)
      || item.type.toLowerCase().includes(normalizedQuery)

    return matchesType && matchesQuery
  })
})
</script>
