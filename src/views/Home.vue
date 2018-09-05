<template>
    <div class="home">
        <VoteCardLists v-bind:cards="cards" :user="user"/>
    </div>
</template>

<script>
	// @ is an alias to /src
	import VoteCardLists from '@/components/VoteCardLists.vue';

	export default {
		name: 'Home',
		data() {
			return {
				cards: [],
				user:''
			};
		},
		components: {
			VoteCardLists,
		},
		created() {
			this.$http.get(`${this.$router.options.server}/api/cards/`)
				.then((data) => {
					this.cards = data.body;
				})
				.catch((data) => {
					window.console.error('ERROR', data);
				});
            this.$http.get(`${this.$router.options.server}/api/user`)
                            .then(res => {this.user = res.body;})
                            .catch((data) => {
                                window.console.error('ERROR', data);
                            });
		},
	};
</script>
