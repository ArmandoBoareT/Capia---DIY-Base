<template>
  <section class="section">
  <b-carousel>
      <b-carousel-item>
        <b-image :src="require('@/assets/BLOG.png')" ></b-image>
      </b-carousel-item>
      <b-carousel-item>
         <b-image :src="require('@/assets/BLOG.png')" ></b-image>
      </b-carousel-item>      
      <b-carousel-item>
         <b-image :src="require('@/assets/BLOG.png')" ></b-image>
      </b-carousel-item>            
    </b-carousel>
    <div class="column is 8">
      
    </div>
      <hr> 
    
      <b-input placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
            </b-input>
    
     <div class="columns mt-4" >
    <div class="column is-8">
      <div v-for="artigo in artigos" :key="artigo.id">
    <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
             <b-image :src="artigo.imagem" ></b-image>
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <router-link :to="{ path: '/artigo-show', query: {id: artigo.id} }">
              <strong>{{artigo.titulo}}</strong>
              </router-link>
              <br />
              {{artigo.resumo}}
            </p>
          </div>
        </div>
      </article>
      <hr>

      </div>


      
       </div>
     </div>
    </div>
   </section>           
</template>

<script>
export default {
  
  async asyncData({ $axios }) {
    const artigos = await $axios.$get('/artigos/')
    return { artigos }
  }
  
}
</script>