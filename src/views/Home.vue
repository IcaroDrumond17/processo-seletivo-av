<template>
  <div class="home">
    <div class="item-result">
      <div v-if="user && exists">
        <UserInfo :user="user" />
      </div>
      <div v-else>
        <DefaultItem :name="nameNotFound" />
      </div>
    </div>
  </div>
</template>

<script>
import DefaultItem from "@/components/DefaultItem.vue";
import UserInfo from "@/components/UserInfo.vue";
import gql from "graphql-tag";

const ALL_REPOS_QUERY = gql`
  query ($login: String!, $first: Int!, $after: String) {
    user(login: $login) {
      id
      name
      login
      avatarUrl
      bio
      twitterUsername
      repositories(first: $first, after: $after) {
        totalCount
        edges {
          cursor
          node {
            id
            name
            description
            updatedAt
            primaryLanguage {
              color
              id
              name
            }
          }
        }
      }
    }
  }
`;

export default {
  name: "Home",
  components: { DefaultItem, UserInfo },
  data() {
    return {
      user: null,
      nameNotFound: null,
      first: 10,
    };
  },
  mounted() {
    this.$root.$on("Home", (name) => {
      this.getNewLogin(name);
    });
  },
  methods: {
    getNewLogin(name, cursor = null) {
      this.exists = false;
      if (name) {
        this.user = null;
        this.$apollo
          .mutate({
            mutation: ALL_REPOS_QUERY,
            variables: {
              login: name,
              first: 100,
              last: cursor,
            },
          })
          .then((data) => {
            // Result
            if (data.data.user.name != null) {
              this.user = data.data.user;
              this.exists = true;
              this.user.repositories.edges.forEach((item) => {
                item.node.favorite = false;
              });
            } else {
              this.nameNotFound = name;
              this.user = null;
            }
            //console.log(this.user);
          })
          .catch((error) => {
            // Error
            //console.error(error);
            this.user = null;
            this.nameNotFound = name;
          });
      }
    },
  },
};
</script>

<style scoped>
/** dafault */
.home {
  margin-top: 50px;
}
</style>