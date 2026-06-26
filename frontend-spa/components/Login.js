export default {
    template: `
        <div class="flex h-screen items-center justify-center bg-[#F4F6F8] w-full">
            <form @submit.prevent="login" class="bg-white p-10 rounded-2xl shadow-xl w-96 border border-gray-100">
                <h2 class="text-2xl font-bold mb-6 text-center text-[#1A252C]">Login Admin</h2>
                <div class="mb-4">
                    <input class="w-full border p-3 rounded-lg focus:ring-[#004D40]" placeholder="Username" v-model="user" required>
                </div>
                <button class="w-full bg-[#004D40] hover:bg-[#00796B] text-white p-3 rounded-lg font-bold">Login</button>
            </form>
        </div>
    `,
    data() { return { user: '' } },
    methods: {
        login() {
            localStorage.setItem('token', 'authenticated');
            this.$router.push('/');
        }
    }
};
