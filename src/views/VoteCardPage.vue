<template>
    <div class="card-page">
        <div v-if="isCardExist && !message">
            <component v-bind:is="component"
                       v-bind:card="card"
                       v-bind:deleteCard="deleteCard"
                       v-bind:updateCard="updateCard"
                       v-bind:switchMode="switchMode">
            </component>
        </div>
        <div v-if="message">{{ message }}</div>
        <div v-if="!isCardExist">Card Not Found</div>
    </div>

</template>

<script>

  import VoteCard from '@/components/VoteCard.vue';
  import EditCard from '@/components/EditCard.vue';

  export default {
    name: 'Home',
    components: {
	    VoteCard, EditCard,
    },
    data() {
      return {
        id: this.$route.params.id,
        card: {},
        message: '',
        component: EditCard,
        editMode: true
      };
    },
    computed: {
      isCardExist() {
        return Object.keys(this.card).length;
      },
    },
    created() {
      this.$http.get(`${this.$router.options.server}/api/card/${this.id}`)
        .then((data) => {
          this.card = data.body;
        })
        .catch((data) => {
          window.console.error('ERROR', data);
        });
    },
    methods: {
      switchMode() {
        this.editMode = !this.editMode;
        this.message = '';
        this.component =  this.editMode ? 'EditCard' : 'VoteCard';
      },
      deleteCard() {
        this.$http.delete(`${this.$router.options.server}/api/card/${this.id}`)
          .then(() => {
            this.message = 'Item has been deleted successfully!';
            window.setTimeout(() => {
              this.$router.push({name: 'HOME PAGE'});
            }, 2000);
          })
          .catch((data) => {
            window.console.error('ERROR', data);
          });
      },
      updateCard() {
        this.$http.put(`${this.$router.options.server}/api/card/${this.card.id}`, this.card)
          .then(() => {
            this.message = 'Card has been updated successfully!';
            window.setTimeout(() => {
              this.switchMode()
            }, 1000);
          })
          .catch((data) => {
            window.console.error('ERROR', data);
          });
      }
    },
  };
</script>
