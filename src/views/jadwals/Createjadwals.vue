<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add jadwal</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Jadwal</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="jadwal.jadwal"
          />
          <div class="alert alert-danger" v-if="validation.jadwal">
            {{ validation.jadwal[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Mata Kuliah</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="jadwal.matakuliah"
          />
          <div class="alert alert-danger" v-if="validation.matakuliah">
            {{ validation.matakuliah[0] }}
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const jadwal = reactive({
      jadwal: "",
      matakuliah:"",
      
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let jadwal = jadwal.jadwal;
      let matakuliah = jadwal.matakuliah;
      
      axios
        .post("http://127.0.0.1:8000/api/jadwals", {
         jadwal:jadwal,
          matakuliah: matakuliah,
        })
        .then(() => {
          router.push({
            name: "jadwals",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      jadwal,
      validation,
      router,
      store,
    };
  },
};
</script>
