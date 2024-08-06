import { ActionContext } from "vuex"
import { GoogleAuthenticationState } from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"

export type GoogleAuthenticationActions = {
    requestGoogleOauthRedirectionToDjango(): Promise<void>
    requestAccessTokenToDjangoRedirection(context: ActionContext<GoogleAuthenticationState, any>, payload: { code: string }): Promise<void>
}

const actions: GoogleAuthenticationActions = {
    async requestGoogleOauthRedirectionToDjango(): Promise<void> {
        return axiosInst.djangoAxiosInst.get('/google_oauth/google').then((res) => {
            window.location.href = res.data.url
        })
    },
    async requestAccessTokenToDjangoRedirection(
        context: ActionContext<GoogleAuthenticationState, any>,
        payload: { code: string }): Promise<void> {

        try {
            console.log('requestAccessTokenToDjangoRedirection()')
            const { code } = payload

            const response = await axiosInst.djangoAxiosInst.post(
                '/google_oauth/google/access-token', { code })
            localStorage.setItem("accessToken", response.data.accessToken.access_token)
        } catch (error) {
            console.log('Access Token 요청 중 문제 발생:', error)
            throw error
        }
    },
}

export default actions;