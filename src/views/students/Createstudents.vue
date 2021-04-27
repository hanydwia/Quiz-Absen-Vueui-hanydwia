<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add student</h5>
      <form class="row g-3" @submit.prevent="store">
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
            type="text"
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
        <div class="col-12">
          <label for="inputAddress" class="form-label">No Tlp</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan no_tlp"
            v-model="student.no_tlp"
          />
          <div class="alert alert-danger" v-if="validation.no_tlp">
            {{ validation.no_tlp[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan email"
            v-model="student.email"
          />
          <div class="alert alert-danger" v-if="validation.email">
            {{ validation.email[0] }}
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
    const student = reactive({
      id: "",
      nama_mahasiswa:"",
      alamat: "",
      no_tlp: "",
      email:"",

      
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = student.id;
      let nama_mahasiswa = student.nama_mahasiswa;
      let alamat = student.alamat;
      let no_tlp = student.no_tlp;
      let email = student.email;
      
      axios
        .post("http://127.0.0.1:8000/api/students/api/students", {
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
          console.log(error);
        });
    }
    return {
      student,
      validation,
      router,
      store,
    };
  },
};
</script>
