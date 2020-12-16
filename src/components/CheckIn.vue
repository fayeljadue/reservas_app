<template>
  <div>
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
  name: "Checkin",
  data: function () {
    return {
      reservas: [],
    };
  },
  methods: {
    enviarId: function (event, reserva) {
      axios
        .put("http://127.0.0.1:8000/reserva/chekin?id_reserva="+reserva)
        .then((response) => {
          alert(response.data.mensaje)
          window.location.reload(true)
        })
        .catch((error) => {
          alert("No se puede realizar la reserva");
        });
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
        alert("Error del servidor");
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
