<template>
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand href="/dashboardNew" target="_blank">Games</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-nav-item
            v-for="(game, i) in games"
            :key="i"
            v-on:click="chagneGame(i+1, game._id)"
            :class="activeGame === (i+1) && 'active'"
          >{{game.name}}</mdb-nav-item>
          <mdb-nav-item @click.native="modal = true">Add New Game</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper">
        
        <img alt class="img-fluid" src="./assets/logo_big.png" />
      </a>
      <mdb-list-group class="list-group-flush">
        <router-link to="/dashboardNew" @click.native="activeItem = 1">
          <mdb-list-group-item :action="true" :class="activeItem === 1 && 'active'">
            <mdb-icon icon="chart-pie" class="mr-3" />DashboardNew
          </mdb-list-group-item>
        </router-link>
        <router-link to="/profile" @click.native="activeItem = 2">
          <mdb-list-group-item :action="true" :class="activeItem === 2 && 'active'">
            <mdb-icon icon="user" class="mr-3" />Profile
          </mdb-list-group-item>
        </router-link>
        <router-link to="/tables" @click.native="activeItem = 3">
          <mdb-list-group-item :action="true" :class="activeItem === 3 && 'active'">
            <mdb-icon icon="table" class="mr-3" />Tables
          </mdb-list-group-item>
        </router-link>
        <router-link to="/maps" @click.native="activeItem = 4">
          <mdb-list-group-item :action="true" :class="activeItem === 4 && 'active'">
            <mdb-icon icon="map" class="mr-3" />Maps
          </mdb-list-group-item>
        </router-link>
        <router-link to="/404" @click.native="activeItem = 5">
          <mdb-list-group-item :action="true" :class="activeItem === 5 && 'active'">
            <mdb-icon icon="exclamation" class="mr-3" />404
          </mdb-list-group-item>
        </router-link>
      </mdb-list-group>
    </div>
    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Add New Game</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <!-- Default form login -->
        <form>
          <label for="defaultFormLoginEmailEx" class="black-text">Game Name:</label>
          <input type="text" id="gameName" v-model="gameName" name="gameName" class="form-control" />
        </form>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="red" @click.native="modal = false">Close</mdb-btn>
        <mdb-btn color="primary" @click="addGame()">Save changes</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <router-view :gameId="gameId"></router-view>
      </div>
      <ftr color="primary-color-dark" class="text-center font-small darken-2">
        <hr class="my4" />
        <div class="pb-4">
          <a href="#">
            <mdb-icon fab icon="facebook-square" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="twitter" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="youtube" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="google-plus" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="dribbble" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="pinterest" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="github" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="codepen" class="mr-3" />
          </a>
        </div>
        <p class="footer-copyright mb-0 py-3 text-center">
          &copy; {{ new Date().getFullYear() }} Copyright:
          <a
            href="https://mdbootstrap.com/docs/vue/"
          >MDBootstrap.com</a>
        </p>
      </ftr>
    </main>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbIcon,
  mdbListGroup,
  mdbListGroupItem,
  mdbFooter,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtn,
  waves
} from "mdbvue";

import axios from "axios";

export default {
  name: "AdminTemplate",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn,
    ftr: mdbFooter
  },
  data() {
    return {
      activeItem: 1,
      activeGame: 1,
      gameId: "",
      apiLink: "http://localhost:3000",
      games: null,
      modal: false,
      gameName: null
    };
  },
  mounted() {
    this.getGames();
  },
  methods: {
    chagneGame(id, gameId) {
      this.activeGame = id;
      this.gameId = gameId;
    },
    getGames() {
      let vm = this;
      axios.get(vm.apiLink + "/games").then(response => {
        vm.games = response.data;
        if (vm.games.length > 0) {
          vm.activeGame = 1;
          vm.gameId = response.data[0]._id;
        }
      });
    },
    addGame() {
      if (this.gameName == null || this.gameName == "") {
        console.log("Puste!");
      } else {
        let vm = this;
        axios
          .post(vm.apiLink + "/games/add", { gameName: this.gameName })
          .then(() => {
            vm.getGames();
          });
        this.modal = false;
      }
    }
  },

  mixins: [waves]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #000000 !important;
  font-weight: bolder;
}
</style>

<style scoped>
main {
  background-color: #ededee;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
