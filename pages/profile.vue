<template>
    <div class="profile">
        <Header></Header>
        {{ $store.state.user }}
        <NuxtLink to="/">Go back</NuxtLink>
    </div>
</template>

<script>
export default {
}
</script>