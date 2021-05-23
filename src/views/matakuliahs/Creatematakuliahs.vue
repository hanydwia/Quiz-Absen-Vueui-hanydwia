<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add matakuliah</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Mata Kuliah</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="matakuliah.matakuliah"
          />
          <div class="alert alert-danger" v-if="validation.matakuliah">
            {{ validation.matakuliah[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">SKS</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="matakuliah.sks"
          />
          <div class="alert alert-danger" v-if="validation.sks">
            {{ validation.sks[0] }}
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
    const matakuliah = reactive({
      matakuliah: "",
      sks:"",
      
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let matakuliah = matakuliah.matakuliah;
      let sks = matakuliah.sks;
      
      axios
        .post("http://127.0.0.1:8000/api/matakuliahs", {
         matakuliah:matakuliah,
          sks: sks,
        })
        .then(() => {
          router.push({
            name: "Matakuliahs",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      matakuliah,
      validation,
      router,
      store,
    };
  },
};
</script>
