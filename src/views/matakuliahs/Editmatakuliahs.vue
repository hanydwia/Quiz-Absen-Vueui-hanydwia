<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit matakuliah</h5>
      <form class="row g-3" @submit.prevent="update">
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
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="matakuliah.sks"
          />
          <div class="alert alert-danger" v-if="validation.sks">
            {{ validation.sks[0] }}
          </div>
        </div>
        
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {

  setup() {
    const matakuliah = reactive({
      matakuliah: "",
      sks: "",
      
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

onMounted(()=>{
  axios.get(`http://127.0.0.1:8000/api/matakuliahs/${route.params.id}`)
  .then(response => {
console.log(response.data.data.id)

    matakuliah.matakuliah= response.data.data.matakuliah
    matakuliah.sks = response.data.data.sks
    
  }).catch(error =>{
    console.log(error.response.data)
  })
})

    function update() {
      let matakuliah = matakuliah.matakuliah;
      let sks = matakuliah.sks;
      
      axios.put(`http://127.0.0.1:8000/api/matakuliahs/${route.params.id}`, {
          matakuliah: matakuliah,
          sks: sks,
          
        })
        .then(() => {
          router.push({
            name: "Matakuliah",
          });
        })
        .catch((error) => {
          validation.value = error.response.data
        });
    }
    return {
      matakuliah,
      validation,
      router,
      update,
      route
    };
  },
};
</script>
