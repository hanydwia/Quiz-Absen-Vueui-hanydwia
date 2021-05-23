<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit jadwal</h5>
      <form class="row g-3" @submit.prevent="update">
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
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="jadwal.matakuliah"
          />
          <div class="alert alert-danger" v-if="validation.matakuliah">
            {{ validation.matakuliah[0] }}
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
    const jadwal = reactive({
      jadwal: "",
      matakuliah: "",
      
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

onMounted(()=>{
  axios.get(`http://127.0.0.1:8000/api/jadwals/${route.params.id}`)
  .then(response => {
console.log(response.data.data.id)

    jadwal.jadwal= response.data.data.jadwal
    jadwal.matakuliah = response.data.data.matakuliah
    
  }).catch(error =>{
    console.log(error.response.data)
  })
})

    function update() {
      let jadwal = jadwal.jadwal;
      let matakuliah = jadwal.matakuliah;
      
      axios.put(`http://127.0.0.1:8000/api/jadwals/${route.params.id}`, {
          jadwal: jadwal,
          matakuliah: matakuliah,
          
        })
        .then(() => {
          router.push({
            name: "jadwal",
          });
        })
        .catch((error) => {
          validation.value = error.response.data
        });
    }
    return {
      jadwal,
      validation,
      router,
      update,
      route
    };
  },
};
</script>
