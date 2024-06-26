<template>
    <FormKit @submit="updateUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center text-xl p-4 rounded-xl border border-[#292929]/50 text-[#292929]">
        <p class="text-3xl font-semibold font-Roboto-Slab tracking-widest">Обновление данных</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 rounded-xl focus:outline-none w-full border border-[#292929]/15" placeholder="Фамилия"/>
            <FormKit type="text" v-model="user.name" validation="required" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Имя" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 rounded-xl focus:outline-none w-full border border-[#292929]/15" placeholder="Имя"/>
            <FormKit type="text" v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Отчество" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 rounded-xl focus:outline-none w-full border border-[#292929]/15" placeholder="Отчество"/>
        </div>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" v-model="user.login" validation="required" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full border border-[#292929]/15" placeholder="Логин"/>
            <FormKit type="password" v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full border border-[#292929]/15" placeholder="••••••"/>
        </div>
        <FormKit type="text" v-model="user.phone" validation="required|length:11" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Телефон" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full border border-[#292929]/15" placeholder="Телефон"/>
        <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#292929] text-white border border-[#292929] transition-all duration-500 hover:text-[#292929] hover:bg-transparent">Обновить</button>
    </FormKit>
    <div class="flex flex-col gap-6" v-if="carts">
        <p class="text-3xl font-semibold font-Roboto-Slab tracking-widest">Мои покупки</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="flex flex-col gap-4 rounded-xl p-4 border border-[#292929]/50" v-for="cart in carts">
                <p>Id заказа: {{ cart.id }}</p>
                <p class="tracking-widest font-semibold font-Roboto-Slab">{{ cart.products.name }}</p>
                <NuxtLink :to="`/catalog/product-${cart.products.id}`" class="rounded-xl overflow-hidden group">
                    <img :src="`https://jgbtutmwtokvxnsixujt.supabase.co/storage/v1/object/public/images/products/${cart.products.image}`" alt="" class="transition-all duration-500 group-hover:scale-125 w-full aspect-video object-cover">
                </NuxtLink>
                <div class="text-3xl tracking-widest font-semibold font-Roboto-Slab">{{ cart.products.price.toLocaleString() }} ₽</div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-semibold font-Roboto-Slab tracking-widest">Выход из аккаунта</p>
        <button @click="logoutUser" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#292929] text-white border border-[#292929] transition-all duration-500 hover:text-[#292929] hover:bg-transparent">Выход</button>
    </div>
</template>

<script setup>
    /* подключение БД и проверка пользователя */
    const supabase = useSupabaseClient() 
    const { authenticated, role, id } = storeToRefs(useUserStore())
    const { logout } = useUserStore()

    const { data:users, error } = await supabase
    .from('users')
    .select('*')   
    .eq('id', id.value)  


    /* создание сообщений и роутера */
    const { showMessage } = useMessagesStore()
    const router = useRouter()


    /* создание формы пользователя */
    const user = ref({
        name: users[0].name,
        surname: users[0].surname,
        patronymic: users[0].patronymic,
        phone: users[0].phone,
        login: users[0].login,
        password: users[0].password
    })


    /* обновление данных */
    const updateUser = async () => {    
        const { data, error } = await supabase
        .from('users')
        .update(user.value)
        .eq('id', id.value)
           
        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Данные обновлены!", true)   
        }
    }


    /* заказы */
    const { data:carts, error:cartsError } = await supabase
    .from('cart')
    .select('*, products(*)')   
    .eq('userId', id.value)  
    .eq('status', 'Оформлен')  


    /* выход из аккаунта */
    const logoutUser = () => {
        logout()
        showMessage("Успешный выход!", true)   
        router.push('/')
    }
</script>