<template>
    <header class="w-full grid-container py-4 relative">
        <div class="flex items-center gap-6 justify-between">
            <NuxtLink to="/" class="w-40">
                <img src="" alt="">
            </NuxtLink>
            <nav class="flex items-center gap-6 max-lg:flex-col max-lg:bg-[#f4f6fb] max-lg:border-t border-[#292929] max-lg:py-6 max-lg:w-full max-lg:absolute max-lg:left-0 transition-all duration-500 z-[5]" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:duration-500 after:transition-all hover:after:w-full">Главная</NuxtLink>
                <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:duration-500 after:transition-all hover:after:w-full">Каталог</NuxtLink>
                <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:duration-500 after:transition-all hover:after:w-full">О нас</NuxtLink>
                <div class="flex items-center gap-4">
                    <NuxtLink>
                        <Icon class="text-3xl transition-all duration-500 hover:opacity-50" name="material-symbols:shopping-cart"/>
                    </NuxtLink>
                    <NuxtLink>
                        <Icon class="text-3xl transition-all duration-500 hover:opacity-50" name="material-symbols:person"/>
                    </NuxtLink>
                </div>
            </nav>
            <button @click="isMenuShow = !isMenuShow" class="lg:hidden">
                <Icon class="text-3xl" name="material-symbols-light:menu-open"/> 
            </button>
        </div>
        <div class="inset-0 col-span-full bg-black/50 top-[70px] fixed z-[4] lg:hidden" :class="{'hidden' : !isMenuShow}"></div>
    </header>
</template>

<script setup>
    /* показ меню */
    const isMenuShow = ref(false)
</script>