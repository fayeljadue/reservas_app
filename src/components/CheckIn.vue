<template>
  <div>
    <hr>
    <div>
      <p class="reserva" v-for="reserva in reservas" v-bind:key="reserva">{{reserva.reserva1}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Checkin',
    data: function(){
      return {
        reservas: [{"reserva1":"nombre: Luis"}, {"reserva1":"nombre: Juan"}]
      }
    }
  }
</script>

<style scoped>
  .reserva{
    justify-content: center;
    text-align: center;
  }
</style>
