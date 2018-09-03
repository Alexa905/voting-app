<template>
    <div class="user-page">
        <div v-if="isUserExist && !message">
            <component v-bind:is="component"
                       v-bind:user="user"
                       v-bind:deleteUser="deleteUser"
                       v-bind:updateUser="updateUser"
                       v-bind:switchMode="switchMode">
            </component>
        </div>
        <div v-if="message">{{ message }}</div>
        <div v-if="!isUserExist">User Not Found</div>
    </div>

</template>

<script>

  import UserCard from '@/components/UserCard.vue';
  import EditUser from '@/components/EditUser.vue';

  export default {
    name: 'Home',
    components: {
      UserCard, EditUser,
    },
    data() {
      return {
        id: this.$route.params.id,
        user: {},
        message: '',
        component: UserCard,
        editMode: false
      };
    },
    computed: {
      isUserExist() {
        return Object.keys(this.user).length;
      },
    },
    created() {
      this.$http.get(`${this.$router.options.server}/api/card/${this.id}`)
        .then((data) => {
          this.user = data.body;
        })
        .catch((data) => {
          window.console.error('ERROR', data);
        });
    },
    methods: {
      switchMode() {
        this.editMode = !this.editMode;
        this.message = '';
        this.component =  this.editMode ? 'EditUser' : 'UserCard';
      },
      deleteUser() {
        this.$http.delete(`${this.$router.options.server}/api/card/${this.id}`)
          .then(() => {
            this.message = 'User has been deleted successfully!';
            window.setTimeout(() => {
              this.$router.push({name: 'HOME PAGE'});
            }, 2000);
          })
          .catch((data) => {
            window.console.error('ERROR', data);
          });
      },
      updateUser() {
        this.$http.put(`${this.$router.options.server}/api/card/${this.user.id}`, this.user)
          .then(() => {
            this.message = 'User has been updated successfully!';
            window.setTimeout(() => {
              this.switchMode()
            }, 1000);
          })
          .catch((data) => {
            window.console.error('ERROR', data);
          });
      },
    },
  };
</script>
