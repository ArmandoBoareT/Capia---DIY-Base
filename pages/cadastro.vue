<template>
  <section class="section">

      <h1 class="title">Completar cadastro</h1>

      <form action="">
                  <b-field label="E-mail">
                      <b-input
                          type="email"
                          v-model="usuario.email"
                          placeholder="Seu e-mail"
                          readonly="true"
                          disabled>
                      </b-input>
                  </b-field>

                  <b-field label="Nome">
                      <b-input
                          type="text"
                          v-model="usuario.nome"
                          placeholder="Seu nome completo"
                          required>
                      </b-input>
                  </b-field>              
                  <b-field label="Apelido">
                      <b-input
                          type="text"
                          v-model="usuario.apelido"
                          placeholder="Informe seu apelido"
                          required>
                      </b-input>
                  </b-field> 

                               

              <b-button
                label="Completar meu cadastro"
                type="is-primary"
                @click="cadastrar()" />
      </form>
  </section>
</template>


<script>
  
export default {
    data(){
        return {
            usuario: {
              nome: '',
              email: '',
              apelido: ''
            },
            currentUser: null,
            cidades: []
        }
    },  
    created() {
      var self = this;

      //Busca o usuario logado para já preencher o e-mail na tela de cadastro
      this.$axios.get('currentuser/').then((response) => {
        console.log(response);
        self.currentUser = response.data;
        if(response.data) {
          self.usuario.email = response.data.username;
        }
      })        
    },
    methods: {
      cadastrar() {
          var self = this;
          if(this.currentUser == null) {
            self.$buefy.dialog.alert('Você ainda não está logado no site. Favor fazer o login com o seu gmail no menu Entrar/Cadastrar!');
          }else{
         
            //Chama a api para criar o usuário
            this.$axios.post('usuarios-create/', this.usuario).then((response) => {
              console.log(response);
              //Mostra a mensagem de sucesso
              self.$buefy.dialog.alert('Cadastro realizado com sucesso!')
              //Navega para a home após o cadastro, pode ser alterado para qualquer rota
              self.$router.replace({ path: '/', force:true });
            })
          }
      }
    }  
}
</script>