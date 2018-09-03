<template>
    <div>
        <input class="input-search" type="search" v-model="search" placeholder="Search user by name">
        <ul class="user-list">
            <li v-for="user in filteredUsers" :key="user.id">
                <router-link :to="{ path: `./user/${user.id}` }">
                    <p class="name"><b>{{ user.name}}</b></p>
                    <p>country: <b>{{ user.country || "-"}}</b></p>
                    <p>date of birth: <b>{{ user.birthday || "-"}}</b></p>
                    <p>superuser: <b>{{ user.isSuperUser ? 'yes' : "no"}}</b></p>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
  export default {
    name: 'UserLists',
    props: ['users'],
    data(){
      return {
        search: ''
      }
    },
    computed: {
      filteredUsers: function () {
        return this.users.filter(user => user.name.match(this.search))
      }
    }
  };
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
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

    .input-search{
        width: 30%;
        height: 30px;
        outline: none;
        box-shadow: none;
        border: 1px solid #5e5e5e;
        padding: 0 10px;
        top: -15px;
        position: relative;
        font-size: 14px;
        background: rgba(255,255,255,.5);
        display: block;
        margin-left: 20px;
        border-radius: 3px;
    }

    li {
        width: 30%;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, .1);
        text-align: left;
        margin: 0 10px 25px 20px;
        background: #ffe8c7;
        border-radius: 2px;
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
        padding: 0 10px 10px;
        text-decoration: none;
        display: block;
        transition: all 0.3s;
        position: relative;
        background: rgba(255, 255, 255, .5);
    }

    a:hover {
        background: rgba(255, 255, 255, .0);
    }

    a:hover:after {
        content: "View more";
        position: absolute;
        top: 8px;
        right: 12px;
        color: white;
        font-size: 12px;
        opacity: 1;
        z-index: 10;
    }
</style>
