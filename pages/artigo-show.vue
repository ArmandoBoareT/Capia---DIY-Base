<template>
  <section class="section" v-if="artigo">
    <div class="columns mt-4">
    <div class="column is-9">
    <h2 class="subtitle">Categoria</h2>
    <hr>
    </div>
    
    <div class="column is-3"
      <b-input placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
            </b-input>
      <hr>
    </div>
    
  <div class="columns mt-4">
  <div class="column is-9">
 <strong>{{artigo.titulo}}</strong>
    <br>
    {{artigo.data}} / {{artigo.tag}}
    <br>
    {{artigo.imagem}}
    <br>
    {{artigo.corpo}}
  </div>
  </div>
   <div class="column is-3">
  <h1 class="title">Posts populares</h1>
   <hr has-hr-grey>
  <p><router-link :to="{ path: '/goldenblend' }"> • Golden Blend </router-link></p>
  <br>
  <br>
    <a href="https://www.instagram.com/capiadiy/" target="_blank"> <b-image :src="require('@/assets/INSTAGRAM.png') "></b-image> </a>
  <hr>

  <h1 class="title">Tags populares</h1>
  <p>Super receita 1</p> 
  </div>
    </div>
    </div>
 
  <hr>
  <div class="columns mt-4">
  <div class="column is-9">
    <h1><strong>Deixe seu comentário</strong></h1>
    <br>
    <textarea class="textarea is-small" placeholder="Comentários sobre o produto:"></textarea>
  </div>
  </div>
</section> 
</template>

 <script>
export default {
  
  async asyncData({ $axios, query }) {
    const artigo = await $axios.$get('/api/artigos/' + query.id + '/')
    return { artigo }
  }
  
}
</script>
