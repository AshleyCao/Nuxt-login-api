<template>
<div>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show" method="post">
        <b-form-group id="loginID" label="UserName:" label-for="loginIDInput" description="Your MFG log in detail">
            <b-form-input id="loginIDInput" type="text" v-model="form.name" required placeholder="Enter User Name">
            </b-form-input>
        </b-form-group>
        <b-form-group id="passwordInput" label="Password:" label-for="passwordInput">
            <b-form-input id="passwordInput" type="password" v-model="form.password" required placeholder="Enter password">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <p>{{errorMessage}}</p>
</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
const Cookie = process.client ? require('js-cookie') : undefined
import {
    required,
    minLength
} from 'vuelidate/lib/validators';
export default {
    data() {
        return {
            form: {
                name: '',
                password: '',
            },
            show: true,
            errorMessage: ""
        }
    },

    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
    },
    middleware: 'notauth',
    methods: {
        async onSubmit(evt) {
            let newSessionid = null
            try {
                const data = await axios.post("https:test.com", {
                    request: {
                        SessionID: null,
                        User_ID: this.form.name,
                        Password: this.form.password,
                        EventType: "APILogin"
                    }
                });
                if (data.data.response.ResponseID == 0 && data.data.response.SessionID) {
                    const currentUser = {
                        name: this.form.name
                    }
                    newSessionid = data.data.response.SessionID
                    const auth = {
                        accessToken: 'someStringGotFromApiServiceWithAjax',
                        sessionId: newSessionid
                    }
                    this.$store.commit('setAuth', auth) // mutating to store for client rendering
                    this.$store.commit('setUserName', currentUser.name)
                    Cookie.set('auth', auth)
                    Cookie.set('userName',currentUser.name)
                    this.$router.push('/')

                } else {
                    console.log("login error");
                    this.errorMessage = "Log in error. Wrong password "
                }
            } catch (e) {
                this.errorMessage = e.toString()
                console.error(e);
            }

        },
        async onReset(evt) {

            this.$router.push('/secure');

        }

    }
}
</script>

<style lang="scss" scoped>
form {
    width: 70%;
    margin: 5% auto;
}

.btn {
    width: 40%;
    margin-left: 5%
}
</style>
