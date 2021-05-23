<template>
  <div class="Jadwal">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createjadwals"
      >Add jadwal</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">jadwal</th>
          <th scope="col">Mata Kuliah</th>
           
        </tr>
      </thead>
      <tbody>
        <tr v-for="(jadwal, index) in jadwals" :key="index">
          <td>{{ jadwal.jadwal }}</td>
          <td>{{ jadwal.matakuliah }}</td>
          <td>
            <router-link
              class="btn btn-success"
              :to="{ name: 'Editjadwals', params: { id: jadwal.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="jadwalDelete(jadwal.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import { onMounted, ref } from "vue";
export default {
  name: "Home",
  components: {
    Slider,
  },
  setup() {
    let jadwals = ref([]);
    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/jadwals')
        .then((Response) => {
          jadwals.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })
    function jadwalDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/jadwals/${id}`)
        .then(() => {
          let z = this.jadwals.map((jadwals) => jadwals.id).index(id);
          this.jadwals.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      jadwals,
      jadwalDelete,
    };
  },
};
</script>