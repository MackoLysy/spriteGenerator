<template>
  <div>
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          <span>Sprite</span>
        </h4>
        <div class="d-flex md-form justify-content-center" style="margin:0;">
          <input aria-label="Search" class="form-control" placeholder="Serach sprite" type="search" />
          <mdb-btn color="primary" size="sm" class="my-0">
            <i class="fa fa-search"></i>
          </mdb-btn>
          <mdb-btn color="primary" size="sm" class="my-0" v-on:click="showAddSpiteModa()">
            <i class="fa fa-plus"></i>
          </mdb-btn>
        </div>
      </mdb-card-body>
    </mdb-card>
    <section>
      <mdb-row>
        <mdb-col md="12" class="mb-4">
          <mdb-card>
            <mdb-card-body>
              <mdb-tbl hover>
                <thead class="blue">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Path</th>
                    <th>Person</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(sprite, i) in spriteData" :key="i">
                    <th scope="row">{{i+1}}</th>
                    <td>{{ sprite.name }}</td>
                    <td>{{ sprite.type }}</td>
                    <td>{{ sprite.path }}</td>
                    <td>{{ sprite.person }}</td>
                    <td>
                      <i
                        class="fas fa-edit mr-2 blue-text"
                        v-on:click="edit(sprite)"
                        aria-hidden="true"
                      ></i>
                      <i
                        class="fas fa-trash mr-2 blue-text"
                        v-on:click="remove(sprite._id)"
                        aria-hidden="true"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </mdb-tbl>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
    <add-sprite :gameId="gameId" :show="addModal" @update="hideAddSpiteModa"></add-sprite>
  </div>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbTbl, mdbCardBody, mdbBtn } from "mdbvue";

import addSprite from "@/components/DashboardComponents/AddSprite";

export default {
  name: "DashboardNew",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbTbl,
    mdbCardBody,
    mdbBtn,
    addSprite
  },
  props: { gameId: { default: "" } },

  beforeMount: function() {},
  data: function() {
    return {
      sprriteData: null,
      addModal: false,
      spriteData: [
        {
          type: "Symbol1",
          name: "Super1.png",
          path: "Super Sciezka1!",
          person: "Macko"
        },
        {
          type: "Symbol2",
          name: "Super2.png",
          path: "Super Sciezka2!",
          person: "Macko"
        },
        {
          type: "Symbol3",
          name: "Super3.png",
          path: "Super Sciezka3!",
          person: "Macko"
        },
        {
          type: "Symbol4",
          name: "Super4.png",
          path: "Super Sciezka4!",
          person: "Macko"
        }
      ]
    };
  },
  methods: {
    showAddSpiteModa() {
      this.addModal = true;
    },
    hideAddSpiteModa(){
      this.addModal = false;
    }
  }
};
</script>

<style>
thead tr th {
  color: white;
}
</style>