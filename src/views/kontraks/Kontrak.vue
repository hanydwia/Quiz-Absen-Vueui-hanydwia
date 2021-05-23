<template>
  <div class="Kontrak">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createkontraks"
      >Add kontrak</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Mahasiswa_Id</th>
          <th scope="col">Semester_id</th>
           
        </tr>
      </thead>
      <tbody>
        <tr v-for="(kontrak, index) in kontraks" :key="index">
          <td>{{ kontrak.mahasiswa_id }}</td>
          <td>{{ kontrak.semester_id }}</td>
          <td>
            <router-link
              class="btn btn-success"
              :to="{ name: 'Editkontraks', params: { id: kontrak.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="kontrakDelete(kontrak.id)"
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
    let kontraks = ref([]);
    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/kontraks')
        .then((Response) => {
          kontraks.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })
    function kontrakDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/kontraks/${id}`)
        .then(() => {
          let z = this.kontraks.map((kontraks) => kontraks.id).index(id);
          this.kontraks.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      kontraks,
      kontrakDelete,
    };
  },
};
</script>