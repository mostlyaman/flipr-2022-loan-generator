export const state = () => ({
    user: false,
})

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION : (state, {authUser}) => {
        if(authUser){
            const {uid, email, displayName} = authUser;
            state.user = {uid, email, displayName};
        }else{
            state.user = false;
        }
    }
};