<template>
  <div class="home">
    <UserLists v-bind:users="users" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserLists from '@/components/UserLists.vue';

export default {
  name: 'Home',
  data() {
    return {
      users: [],
    };
  },
  components: {
    UserLists,
  },
  created() {
    this.$http.get(`${this.$router.options.server}/api/cards/`)
      .then((data) => {
        this.users = data.body;
      })
      .catch((data) => {
        window.console.error('ERROR', data);
      });
  },
};
</script>
