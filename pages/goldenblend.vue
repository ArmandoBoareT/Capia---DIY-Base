<template>
  <section class="section">
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
    </div>
      
  <div class="columns mt-4">
  <div class="column is-9">
     <h1 class="title"> <strong>GOLDEN BLEND</strong> </h1>
    <hr>
  <b-image :src="require('@/assets/GOLDEN BLEND (640 × 320 px).png')"></b-image>
  <br>
  <p>What is Lorem Ipsum?</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
<br>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
<br>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
<br>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
