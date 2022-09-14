<template>
  <div class="container is-fluid">

    <b-navbar style="height: 90px" shadow="true">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <b-image :src="require('@/assets/capia_diy.png')"
                ></b-image>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
          
            <b-navbar-item tag="router-link" :to="{ path: '/sobre' }">
                Sobre
            </b-navbar-item>
          
            <b-navbar-item tag="router-link" :to="{ path: '/artigos' }" >
                Artigos
            </b-navbar-item>
          
            <b-navbar-item tag="router-link" :to="{ path: '/cursos' }">
              Cursos
            </b-navbar-item>
          
            <b-navbar-item tag="a" 
              target="_blank" 
              href="https://www.vmlabs.com.br/one-shots/">
              One Shots
            </a>
            </b-navbar-item>
          
        </template>
      

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Cadastre-se</strong>
                    </a>
                    <a class="button is-light">
                        Login
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    
<div class="columns mt-4">
    <div class="column is-12">
      
        <div id="divBusca">
         
          <b-input placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
            </b-input>
          
        </div>
    </div>
</div>
    <Nuxt/>

    <div class="container my-15">

     <footer class="bg-dark text-center text-white">
       <nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Instagram</p>
      <p class="title">
        <b-icon
                pack="far"
                class="fa-brands fa-instagram"
                size="is-small">
            </b-icon>
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Twitch</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">All the flavors</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </div>
</nav>
   
     </footer>
  
    </div>      
    
  </div>
</template>

