<template>
  <div id=Buscar>
    <h3>Buscar Reserva</h3>
    <label for="">id reserva</label>
    <input type="date" v-model="id_reserva">
    <button v-on:click='Buscar'>Buscar</button>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Id_reserva</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cedula</th>
          <th># Personas</th>
          <th>Check-in</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reserva in reservas" v-bind:key="reserva.id_reserva">
          <td>{{ reserva.id_reserva }}</td>
          <td>{{ reserva.nombre_cliente }}</td>
          <td>{{ reserva.apellido_cliente }}</td>
          <td>{{ reserva.cedula_cliente }}</td>
          <td>{{ reserva.cantidad_personas }}</td>
          <td>
            <a
              v-if="reserva.id_reserva"
              v-on:click.prevent="enviarId($event, reserva.id_reserva)"
              href=""
              class="m-2 btn btn-sm btn-outline-secondary"
              >Check-In</a
            >
          </td>
        </tr>
      </tbody>
    </table>

    <!--<hr>
    <div>
      <p class="reserva" v-for="reserva in reservas" v-bind:key="reserva">{{reserva.reserva1}}</p>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Buscar",
  data: function () {
    return {
      reservas: [],
    };
  },
  methods: {
    enviarId: function (event, reserva) {
      axios
        .get("http://127.0.0.1:8000/reserva/visualizar"+id_reserva)
        .then((response) => {
          alert(response.data.mensaje)
        })
        .catch((error) => {
          console.log(error);
          alert("Error del servidor 1");
        });
        window.location.reload(true)
    },
  },
  beforeCreate: function () {
    axios
      .get("http://127.0.0.1:8000/reserva/empleado/visualizar/pendiente")
      .then((response) => {
        this.reservas = response.data;
      })
      .catch((error) => {
        console.log(error);
        alert("Error del servidor 2");
      });
  },
};
</script>

<style scoped>
.reserva {
  justify-content: center;
  text-align: center;
}
</style>
