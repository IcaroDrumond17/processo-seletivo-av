<template>
  <div class="perfil">
    <img v-show="perfil.avatarUrl" :src="perfil.avatarUrl" :alt="perfil.name" />
    <p v-show="perfil.name" class="p-title">{{ perfil.name }}</p>
    <p v-show="perfil.twitterUsername" class="p-twitter">
      @{{ perfil.twitterUsername }}
    </p>
    <p v-show="perfil.bio" class="p-bio">{{ perfil.bio }}</p>
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
  props: {
    perfil: Object,
  },
};
</script>

<style scoped>
/** dafault */
.perfil {
  margin: 5px 10px;
  padding: 1rem;
  max-width: 448px;
  max-height: 420px;
  border: 1px solid #e3e6e9;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  box-shadow: 4px 4px 10px -8px #000;
}

.perfil img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
}

.perfil .p-title {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 21px;
  font-weight: 600;
  line-height: 31.5px;
  color: #616161;
  text-align: center;
}

.perfil .p-twitter {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4e4e4e;
  text-align: center;
}

.perfil .p-bio {
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #4e4e4e;
  text-align: center;
}
</style>