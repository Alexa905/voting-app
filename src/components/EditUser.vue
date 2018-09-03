<template>
    <div>
        <form>
            <fieldset>
                <legend>Edit user</legend>
                <div class="form-content">
                    <p>Name<sub>*</sub>: <input required v-model="user.name" type="text"/><br></p>
                    <p>Email: <input v-model="user.email" type="email"/><br></p>
                    <p>Country: <input v-model="user.country" type="text"/><br></p>
                    <p>Date of birth: <input v-model="user.birthday" type="text"/></p>
                    <p>Password: <input v-model="user.password" type="password"/></p>
                    <p> Superuser: <input v-model="user.isSuperUser" type="checkbox"/></p>
                    <p>Notes: <textarea noresize v-model="user.notes"></textarea></p>
                </div>
                <div class="form-footer">
                    <button v-on:click.prevent="save" v-bind:disabled="!user.name">Save</button>
                    <button v-on:click.prevent="cancel">Cancel</button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'EditUser',
    props: ['user', 'updateUser', 'switchMode'],
    data() {
      return {
        submitted: false,
        initialState: Object.assign({}, this.user)
      };
    },
    methods: {
      cancel(){
        this.user = Object.assign(this.user, this.initialState);
        this.switchMode();
      },
      save(){
        this.updateUser();
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
