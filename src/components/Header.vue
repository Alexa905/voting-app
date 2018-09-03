<template>
    <header>
        <router-link :to="{ path: `/` }" replace>Home</router-link>
        <router-link :to="{ path: `/users/add` }" replace>Add User</router-link>
    </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>


<style scoped>
    header {
        background: #5e5e5e;
        padding: 10px;
        margin-bottom: 50px;
    }

    a {
        color: white;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        margin: 0 20px;
    }
</style>
