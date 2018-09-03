<template>
    <div class="user-card">
        <h3>User card</h3>
        <div class="user-card-info">
            <p>Name: <b>{{ user.name}}</b></p>
            <p>Country: <b>{{ user.country || "-"}}</b></p>
            <p>Email: <b>{{ user.email || "-"}}</b></p>
            <p> Date of birth: <b>{{ user.birthday || "-"}}</b></p>
            <p>Password: <b>**********</b></p>
            <p> Superuser: <b>{{user.isSuperUser ? 'yes' : 'no'}}</b></p>
            <p>Notes: <b>{{ user.notes || "-"}}</b></p>
        </div>
        <div class="user-card-footer">
            <button v-on:click.prevent="deleteUser">Delete User</button>
            <button v-on:click="switchMode">Edit User</button>
        </div>
    </div>

</template>

<script>
  export default {
    name: 'UserCard',
    props: ['user', 'switchMode', 'deleteUser'],

  };
</script>

<style scoped>
    .user-card {
        width: 80%;
        border: 1px solid black;
        text-align: left;
        margin: 0 auto 20px auto;
        background: ghostwhite;
    }

    h3 {
        color: #42b983;
        padding: 10px 0;
        margin: 0;
        border-bottom: 1px solid #5e5e5e;
        text-align: center;
    }
    .user-card-info{
        padding: 20px;
    }
    .user-card-footer{
        border-top: 1px solid #5e5e5e;
        padding: 12px 0;
        text-align: center;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
        text-decoration: none;
        display: block;
    }

    button {
        background: white;
        border-radius: 2px;
        margin: 0 10px;
        border: 1px solid #42b983;
        cursor: pointer;
        min-width: 70px;
        font-size: 14px;
        color: #42b983;
        padding: 5px 10px;
    }
</style>
