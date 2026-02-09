<script setup>
import { computed, ref } from 'vue'

const filtroSelecionado = ref('Todos')
const busca = ref('')

import geoformImage from '@/assets/images/Geoform.png'
import incraImage from '@/assets/images/incra.png'
import escolaImage from '@/assets/images/escola.png'

const projetos = [
  {
    nome: 'Geoform',
    categoria: 'Produto',
    descricao: 'Mapas e visualizações inteligentes para facilitar decisões com base em dados.',
    link: 'https://csa.cnat.ifrn.edu.br/projetos/geoform/',
    imagem: geoformImage
  },
  {
    nome: 'Mais Incra',
    categoria: 'Notícia',
    descricao: 'Portal com foco em gestão e transparência digital para serviços públicos.',
    link: 'https://csa.cnat.ifrn.edu.br/projetos/mais-incra/',
    imagem: incraImage
  },
  {
    nome: 'Escola de Governo',
    categoria: 'Post',
    descricao: 'Plataforma de capacitação e conteúdo educacional com navegação simples.',
    link: 'https://csa.cnat.ifrn.edu.br/projetos/escola-de-governo/',
    imagem: escolaImage
  }
]

const categorias = ['Todos', ...new Set(projetos.map((item) => item.categoria))]

const projetosFiltrados = computed(() => {
  return projetos.filter((projeto) => {
    const condicaoCategoria =
      filtroSelecionado.value === 'Todos' || projeto.categoria === filtroSelecionado.value
    const termo = busca.value.trim().toLowerCase()
    const condicaoBusca =
      termo.length === 0 ||
      projeto.nome.toLowerCase().includes(termo) ||
      projeto.descricao.toLowerCase().includes(termo)

    return condicaoCategoria && condicaoBusca
  })
})
</script>

<template>
  <section class="section projects">
    <div class="container">
      <span class="eyebrow">Projetos</span>
      <h2>Lista de projetos</h2>
      <p class="section-subtitle">
        Filtre por tipo de informação e pesquise rapidamente.
      </p>

      <div class="projects-toolbar">
        <input
          v-model="busca"
          type="search"
          class="projects-search"
          placeholder="Buscar por projeto"
          aria-label="Buscar projeto"
        >

        <div class="projects-filters" role="tablist" aria-label="Filtro por categoria">
          <button
            v-for="categoria in categorias"
            :key="categoria"
            type="button"
            class="filter-chip"
            :class="{ active: filtroSelecionado === categoria }"
            @click="filtroSelecionado = categoria"
          >
            {{ categoria }}
          </button>
        </div>
      </div>

      <div class="projects-grid">
        <a
          v-for="projeto in projetosFiltrados"
          :key="projeto.nome"
          :href="projeto.link"
          target="_blank"
          rel="noreferrer"
          class="project-card"
        >
          <img :src="projeto.imagem" :alt="`Capa do projeto ${projeto.nome}`">
          <div class="project-info">
            <small class="project-category">{{ projeto.categoria }}</small>
            <h3>{{ projeto.nome }}</h3>
            <span>{{ projeto.descricao }}</span>
          </div>
        </a>
      </div>

      <p v-if="projetosFiltrados.length === 0" class="empty-state">
        Nenhum resultado encontrado. Tente outro filtro ou termo de busca.
      </p>
    </div>
  </section>
</template>
