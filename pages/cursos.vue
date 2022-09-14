<template>
  <section class="section">
    <h3 class="title is-3">Conheça nossos cursos:</h3>
    
    <div class="columns mt-4">
    <div class="column is-6">
      <h4>Curso básico</h4>
      <h2 class="subtitle">Os primeiros passos para se tornar um grande juicemaker</h2>
        <b-image :src="require('@/assets/cursobasico.png')"
        ></b-image>
          <a target ="_blank" href="https://cursos.capiadiy.com/paths/curso-basico-diy-e-juices-124">
          <button class="button is-light">Saiba 
         mais</button> 
          </a>
     </div>
      
      <div class="column is-6">
      </div>>
      
      <div class="column is-6">
      <h1>Curso intermediário</h1>
        <h2 class="subtitle">Aprenda a desenvolver suas receitas, através de uma metodologia exclusiva que vai levar seus mixes para outro nível</h2>
      <b-image
            :src="require('@/assets/cursointermediario.png')"
        ></b-image>
        <a target ="_blank" href="https://cursos.capiadiy.com/paths/curso-intermediario-by-capiadiy-157">
      <button class="button is-light">Saiba mais</button>
        </a>
      </div>  
</div>
    
    
</div>
    
  </section>
</template>

<script>
export default {
  name: 'InspirePage'
}
</script>
