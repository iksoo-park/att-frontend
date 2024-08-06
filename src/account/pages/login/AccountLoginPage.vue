<template>
    <v-container>
        <div>
            <v-btn class="google-login-btn" block @click="goToGoogleLogin"></v-btn>
        </div>
    </v-container>
</template>


<script>
import { useStore } from 'vuex'

const googleAuthenticationModule = 'googleAuthenticationModule'

export default {
    setup () {
        const store = useStore()
        const goToGoogleLogin = async () => {
            await store.dispatch("googleAuthenticationModule/requestGoogleOauthRedirectionToDjango")
        }
        return {
            goToGoogleLogin
        }
    }
}
</script>



<style scoped>
.google-login-btn {
    background-image: url("@/assets/images/fixed/googleLogin.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
}
</style>