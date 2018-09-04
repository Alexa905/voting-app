<template>
    <div>
        <input class="input-search" type="search" v-model="search" placeholder="Search card by title">
        <ul class="card-list">
            <li v-for="card in filteredCards" :key="card.id">
                <CardListItem :card="card" :updateCard="updateCard"/>
            </li>
        </ul>
    </div>
</template>


<script>
    import CardListItem from '@/components/CardListItem.vue';
	export default {
		name: 'VoteCardsList',
		props: ['cards'],
		components: {CardListItem},
		data(){
			return {
				search: ''
			}
		},
		methods: {
			updateCard(card) {
				this.$http.put(`${this.$router.options.server}/api/card/${card.id}`, card)
					.then(() => {})
					.catch((data) => {
						window.console.error('ERROR', data);
					});
			}
		},
		computed: {
			filteredCards: function () {
				return this.cards.filter(card => card.title.match(this.search))
			}
		}
	};
</script>

<style scoped>

    h3 {
        margin: 40px 0 0;
    }

    button{
        background: #5e5e5e;
        outline: none;
        border: none;
        color: #ffffff;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 16px;
        margin-right: 5px;
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }

    .name {
        color: white;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid white;
        background-color: #5e5e5e;
        margin: 0 -10px;
        padding: 0 10px;
    }

    .input-search {
        width: 30%;
        height: 30px;
        outline: none;
        box-shadow: none;
        border: 1px solid #5e5e5e;
        padding: 0 10px;
        top: -15px;
        position: relative;
        font-size: 14px;
        background: rgba(255, 255, 255, .5);
        display: block;
        margin-left: 20px;
        border-radius: 3px;
    }

    li {
        width: 100%;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, .1);
        text-align: left;
        margin: 0 10px 25px 20px;
        background: #ffe8c7;
        border-radius: 2px;
        color: #5e5e5e;
        padding: 0 10px 10px;
        text-decoration: none;
        display: block;
        transition: all 0.3s;
        position: relative;
        background: rgba(255, 255, 255, .5);
    }

    li:first-child {
        background: #ffe8c7;
    }

    li:nth-of-type(2n) {
        background: #a8cbff;
    }

    li:nth-of-type(3n) {
        background: #fffe8d;
    }

    li:last-child {
        background: #adffbf;
    }

    a {
        color: #5e5e5e;
        text-decoration: none;
    }

    a:hover {
        background: rgba(255, 255, 255, .0);
    }

    a:hover:after {
        content: "Edit";
        position: absolute;
        top: 8px;
        right: 12px;
        color: white;
        font-size: 12px;
        opacity: 1;
        z-index: 10;
    }

    .edit-icon {
        background-size: cover;
        background-repeat: none;
        display: inline-block;
        width: 20px;
        position: absolute;
        bottom: 15px;
        right: 20px;
        height: 20px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPbSURBVGhD7dlHiBRNGMbxNWPO8WBWEMWcMKEiBjwoiicPehDBo1dRUC8ezVlvejOAehBExZxzAEHMophzOBj+z64FLy/dsz3L1M4O+MCPb/2mlq5nHLuraspqYMZiCZZiPGqhpNIIB/DHOY42KImoxDH4EsFttEWNzy4kFbBKokxfvEJSAUtl2qFGZRT6VPxYnn4ouTIT8BkvYMv0R8mUmYqvCJMq2TL74CflywzAa/hx3mU0QFFSH4fgJ+XLDMQb+HHeQlRb9A7PqPixPIUsswfVEk1GH5OfmK3/8S9ZywzCW/hxwWFEjyZh31GVmYKQrGUG4x38OFmBqNHF/Tt5BS1hk1bmJSor8wEdES1D4S+qO4wtoQIhWcsMwXvotR+YiGgZDr1TdkIq0QIhvXEfWT5mvozeJD1nppf/KVJGwpe4BFuiF55Br31DVco0+fffKNHaKZ8SQVXLRMlofIS9sEo0R4hKPIUdE1xFbYSklTmDaBmDT7AXvAhboifSStxFB/j4MteRNK4g0f5aq1g7sQuoagntz4dV/FieUOYk7Ee0oBmHL7AT8yV6IFeJ9ghRiZ1IWgFoKxwlOt2wS3E5j6wl7sCX2IHwui8TJXoI+RLn4Es8gR0TVFYiuIG6iJJJqKxEd+QqYTdDKrENflzaDaAgmQxf4iyylvA7urQS/m+soNEDSw8ue0Hd022JbngMOyZIKrEVlY0raLTH/g57wXxK3II9j1KJLfDjbiLaudU0aJVpL3gazRCiEo9gxwR+cmklriFaCa0udRu0F/QluiKfEpvhx2l50hpRMgtJJZoiJFcJ3Tp9iU3w47TRaoUo0bnSL9gLnoIv8RB2TKA1UZYSfqNV8KyCvaAv0QX5lNgIP84v76NEn+1wQS0I8ylhv8dQiQ3w4/x6LEo6w150P0JU4gHs64HuOr7EevhxfhUQLYtgL7wASj1oOe3/7UhSiXXw4/yzJ2rsRuY3OsFGE5mDMEYl7K0zrYS/bUeNNvT2Ca5bY1LqQLdmf/9XibWwBcTfLKJnJuwEViIt+qrMl1gD+/uinV3UE4+kbIedxAikRX8rIWklTqAxqjWazHOESeio055qpEW/txq2gOgr5Wjb01zRuaqdyG7kih56c3EQ9vfkKIpSQlkGOxkdoulYM0TvvMpqnDZTSbdhOYKilVB0cOAnpTLzof20jvn9656WHQ1RtGhHlvYOZ3EPWp9FPd7PknlImmAaPUP0EVoMHb7VmOgfdtKELX20dHims6ZqfbjlE32Z6Ceu5Yk+88uhI8wst+KiRxPVly768mQvtFCMdqb0PzlTVvYXWUqWdd8j3DAAAAAASUVORK5CYII=")
    }
</style>
