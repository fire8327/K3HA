<template>
    <div class="flex flex-col gap-6">
        <div class="w-full h-px bg-[#292929]/50"></div>
        <div class="flex gap-6 max-lg:flex-col">
            <div class="lg:w-1/3 flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-[#292929]/50">Адрес</p>
                    <p class="font-Roboto-Slab font-semibold">улица Пушкина, дом Колотушкина</p>
                </div>
                <div>
                    <p class="text-sm text-[#292929]/50">Режим работы</p>
                    <p class="mt-2 font-Roboto-Slab font-semibold">Пн-Пт: с 9:00 до 21:00</p>
                    <p class="font-Roboto-Slab font-semibold">Cб-Вс: с 12:00 до 18:00</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-[#292929]/50">Email</p>
                    <NuxtLink to="mailto:K3HA@mail.ru" class="font-Roboto-Slab font-semibold transition-all duration-500 hover:opacity-50">K3HA@mail.ru</NuxtLink>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-[#292929]/50">Телефон для связи</p>
                    <NuxtLink to="tel:8 800 555-35-35" class="font-Roboto-Slab font-semibold transition-all duration-500 hover:opacity-50">8 800 555-35-35</NuxtLink>
                </div>
                <div class="flex items-center gap-2">
                    <NuxtLink to="https://vk.com/id512397172" target="_blank" class="transition-all duration-500 hover:opacity-50">
                        <Icon class="text-3xl" name="mdi:vk"/>
                    </NuxtLink>
                    <NuxtLink to="https://t.me/Charlatan_na_na_na_na" target="_blank" class="transition-all duration-500 hover:opacity-50">
                        <Icon class="text-3xl" name="ic:baseline-telegram"/>
                    </NuxtLink>
                </div>
            </div>
            <iframe class="w-full h-[400px] lg:w-2/3 lg:h-full rounded-xl border border-gray-200" src="https://yandex.ru/map-widget/v1/?um=constructor%3A01b5d493b8a272d4d278e0cbf38cd49c07fe929bbf2fe0b4f6cbacb690afca8d&amp;source=constructor" frameborder="0"></iframe>
        </div>
        <div class="w-full h-px bg-[#292929]/50"></div>
    </div>
</template>