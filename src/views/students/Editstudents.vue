<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit student</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Id</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="student.id"
          />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
         <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nama Mahasiswa</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="student.nama_mahasiswa"
          />
          <div class="alert alert-danger" v-if="validation.nama_mahasiswa">
            {{ validation.nama_mahasiswa[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Alamat</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan alamat"
            v-model="student.alamat"
          />
          <div class="alert alert-danger" v-if="validation.alamat">
            {{ validation.alamat[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">No Tlp</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="student.no_tlp"
          />
          <div class="alert alert-danger" v-if="validation.no_tlp">
            {{ validation.no_tlp[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Email</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="student.email"
          />
          <div class="alert alert-danger" v-if="validation.email">
            {{ validation.email[0] }}
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
    const student = reactive({
      id: "",
      nama_mahasiswa: "",
      alamat: "",
      no_tlp: "",
      email: "",
      
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

onMounted(()=>{
  axios.get(`http://127.0.0.1:8000/api/students/${route.params.id}`)
  .then(response => {
console.log(response.data.data.id)

    student.id = response.data.data.id
    student.nama_mahasiswa = response.data.data.nama_mahasiswa
    student.alamat = response.data.data.alamat
    student.no_tlp = response.data.data.no_tlp
    student.email = response.data.data.email
    
  }).catch(error =>{
    console.log(error.response.data)
  })
})

    function update() {
      let id = student.id;
      let nama_mahasiswa = student.nama_mahasiswa;
      let alamat = student.alamat;
      let no_tlp = student.no_tlp;
      let email = student.email;
      
      axios.put(`http://127.0.0.1:8000/api/students/${route.params.id}`, {
          id: id,
          nama_mahasiswa: nama_mahasiswa,
          alamat: alamat,
          no_tlp: no_tlp,
          email: email,
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          validation.value = error.response.data
        });
    }
    return {
      student,
      validation,
      router,
      update,
      route
    };
  },
};
</script>
