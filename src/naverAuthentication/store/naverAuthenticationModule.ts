import actions, { AuthenticationActions } from "./actions"
import mutations, { AuthenticationMutations } from "./mutations"
import state, { AuthenticationState } from "./states"

export interface NaverAuthenticationModule {
    namespaced: true
    state: AuthenticationState
    actions: AuthenticationActions
    mutations: AuthenticationMutations
}

const naverAuthenticationModule: NaverAuthenticationModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}

export default naverAuthenticationModule

