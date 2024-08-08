export interface KakaoAuthenticationState {
    isAuthenticated: boolean
    isAdmin: boolean
}

const state: KakaoAuthenticationState = {
    isAuthenticated: false,
    isAdmin: false
}

export default state
