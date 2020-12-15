<template>
  <div class="App">
    <div class="header">
        <nav class="navbar navbar-expand-md navbar-light bg-light border">
            <a class="navbar-brand" href="/"><span class="blue">Aplicación de reservas</span></a>
            <button aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbar" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav ml-auto pr-3">
                        <li class="nav-item"><button v-on:click='checkin' class="m-2 btn btn-sm btn-outline-secondary" type="button">Check-In</button></li>
                        <li class="nav-item"><button class="m-2 btn btn-sm btn-outline-secondary" type="button">Check-Out</button></li>
                        <li class="nav-item"><button class="m-2 btn btn-sm btn-outline-secondary" type="button">Ver reservas</button></li>
                        <li class="nav-item"><button class="m-2 btn btn-sm btn-outline-secondary" type="button">Buscar reserva</button></li>
                    </ul>
            </div>
        </nav>
    </div>
    <div class="main-component">
      <div class="jumbotron">
        <h1 class="display-4 pb-5 title">{{ titulo }}</h1>
        <router-view></router-view>
      </div>
    </div>
    <!--<div class="footer bg-light border">
      <p class="footer-text navbar-brand">MisiónTIC 2022</p>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: function(){
    return {titulo: "Bienvenido a la aplicación de reservas"}
  },
  methods: {
    checkin: function(){
      this.titulo = "Reservas pendientes por hacer Check-In"
      this.$router.push({name: "checkin"})
    }
  }
}
</script>

<style>
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 9vh;
  }
.footer-text{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.title{
  font-size: 2em;
  justify-content: center;
  text-align: center;
}
.main-component{
  height: 83vh;
  margin: 0%;
  padding: 4%;
  background: #fdfdfe ;
  }
</style>
