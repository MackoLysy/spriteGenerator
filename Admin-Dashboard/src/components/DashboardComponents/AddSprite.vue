<template>
  <div>
    <h1>AddSprite</h1>
    <mdb-modal :show="show" @close="close()">
      <mdb-modal-header>
        <mdb-modal-title>Add New Sprite</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <form>
          <label for="defaultFormLoginEmailEx" class="black-text">Name:</label>
          <input type="text" id="name" v-model="name" name="name" class="form-control" />
          <label for="defaultFormLoginEmailEx" class="black-text">Type:</label>
          <input type="text" id="type" v-model="type" name="type" class="form-control" />
          <label for="defaultFormLoginEmailEx" class="black-text">Choose file:</label>
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="file"
              ref="file"
              v-on:change="handleUploadFile()"
            />
            <label class="custom-file-label" for="inputGroupFile01">{{fileName}}</label>
          </div>
        </form>
        <label class="red-text">{{error}}</label>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="red" @click.native="close()">Close</mdb-btn>
        <mdb-btn color="primary" @click.native="add()">Add</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "addSprite",
  props: {
    show: { type: Boolean, default: false },
    gameId: { type: String, required: true }
  },
  data() {
    return {
      type: null,
      name: null,
      file: null,
      fileName: null,
      error: null,
      urlLink: "http://192.168.88.206:3000"
    };
  },
  methods: {
    add() {
      if (!this.validateField(this.name)) {
        this.error = "Field name cannot be empty!";
        return;
      }
      if (!this.validateField(this.type)) {
        this.error = "Field type cannot be empty!";
        return;
      }
      if (!this.validateField(this.fileName)) {
        this.error = "Please choose file!";
        return;
      }
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('type', this.type);
      formData.append('file', this.file);
      formData.append('gameId', this.gameId);
      axios
        .post(this.urlLink + "/sprite/add", formData)
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    close() {
      this.$emit("update");
    },
    handleUploadFile() {
      this.file = this.$refs.file.files[0];
      this.fileName = this.file.name;
    },
    validateField(value) {
      if (value == "" || value == null) {
        return false;
      }
      return true;
    }
  }
};
</script>

