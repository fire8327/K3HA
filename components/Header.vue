<template>
    <header class="w-full grid-container py-4 relative">
        <div class="flex items-center gap-6 justify-between">
            <NuxtLink to="/" class="w-40">
                <img src="/images/header/logo.png" alt="">
            </NuxtLink>
            <nav class="flex items-center gap-6 max-lg:flex-col max-lg:bg-[#f4f6fb] max-lg:border-t border-[#292929] max-lg:py-6 max-lg:w-full max-lg:absolute max-lg:left-0 transition-all duration-500 z-[5]" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:duration-500 after:transition-all hover:after:w-full">Главная</NuxtLink>
                <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:duration-500 after:transition-all hover:after:w-full">Каталог</NuxtLink>
                <NuxtLink to="/about" class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:duration-500 after:transition-all hover:after:w-full">О нас</NuxtLink>
                <div class="flex items-center gap-4">
                    <NuxtLink v-if="authenticated" to="/cart">
                        <Icon class="text-3xl transition-all duration-500 hover:opacity-50" name="material-symbols:shopping-cart"/>
                    </NuxtLink>
                    <NuxtLink :to="authenticated ? '/auth' : '/profile'">
                        <Icon class="text-3xl transition-all duration-500 hover:opacity-50" name="material-symbols:person"/>
                    </NuxtLink>
                </div>
            </nav>
            <button @click="isMenuShow = !isMenuShow" class="lg:hidden">
                <Icon class="text-3xl" name="material-symbols-light:menu-open"/> 
            </button>
        </div>
        <div class="inset-0 col-span-full bg-black/50 top-[70px] fixed z-[4] lg:hidden" :class="{'hidden' : !isMenuShow}"></div>
        <button type="button" @click="messageTitle = null" class="fixed top-10 right-10 z-[11] cursor-pointer flex items-center gap-2 px-6 py-2 text-lg rounded-2xl w-fit bg-white border border-[#292929]/50 shadow-[0px_0px_13px_-7px_#292929]" :class="messageType ? ' text-[#292929]' : 'text-red-500'" v-if="messageTitle">
            <Icon class="text-3xl" name="material-symbols:close-small-rounded"/>
            <span>{{messageTitle}}</span>
        </button>
    </header>
</template>

<script setup>
    /* показ меню */
    const isMenuShow = ref(false)


    /* хук */
    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:start', () => {
        isMenuShow.value = false
    })


    /* создание сообщений */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())


    /* проверка входа */
    const { authenticated } = storeToRefs(useUserStore())
</script>