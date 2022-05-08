<template>
    <div id = "firebase-ui-buttons">
        
    </div>
</template>

<script>
export default {
    name: "FirebaseUI",
    mounted(){
        const firebaseui = require("firebaseui");
        require("firebaseui/dist/firebaseui.css");

        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.$fire.auth);

        const config = {
            signInOptions: [
                this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
                this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: '/',
            callbacks: {
                signInSuccessWithAuthResult(){
                    console.log("Successfully Signed in...");
                    window.location = "/";
                }
            } 
        }

        ui.start("#firebase-ui-buttons", config)
    }
}
</script>