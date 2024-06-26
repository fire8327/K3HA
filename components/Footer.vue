<template>
    <footer class="w-full py-4 grid-container z-[1] mt-auto bg-white/50">
        <div class="flex gap-6 max-lg:flex-col lg:justify-between">
            <NuxtLink to="/" class="w-40">
                <img src="/images/header/logo.png" alt="">
            </NuxtLink>
            <div class="flex gap-6 max-lg:flex-col">
                <div class="flex flex-col gap-2">
                    <p class="font-Roboto-Slab font-semibold text-sm uppercase">Адрес</p>
                    <p class="max-w-96">улица Пушкина, дом Колотушкина</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="font-Roboto-Slab font-semibold text-sm uppercase">Контактная информация</p>
                    <NuxtLink to="mailto:K3HA@mail.ru" class="transition-all duration-500 hover:opacity-50">K3HA@mail.ru</NuxtLink>
                    <NuxtLink to="tel:8 800 555-35-35" class="transition-all duration-500 hover:opacity-50">8 800 555-35-35</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>