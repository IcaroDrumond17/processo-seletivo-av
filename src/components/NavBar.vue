<template>
  <div class="navbar">
    <nav class="item-search">
      <form @submit="sendData($event)">
        <input type="text" v-model="name" placeholder="Buscar usuário" />
        <button type="submit">
          <b-icon icon="search" scale="1.2"></b-icon>
        </button>
      </form>
      <router-link to="/favoritos" id="favorites">
        <b-icon icon="heart" scale="1.4"></b-icon>
        <span>Favoritos</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      name: null,
    };
  },
  methods: {
    sendData(e) {
      e.preventDefault();
      this.$root.$emit("Home", this.name);
    },
  },
};
</script>

<style scoped>
/** dafault */
.navbar {
  margin: 0;
  padding: 0;
}
.item-search {
  background-color: #ffffff;
  border-bottom: 1px solid #e3e6e9;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
}

.item-search form {
  padding-left: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-search form input {
  margin: 10px 0px;
  padding: 12px 16px 14px;
  width: 60vw;
  max-width: 668px;
  height: 40px;
  border: 1px solid#E3E6E9;
  border-radius: 4px;
}

.item-search form input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

.item-search form button {
  margin: 20px 0.1rem;
  height: 40px;
  width: 50px;
  background-color: transparent;
  border: 1px solid#E3E6E9;
  border-radius: 4px;
}

.item-search #favorites {
  margin-right: 0;
  width: 145px;
  height: 80px;
  background-color: #32c0c6;
  color: #ffffff;
  border: 1px solid#32c0c6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.item-search #favorites span {
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.item-result {
  margin-top: 50px;
  padding: 1rem;
}

/** > 1024 */
@media screen and (min-width: 1024px) {
  .item-search form input {
    width: 668px;
  }
}
</style>
