<template>
<div>
  <Header></Header>
  <LoginPopup></LoginPopup>
</div>
</template>

<script>
import 'tw-elements'
import LoginPopup from "~/components/LoginPopup.vue";
export default {
    name: "IndexPage",
    components: { LoginPopup },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');



</style>
