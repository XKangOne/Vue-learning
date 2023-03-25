<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/todo">TodoList</RouterLink>
            <RouterLink to="/login">Login</RouterLink>
        </nav>
    </header>
    <main>
        <RouterView></RouterView>
    </main>
</template>

<script setup>

</script>

<style scoped>

</style>