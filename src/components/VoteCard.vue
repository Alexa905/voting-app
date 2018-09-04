<template>
    <div class="vote-card">
        <h3>User card</h3>
        <div class="vote-card-info">
            <p>Title: <b>{{ card.title}}</b></p>
            <p>Genre: <b>{{ card.description || "-"}}</b></p>
            <p>Votes: <b>{{ card.votes || "0"}}</b></p>
            <p>Created: <b>{{ card.createdAt}}</b></p>
            <p>Last update: <b>{{ card.updatedAt}}</b></p>
        </div>
        <div class="vote-card-footer">
            <button v-on:click="switchMode">Edit Card</button>
        </div>
    </div>

</template>

<script>
  export default {
    name: 'VoteCard',
    props: ['card', 'switchMode'],

  };
</script>

<style scoped>
    .vote-card {
        width: 60%;
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
    .vote-card-info{
        padding: 20px;
    }
    .vote-card-footer{
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
