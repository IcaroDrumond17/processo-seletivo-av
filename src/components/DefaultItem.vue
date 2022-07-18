<template>
  <div class="default-items">
    <div class="items">
      <div v-if="name">
        <p id="user_name">"{{ name }}"</p>
        <p id="default_title">Nenhum usuário encontrado</p>
        <p id="default_text">
          Verifique se a escrita está correta ou tente novamente
        </p>
        <img :src="'/images/search-no-found-image.png'" />
      </div>
      <div v-else>
        <p id="default_title">Procure pelo Nome ou Nome de Usuário</p>
        <p id="default_text">
          Encontre os repositórios de algum usuário digitando no campo acima
        </p>
        <img :src="'/images/default-image.png'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultItem",
  props: {
    name: String,
  },
};
</script>

<style>
.default-items {
  width: 100%;
  text-align: center;
}

.default-items .items {
  max-width: 562px;
  max-height: 361px;
  margin: 0px auto;
}

.default-items .items #user_name {
  margin: 0;
  font-weight: 600;
  font-size: 21px;
  line-height: 31.5px;
  color: #32c0c6;
}

.default-items .items #default_title {
  margin: 0;
  font-weight: 600;
  font-size: 21px;
  line-height: 32px;
  color: #616161;
}

.default-items .items #default_text {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #616161;
}

.default-items .items img {
  margin-top: 50px;
}
</style>