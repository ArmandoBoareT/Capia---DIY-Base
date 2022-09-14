<template>
  <section class="section">
    <div class="columns mt-4">
    <div class="column is-9">
    <h2 class="subtitle">Novos posts</h2>
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
    </div>

  <div class="columns mt-4">
  <div class="column is-9">    
  
    <h1 class="title">Golden Blend</h1>
  <h3 class="subtitle"> Cápia DIY / 31/08/2022 </h3>
  <b-image :src="require('@/assets/GOLDEN BLEND (640 × 320 px).png')"></b-image>
  <p>TEXTOTEXOTEXTOTEXOTEXTOTEXO</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
    
  <div class="column is-3">
    
  <h1 class="title">Posts populares</h1>
  <p><router-link :to="{ path: '/goldenblend' }"> • Golden Blend </router-link></p>
  
  </div>
    </div>

    <div class="columns mt-4">
  <div class="column is-9">    
  <h1 class="title">Super receita</h1>
  <h3 class="subtitle"> Cápia DIY / 31/08/2022 </h3>
  <b-image :src="require('@/assets/capia_diy.png')"></b-image>
  <p>What is Lorem Ipsum?</p> 
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
      
  <div class="column is-3">    
  <h1 class="title">Instagram:</h1>
    <a href="https://www.instagram.com/capiadiy/" target="_blank"> <b-image :src="require('@/assets/INSTAGRAM.png') "></b-image> </a>
  
  </div>
   </div>

    <div class="columns mt-4">
  <div class="column is-9">
  <h1 class="title">Super receita</h1>
  <h3 class="subtitle"> Cápia DIY / 31/08/2022 </h3>
  <b-image :src="require('@/assets/capia_diy.png')"></b-image>
  <p>What is Lorem Ipsum?</p> 
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
  <div class="column is-3">

  <h1 class="title">Tags populares</h1>
  <p>Super receita 1</p> 
  </div>
    </div>
    
</section>
</template>

<script>
export default {
  name: 'InspirePage'
}
</script>
