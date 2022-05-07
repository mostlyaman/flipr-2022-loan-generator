<template>
  <div class="navigation border-b-2 my-2 flex" >
    <nav class="container ml-10 mb-2 flex h-12 items-center">
      <img class = "h-full" src="../assets/images/logo.png" alt="Logo">
      <h1 class = "ml-16 mr-8">Home</h1>
      <h1 class = "mr-8">Our Features</h1>
      <h1 class = "mr-8">FAQ</h1>
      <h1 class = "mr-8">Contact Us</h1>
      <h1 class = "mr-8">About</h1>
    </nav>
    <nav class=" mx-4 login justify-self-end h-12 flex items-center">
        <h1 class = "mr-8">Register</h1>
        <h1 class = "mr-16">Login</h1>
    </nav>
  </div>
</template>

<script>
export default {
    name: "Header", 
}
</script>

<style>
.navigation{
  font-family: Poppins, sans-serif;
  font-weight: 500;
  color: black;
}
h1{
    padding: 5px;
    padding-inline: 10px;
}
h1:hover{
    background-color: black;
    color: white;
    border:2;
    border-radius: 12px;
}
</style>