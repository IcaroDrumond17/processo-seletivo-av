import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import VueApollo from 'vue-apollo'
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from 'apollo-boost'

Vue.use(VueApollo)

const AUTH_TOKEN = 'SEU-TOKEN-AQUI'

const apolloClient = new ApolloClient({
  link: new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: 'Bearer ' + AUTH_TOKEN
      }
    });
    return forward(operation);
  }).concat(
    new HttpLink({
      uri: '  https://api.github.com/graphql'
    })
  ),
  cache: new InMemoryCache()
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')