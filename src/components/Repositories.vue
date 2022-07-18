
<template>
  <div>
    <div class="repository" v-for="(item, index) in repositories" :key="index">
      <div class="row-1" v-if="item.node.name">
        <p class="r-title">{{ item.node.name }}</p>
        <img
          @click="controlRepFavorites(item.node.favorite, index, item)"
          class="r-icon"
          :id="'favorite-img-' + index"
          :src="
            item.node.favorite
              ? '/images/favorited.png'
              : '/images/unfavorite.png'
          "
          alt="Favorito"
        />
      </div>
      <div class="row-2" v-if="item.node.description">
        <p class="r-description">{{ item.node.description }}</p>
      </div>
      <div class="row-3" v-if="item.node.primaryLanguage">
        <p class="r-language">
          <b-icon
            icon="record-fill"
            scale="1.5"
            :style="'color: ' + item.node.primaryLanguage.color + ';'"
          ></b-icon
          >&nbsp;
          {{ item.node.primaryLanguage.name }}
        </p>
        <p class="r-updatedAt">{{ item.node.updatedAt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Repositories",
  props: {
    repositories: Array,
  },
  data() {
    return {
      favorite_img: false,
    };
  },
  computed: {
    ...mapGetters({
      all_favorites: "getFavorites",
      all_repositories: "getRepositories",
    }),
  },
  methods: {
    ...mapMutations(["controlFavorites"]),
    controlRepFavorites(f, index, rep) {
      let img = document.querySelector(`#favorite-img-${index}`);
      this.all_repositories[index].node.favorite = !f;
      rep.node.favorite = !f;
      
      if (!f) {
        img.setAttribute("src", "/images/favorited.png");
        this.all_favorites.push(rep);
        this.controlFavorites(this.all_favorites);
      } else {

        let newRepos = [];
        this.all_favorites.forEach((item) => {
          if (rep.cursor != item.cursor){
            img.setAttribute("src", "/images/favorited.png");
            item.node.favorite = true;
            newRepos.push(item);
          }else{
            img.setAttribute("src", "/images/unfavorite.png");
          }
            
        });
        this.controlFavorites(newRepos);
      }
    }
  },
};
</script>

<style scoped>
.repository {
  margin: 20px auto;
  padding: 10px;
  height: 140px;
  width: 100%;
  border: 1px solid #e3e6e9;
  border-radius: 4px;
  box-shadow: 4px 4px 10px -8px #000;
}

.repository .r-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #616161;
}

.repository .r-description {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8c8c8c;
}

.repository .r-language {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #616161;
}

.repository .r-updatedAt {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #616161;
}

.repository .row-1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.repository .row-1 .r-icon {
  width: 40px;
  height: 40px;
}

.repository .row-3 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
}

.repository .row-3 p {
  margin: 0px 1rem 0px 0px;
}
</style>