<template>
    <v-container class="container">
        <div>
            <v-btn class="google-login-btn" block @click="goToGoogleLogin">
            </v-btn>
        </div>
    </v-container>
</template>

<script>
import router from "@/router";

export default {
    methods: {
        goToGoogleLogin() {
            router.push("/google_oauth/google-access-token");
        },
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