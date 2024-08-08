<template>
    <div></div>    
</template>

<script>
import { mapActions } from 'vuex';

const kakaoAuthenticationModule = 'kakaoAuthenticationModule'
const accountModule = 'accountModule'

export default {
    methods: {
        ...mapActions(kakaoAuthenticationModule, [
            'requestAccessTokenToDjangoRedirection',
        ]),

        async setRedirectData () {
            const code = this.$route.query.code

            await this.requestAccessTokenToDjangoRedirection({ code })
        },
    },

    async created () {
            await this.setRedirectData()
        }
}
</script>
