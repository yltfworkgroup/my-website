export function someMutation (/* state */) {
    return {
        setUsercode(state,code){
            state.user_code = code;
        },
        setRolecode(state,code){
            state.role_code = code;
        },
        setToken(state,str){
            state.token = str;
        }
    }
}
