<template>
    <div>
        <form>
            <fieldset>
                <legend>Edit card</legend>
                <div class="form-content">
                    <p>Title<sub>*</sub>: <input required v-model="card.title" type="text"/><br></p>
                    <p>Genre: <textarea noresize v-model="card.description"></textarea></p>
                    <p>Votes: <input disabled v-model="card.votes" type="number"/><br></p>
                </div>
                <div class="form-footer">
                    <button v-on:click.prevent="save" v-bind:disabled="!card.title">Save</button>
                    <button v-on:click.prevent="cancel">Cancel</button>
                    <button v-on:click.prevent="deleteCard">Delete Card</button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'EditUser',
    props: ['card', 'updateCard', 'switchMode', 'deleteCard'],
    data() {
      return {
        submitted: false,
        initialState: Object.assign({}, this.card)
      };
    },
    methods: {
      cancel(){
        this.card = Object.assign(this.card, this.initialState);
        this.switchMode();
      },
      save(){
        this.updateCard();
      }
    }
  };
</script>


<style scoped>
    form {
        width: 80%;
        border: 1px solid black;
        text-align: left;
        margin: 0 auto 20px auto;
        background: ghostwhite;
    }

    fieldset {
        border: none;
        padding: 0;
        margin: 0;
    }

    legend {
        font-size: 16px;
        font-weight: bold;
        color: #42b983;
        padding: 10px 0;
        display: block;
        width: 100%;
        margin: 0;
        border-bottom: 1px solid #5e5e5e;
        text-align: center;
    }

    .form-content {
        padding: 20px;
    }

    .form-footer {
        border-top: 1px solid #5e5e5e;
        padding: 12px 0;
        text-align: center;
    }

    p {
        display: flex;
        text-align: left;
        justify-content: space-between;

    }

    input, textarea {
        width: 85%;
        margin-left: auto;
        resize: none;
    }

    input[type="checkbox"] {
        margin-right: auto;
        margin-left: 30px;
        width: auto;
    }

    button {
        background: white;
        border-radius: 2px;
        margin-right: 10px;
        border: 1px solid #42b983;
        cursor: pointer;
        min-width: 70px;
        font-size: 14px;
        color: #42b983;
        padding: 5px 10px;
    }

    button:disabled {
        cursor: default;
    }
</style>
