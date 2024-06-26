<template>
    <div class="flex max-lg:flex-col gap-6 items-center">
        <div class="flex flex-col gap-6 w-full lg:w-1/2">
            <p class="font-Roboto-Slab text-3xl font-semibold tracking-wider">Откройте Мир Настольных Приключений!</p>
            <p class="opacity-70 tracking-widest">Погрузитесь в захватывающий мир стратегий, квестов и классических настольных игр. Идеально для вечеров в кругу семьи, дружеских встреч и увлекательных соревнований. Мы предлагаем игры, которые подойдут и начинающим игрокам, и опытным любителям.</p>
        </div> 
        <img src="/images/hero/index.jpg" alt="" class="w-full lg:w-1/2 rounded-xl">
    </div>
    <div class="flex flex-col gap-6">
        <p class="font-Roboto-Slab text-3xl font-semibold tracking-wider">Почему выбирают нас?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="flex flex-col gap-4 rounded-xl p-4 border border-[#292929]/15 transition-all duration-500 hover:border-[#292929] hover:scale-105">
                <div class="flex items-center gap-4">
                    <p class="text-2xl font-Roboto-Slab">Широкий ассортимент</p>
                    <Icon class="text-3xl shrink-0" name="game-icons:perspective-dice-six-faces-random"/>
                </div>
                <p class="opacity-70 tracking-widest">Мы предлагаем более 1000 различных игр на любой вкус: от стратегий и квестов до классических настолок и карточных игр.</p>
            </div>
            <div class="flex flex-col gap-4 rounded-xl p-4 border border-[#292929]/15 transition-all duration-500 hover:border-[#292929] hover:scale-105">
                <div class="flex items-center gap-4">
                    <p class="text-2xl font-Roboto-Slab">Уникальные новинки</p>
                    <Icon class="text-3xl shrink-0" name="mdi:newspaper-variant-multiple"/>
                </div>
                <p class="opacity-70 tracking-widest">Будьте в курсе последних тенденций и первым приобретайте новейшие игры, которые только появились на рынке.</p>
            </div>
            <div class="flex flex-col gap-4 rounded-xl p-4 border border-[#292929]/15 transition-all duration-500 hover:border-[#292929] hover:scale-105">
                <div class="flex items-center gap-4">
                    <p class="text-2xl font-Roboto-Slab">Выгодные предложения</p>
                    <Icon class="text-3xl shrink-0" name="material-symbols:award-star-rounded"/>
                </div>
                <p class="opacity-70 tracking-widest">Регулярные акции и скидки позволяют вам приобретать любимые игры по отличным ценам.</p>
            </div>
            <div class="flex flex-col gap-4 rounded-xl p-4 border border-[#292929]/15 transition-all duration-500 hover:border-[#292929] hover:scale-105">
                <div class="flex items-center gap-4">
                    <p class="text-2xl font-Roboto-Slab">Качество и оригинальность</p>
                    <Icon class="text-3xl shrink-0" name="ph:lightbulb-filament-bold"/>
                </div>
                <p class="opacity-70 tracking-widest">Все игры в нашем магазине - только оригинальная продукция от проверенных производителей.</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6 w-full">
        <p class="font-Roboto-Slab text-3xl font-semibold tracking-wider">Популярные категории</p>
        <div class="flex max-lg:flex-col gap-6 items-center">
            <div class="flex flex-col gap-6 w-full lg:w-1/2">
                <p class="font-Roboto-Slab text-2xl font-semibold tracking-wider">Карточные игры</p>
                <p class="opacity-70 tracking-widest">Компактные и захватывающие игры, которые легко взять с собой куда угодно. Прекрасный выбор для быстрых игровых сессий и веселого времяпрепровождения.</p>
            </div> 
            <img src="/images/hero/index.jpg" alt="" class="w-full lg:w-1/2 rounded-xl">
        </div>
        <div class="w-full h-px bg-[#292929]/50"></div>
        <div class="flex max-lg:flex-col gap-6 items-center">
            <div class="flex flex-col gap-6 w-full lg:w-1/2">
                <p class="font-Roboto-Slab text-2xl font-semibold tracking-wider">Для всей семьи</p>
                <p class="opacity-70 tracking-widest">Идеальные игры для семейного отдыха, где каждый найдет себе занятие по душе. Простые правила и интересный сюжет сделают вечер незабываемым.</p>
            </div> 
            <img src="/images/hero/index.jpg" alt="" class="w-full lg:w-1/2 rounded-xl lg:order-first">
        </div>
        <div class="w-full h-px bg-[#292929]/50"></div>
        <div class="flex max-lg:flex-col gap-6 items-center">
            <div class="flex flex-col gap-6 w-full lg:w-1/2">
                <p class="font-Roboto-Slab text-2xl font-semibold tracking-wider">Стратегические игры</p>
                <p class="opacity-70 tracking-widest">Испытайте свои аналитические способности и примите вызов сложных стратегий. Эти игры требуют продуманных ходов и долгосрочного планирования.</p>
            </div> 
            <img src="/images/hero/index.jpg" alt="" class="w-full lg:w-1/2 rounded-xl">
        </div>
        <div class="w-full h-px bg-[#292929]/50"></div>
        <div class="flex max-lg:flex-col gap-6 items-center">
            <div class="flex flex-col gap-6 w-full lg:w-1/2">
                <p class="font-Roboto-Slab text-2xl font-semibold tracking-wider">Кооперативные игры</p>
                <p class="opacity-70 tracking-widest">Работайте в команде, чтобы достичь общей цели и насладиться победой вместе. Идеально подходят для объединения усилий и совместного решения задач.</p>
            </div> 
            <img src="/images/hero/index.jpg" alt="" class="w-full lg:w-1/2 rounded-xl lg:order-first">
        </div>
        <NuxtLink class="px-4 py-2 rounded-xl border border-[#292929] self-end">В каталог</NuxtLink>
    </div>
    <div class="flex flex-col gap-6">
        <p class="font-Roboto-Slab text-3xl font-semibold tracking-wider">Контакты</p>
        <OurContacts></OurContacts>
        <NuxtLink class="px-4 py-2 rounded-xl border border-[#292929] self-end">Узнать больше</NuxtLink>
    </div>
</template>

<script setup>

</script>