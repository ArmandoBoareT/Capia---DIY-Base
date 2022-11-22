<template>
  <section class="section">
    <div class="columns mt-4">
    <div class="column is-9">
    <h1 class="tittle">Novos posts</h1>
    <hr>
      
    <b-taglist>
        <b-tag type="is-info">First</b-tag>
        <b-tag type="is-info">Second</b-tag>
        <b-tag type="is-info">Third</b-tag>
        <b-tag type="is-info">Fourth</b-tag>
        <b-tag type="is-info">Fifth</b-tag>
    </b-taglist>

    </div>
  
    
    <div class="column is-3">
      <b-input placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
            </b-input>
      <hr>
    </div>
    </div>

   <div class="columns mt-4">
  <div class="column is-9">
 <strong>{{artigo.titulo}}</strong>
    <br>
    {{artigo.data}} / {{artigo.tag}}
    <br>
    {{artigo.imagem}}
    <br>
  </div>
  </div>
    
  <div class="column is-3">
    
  <h1 class="title">Posts populares</h1>
  <p><router-link :to="{ path: '/goldenblend' }"> • Golden Blend </router-link></p>
  
  </div>
  </div>
  <hr>
    
  </div>
      
  <div class="column is-3">
  <hr>
  <h1 class="title">Instagram:</h1>
    <a href="https://www.instagram.com/capiadiy/" target="_blank"> <b-image :src="require('@/assets/INSTAGRAM.png') "></b-image> </a>
  </div>
  </div>
  <br> 
   
    <hr>
    
  </div>
    
  <div class="column is-3">
   
  <hr>
    
  <h1 class="title">Tags populares</h1>
  <p>Super receita 1</p> 
  </div>
    <hr>
    </div>
    
</section>
</template>

<script>
export default {
  name: 'InspirePage'
}
</script>

 <script>
export default {
  
  async asyncData({ $axios, query }) {
    const artigo = await $axios.$get('/artigos/' + query.id + '/')
    return { artigo }
  }
  
}
</script>
