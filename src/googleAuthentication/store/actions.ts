import { ActionContext } from "vuex"
import { GoogleAuthenticationState } from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"

export type GoogleAuthenticationActions = {
    requestGoogleOauthRedirectionToDjango(): Promise<void>
}

const actions: GoogleAuthenticationActions = {
    async requestGoogleOauthRedirectionToDjango(): Promise<void> {
        return axiosInst.djangoAxiosInst.get('/google_oauth/google').then((res) => {
            window.location.href = res.data.url
        })
    },
}

export default actions;