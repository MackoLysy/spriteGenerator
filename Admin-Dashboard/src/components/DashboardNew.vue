<template>
  <div>
    <h1>Sprites</h1>
    <section>
      <mdb-row>
        <mdb-col md="12" class="mb-4">
          <mdb-card>
            <mdb-card-body>
              <mdb-tbl hover>
                <thead class="blue">
                  <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Path</th>
                    <th>Person</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(sprite, i) in spriteData" :key="i">
                    <th scope="row">{{i+1}}</th>
                    <td>{{ sprite.name }}</td>
                    <td>{{ sprite.type }}</td>
                    <td>{{ sprite.path }}</td>
                    <td>{{ sprite.person }}</td>
                  </tr>
                </tbody>
              </mdb-tbl>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </div>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbTbl, mdbCardBody } from "mdbvue";

export default {
  name: "DashboardNew",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbTbl,
    mdbCardBody
  },
  props: { gameId: { default: 1 } },

  beforeMount: function() {},
  data: function() {
    return {
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
  }
};
</script>

<style>
thead tr th {
  color: white;
}
</style>