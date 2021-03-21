export function someGetter (/* state */) {
    return {
        getUsercode(state){
            return state.user_code;
        },
        getRolecode(state){
            return state.role_code;
        },
        getToken(state){
            return state.token;
        }
    }
}
