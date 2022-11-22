<template>
  <div class="container is-fluid">

    <b-navbar style="height: 90px" >
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
                        <b-navbar-item tag="router-link" :to="{ path: '/cadastro'}">
              Cadastre-se
            </b-navbar-item>
                    </a>
                    <a class="button is-light">
                    <b-navbar-item tag="router-link" :to="{ path: '/login'}">
              Login
            </b-navbar-item>
                      
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <nuxt/>

    <div class="container my-15">

<!--
   <footer class="bg-dark text-center text-white">
       <nav class="level">



  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Instagram</p>
      <p class="title">
       <a href="https://www.instagram.com/capiadiy/" target="_blank"> 
        <figure class="image is-32x32">
         <b-image :src="require('@/assets/igicon.png')"></b-image> 
       </figure>
       </a>
      </p>
    </div>
  </div>
<div class="level-item has-text-centered">
    <div>
      <p class="heading">Twitch</p>
    <a href="https://twitch.tv/capiadiy" target="_blank"> 
        <figure class="image is-32x32">
         <b-image :src="require('@/assets/twitch.png')"></b-image> 
       </figure>
       </a>  
    </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">All the flavors</p>
       <a href="https://alltheflavors.com/users/capiadiy" target="_blank"> 
        <figure class="image is-32x32">
         <b-image :src="require('@/assets/dropper.png')"></b-image> 
       </figure>
       </a>  
    </div>
  </div>
     
  
         
        </nav>
   
    </footer>  -->
      
  
    </div>      
    
  </div>
</template>

