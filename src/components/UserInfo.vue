<template>
  <div class="user-info">
    <UserAvatar
      :perfil="{
        avatarUrl: user.avatarUrl,
        name: user.name,
        bio: user.bio,
        twitterUsername: user.twitterUsername,
      }"
    />
    <div class="repositories">
      <h2 class="rs-title">Repositórios</h2>
      <div class="box-repositories">
        <div v-if="all_repositories[0]">
          <Repositories :repositories="all_repositories" />
        </div>
        <div class="no-repositories" v-else>
          <p>
            O usuário {{ user.name }} não possui nenhum repositório no momento!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from "./UserAvatar.vue";
import Repositories from "./Repositories.vue";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "UserInfo",
  components: { UserAvatar, Repositories },
  props: {
    user: Object,
  },
  created() {
    this.controlRepRepositories(this.user.repositories.edges);
  },
  computed: {
    ...mapState({
      repositories: (state) => state.repositories,
    }),
    ...mapGetters({
      all_repositories: "getRepositories",
    }),
  },
  methods: {
    ...mapMutations(["controlRepositories"]),
    controlRepRepositories(repositories) {
      let newRepos = [];
      repositories.forEach((item) => {
        item.node.favorite = false;
        newRepos.push(item);
      });
      this.controlRepositories(newRepos);
    },
  },
};
</script>

<style scoped>
/** dafault */
.user-info {
  display: flex;
  align-items: flex-start;
  align-content: space-around;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.repositories {
  padding: 5px;
  margin: 5px 10px;
  width: 100%;
  max-width: 896px;
}

.box-repositories {
  max-height: 800px;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #4e4e4e;
}

.box-repositories::-webkit-scrollbar {
  display: none;
}

.repositories .rs-title,
.no-repositories {
  margin: 20px auto;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #32c0c6;
  text-align: center;
}
</style>