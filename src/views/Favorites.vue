<template>
  <div class="my-favorites">
    <h2 class="f-title">Meus Favoritos</h2>
    <div v-if="all_favorites[0]">
      <Repositories :repositories="all_favorites" />
    </div>
    <div class="no-favorites" v-else>
      <p>No momento não nenhum respositório marcado como favorito!</p>
      <img :src="'/images/search-no-found-image.png'" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Repositories from "@/components/Repositories.vue";

export default {
  name: "Favorites",
  data() {
    return {
      showDismissibleAlert: false,
    };
  },
  computed: {
    ...mapGetters({
      all_favorites: "getFavorites",
    }),
  },
  components: { Repositories },
};
</script>

<style scoped>
/** dafault */
.my-favorites {
  margin-top: 50px;
  padding: 0px 4rem;
}
.f-title, .no-favorites {
  font-weight: 600;
  font-size: 21px;
  line-height: 32px;
  text-align: center;
  color: #32c0c6;
}

.no-favorites{
  margin-top: 50px;
}
</style>