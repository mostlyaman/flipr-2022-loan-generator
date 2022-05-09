<template>
  <div class="navigation border-b-2 flex pt-2 border-black " >
    <nav class="container ml-10 mb-2 flex h-12 items-center">
      <img class = "h-full" src="../assets/images/logo.png" alt="Logo">
      <NuxtLink class = "ml-16 mr-8 button" to="/">Home</NuxtLink>
      <button class = "mr-8">Our Features</button>
      <button class = "mr-8">FAQ</button>
      <button class = "mr-8">Contact Us</button>
      <button class = "mr-8">About</button>
    </nav>
    <nav class="ml-16 login mb-2 justify-self-end h-12 flex items-center">
        <button v-if = "!$store.state.user" type="button" class = "mx-16" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">Login</button>
        <div v-else class = "flex items-center">
          <NuxtLink class = "button ml-8" to= "/profile" >Profile</NuxtLink>
          <button class = "ml-8 mr-16 button" @click="signout">Sign Out</button>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
      signout(){
        this.$fire.auth.signOut();
        this.$router.push('/');
      }
    }
}
</script>

<style scoped>
.navigation{
  font-family: Poppins, sans-serif;
  font-weight: 500;
  color: black;
}
button{
    padding: 5px;
    padding-inline: 10px;
}
button:hover{
    background-color: black;
    color: white;
    border:2;
    border-radius: 12px;
}
.button{
    padding: 5px;
    padding-inline: 10px;
    white-space: nowrap;
}
.button:hover{
    background-color: black;
    color: white;
    border:2;
    border-radius: 12px;
}
</style>