<template>
    <div class="flex max-lg:flex-col gap-6 items-center">
        <img :src="`https://jgbtutmwtokvxnsixujt.supabase.co/storage/v1/object/public/images/products/${products[0].image}`" alt="" class="w-full lg:w-1/2 rounded-xl object-cover aspect-video h-fit  border border-[#292929]/15">
        <div class="flex flex-col gap-6 w-full lg:w-1/2 p-4 rounded-xl border border-[#292929]/15 h-fit">
            <p class="text-2xl font-Roboto-Slab font-semibold tracking-widest">{{ products[0].name }}</p>
            <p class="opacity-70">{{ products[0].description }}</p>
            <p><span class="font-Roboto-Slab font-semibold">Тип:</span> <span class="opacity-70">{{ products[0].type }}</span></p>
            <div class="flex flex-col gap-8 md:gap-2">
                <div class="flex items-center max-md:flex-col max-md:text-center gap-2 w-full" v-for="(value, key) in products[0].characteristics">
                    <p class="w-fit first-letter:capitalize font-Roboto-Slab">{{ key }}</p>
                    <div class="grow h-px border-b border-[#292929]/70 border-dashed min-w-[50%]"></div>
                    <p class="w-fit opacity-70">{{ value }}</p>
                </div>
            </div>
            <p class="text-4xl font-Roboto-Slab font-semibold tracking-widest">{{ products[0].price.toLocaleString() }} ₽ </p>
            <button v-if="authenticated" @click="addCart" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#292929] text-white border border-[#292929]/15 transition-all duration-500 hover:text-[#292929] hover:bg-transparent">В корзину</button>
            <p v-else class="text-sm">*Для добавления товара в корзину необходимо войти в аккаунт</p>
        </div>
    </div>  
</template>

<script setup>
    /* подключение БД и роут */
    const supabase = useSupabaseClient() 
    const route = useRoute()

    const { data:products, error:productsError } = await supabase
    .from('products')
    .select('*')   
    .eq('id', route.params.id)

    
    /* проверка входа */
    const { authenticated, id } = storeToRefs(useUserStore())


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* добавление в корзину */
    const addCart = async () => {
        const { data: carts } = await supabase
        .from('cart')
        .select(`*`)
        .eq('status', 'В корзине')
        .eq('userId', id.value)
        .eq('productId', route.params.id)

        if(carts && carts.length>0) {
            await supabase
            .from('cart')
            .update({ count: `${Number(carts[0].count)+1}` })
            .eq('status', 'В корзине')
            .eq('userId', id.value)
            .eq('productId', route.params.id)
            .select()      
        
            showMessage("Количество обновлено!", true)   
        } else {            
            const { data, error } = await supabase
            .from('cart')
            .insert([
                { userId: id.value, productId: route.params.id, status: 'В корзине', count: 1 },
            ])
            .select()       
            
            if(error) {
                showMessage("Произошла ошибка!", false)   
            } else {
                showMessage("Добавлено в корзину!", true)   
            }            
        }
    }
</script>