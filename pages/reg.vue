<template>
    <FormKit @submit="userReg" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center grow text-xl p-4 rounded-xl border border-[#292929]/15 bg-[#292929]/5 backdrop-blur-3xl text-white">
        <p class="text-3xl font-semibold font-Roboto-Slab tracking-widest text-[#292929]">Регистрация</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Фамилия"/>
            <FormKit type="text" v-model="user.name" validation="required" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Имя" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Имя"/>
            <FormKit type="text" v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Отчество" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Отчество"/>
        </div>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" v-model="user.login" validation="required" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Логин"/>
            <FormKit type="password" v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="••••••"/>
        </div>
        <FormKit type="text" v-model="user.phone" validation="required|length:11" messages-class="text-[#E9556D] font-semibold font-Roboto-Slab tracking-widest" name="Телефон" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 rounded-xl focus:outline-none w-full" placeholder="Телефон"/>
        <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#292929] text-white border border-[#292929] transition-all duration-500 hover:text-[#292929] hover:bg-transparent">Регистрация</button>
        <div class="flex items-center justify-center gap-4 w-full md:w-2/3 lg:w-1/2 my-10">
            <div class="w-1/3 h-px bg-[#292929]"></div>  
            <p class="font-semibold font-Roboto-Slab tracking-widest text-[#292929]">или</p>
            <div class="w-1/3 h-px bg-[#292929]"></div>  
        </div>
        <NuxtLink to="/auth" class="w-[160px] text-center py-0.5 px-4 rounded-full  hover:bg-[#292929] hover:text-white border border-[#292929] transition-all duration-500 text-[#292929] bg-transparent">Вход</NuxtLink>        
    </FormKit>
</template>

<script setup>
    /* создание пользователя */
    const user = ref({
        name: "",
        surname: "",
        patronymic: "",
        login: "",
        phone: "",
        password: "",
        role: "user"
    })


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* подключение БД и роутера */
    const supabase = useSupabaseClient()
    const router = useRouter()


    /* регистрация пользователя */
    const userReg = async () => {
        const { data: users, error: usersError } = await supabase
        .from('users')
        .select("*")
        .eq('login', user.value.login)

        if (users[0]) {
            user.value.login = ""
            return showMessage("Такой  логин уже используется!", false)              
        } 

        const { data, error } = await supabase
        .from('users')
        .insert(user.value)
        .select()

        if (data) {
            console.log(data)
            showMessage('Успешная регистрация!', true)
            router.push('/auth')
        } else {
            showMessage('Произошла ошибка!', false)
        }
    }
</script>