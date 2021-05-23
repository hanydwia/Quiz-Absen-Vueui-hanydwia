<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add absen</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputketerangan4" class="form-label">Id</label>
          <input
            type="text"
            class="form-control"
            id="inputketerangan4"
            v-model="absen.id"
          />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Waktu Absen</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="absen.waktu_absen"
          />
          <div class="alert alert-danger" v-if="validation.waktu_absen">
            {{ validation.waktu_absen[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Mahasiswa</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan mahasiswa"
            v-model="absen.mahasiswa"
          />
          <div class="alert alert-danger" v-if="validation.mahasiswa">
            {{ validation.mahasiswa[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Mata Kuliah</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan mata_kuliah"
            v-model="absen.mata_kuliah"
          />
          <div class="alert alert-danger" v-if="validation.mata_kuliah">
            {{ validation.mata_kuliah[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Keterangan</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan keterangan"
            v-model="absen.keterangan"
          />
          <div class="alert alert-danger" v-if="validation.keterangan">
            {{ validation.keterangan[0] }}
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
    const absen = reactive({
      id: "",
      waktu_absen:"",
      mahasiswa: "",
      mata_kuliah: "",
      keterangan:"",

      
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = absen.id;
      let waktu_absen = absen.waktu_absen;
      let mahasiswa = absen.mahasiswa;
      let mata_kuliah = absen.mata_kuliah;
      let keterangan = absen.keterangan;
      
      axios
        .post("http://127.0.0.1:8000/api/absens", {
          id: id,
          waktu_absen: waktu_absen,
          mahasiswa: mahasiswa,
          mata_kuliah: mata_kuliah,
          keterangan: keterangan,
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
      absen,
      validation,
      router,
      store,
    };
  },
};
</script>
