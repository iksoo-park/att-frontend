<template>
    <v-container class="login-container" fluid>
        <div class="button-wrapper">
            <v-img class="google-login-btn" block @click="goToGoogleLogin"></v-img>
        </div>
        <div>
            <v-btn class="kakao-login-btn" block @click="goToKakaoLogin"></v-btn>
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
        const goToKakaoLogin = async () => {
            await store.dispatch("kakaoAuthenticationModule/requestKakaoOauthRedirectionToDjango")
        }
        return {
            goToGoogleLogin,
            goToKakaoLogin
        }
    }
}
</script>


<style scoped>
.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
}

.google-login-btn {
    background-image: url("@/assets/images/fixed/googleLogin.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent; /* 배경색을 투명하게 설정 */
    height: 50px; /* 버튼 높이 조정 */
    width: 200px; /* 버튼 너비 조정 */
}
.kakao-login-btn {
    background-image: url("@/assets/images/fixed/kakaologin.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
}
</style>