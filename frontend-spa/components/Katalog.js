export default {
    template: `
        <div>
            <section class="bg-white p-6 rounded-xl shadow-sm mb-8 border-l-4" :class="isEdit ? 'border-amber-500' : 'border-[#004D40]'">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-bold text-lg">{{ isEdit ? 'Edit Data Buku' : 'Tambah Buku Baru' }}</h2>
                    <button v-if="isEdit" @click="batalEdit" class="text-sm text-gray-500 hover:text-red-500">Batal Edit</button>
                </div>
                <form @submit.prevent="simpanBuku" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm text-gray-600 mb-1">Judul Buku</label>
                        <input v-model="form.judul" type="text" class="w-full border p-2 rounded focus:outline-none focus:border-[#004D40]" required>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-600 mb-1">Penulis</label>
                        <input v-model="form.penulis" type="text" class="w-full border p-2 rounded focus:outline-none focus:border-[#004D40]" required>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-600 mb-1">Penerbit</label>
                        <input v-model="form.penerbit" type="text" class="w-full border p-2 rounded focus:outline-none focus:border-[#004D40]" required>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-600 mb-1">Lokasi Penyimpanan</label>
                        <select v-model="form.lokasi" class="w-full border p-2 rounded focus:outline-none focus:border-[#004D40]" required>
                            <option value="" disabled>Pilih Rak...</option>
                            <option value="Rak 1 (Fiksi)">Rak 1 (Fiksi)</option>
                            <option value="Rak 2 (Sains & Teknologi)">Rak 2 (Sains & Teknologi)</option>
                            <option value="Rak 3 (Sejarah)">Rak 3 (Sejarah)</option>
                            <option value="Gudang Arsip">Gudang Arsip</option>
                        </select>
                    </div>
                    <div class="md:col-span-2 mt-2">
                        <button type="submit" class="text-white px-6 py-2 rounded font-medium transition" :class="isEdit ? 'bg-amber-500 hover:bg-amber-600' : 'bg-[#004D40] hover:bg-[#00796B]'">
                            {{ loading ? 'Memproses...' : (isEdit ? 'Update Buku' : 'Simpan Buku') }}
                        </button>
                    </div>
                </form>
            </section>

            <section class="bg-white p-6 rounded-xl shadow-sm">
                <h2 class="font-bold text-lg mb-4">Daftar Buku</h2>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead class="border-b bg-gray-50">
                            <tr class="text-gray-500 text-sm">
                                <th class="py-3 px-4">Judul</th>
                                <th class="py-3 px-4">Penulis</th>
                                <th class="py-3 px-4">Penerbit</th>
                                <th class="py-3 px-4">Lokasi</th>
                                <th class="py-3 px-4 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="list.length === 0">
                                <td colspan="5" class="text-center p-6 text-gray-500">Belum ada data buku.</td>
                            </tr>
                            <tr v-for="buku in list" :key="buku.id" class="border-b hover:bg-[#F4F6F8] transition-colors">
                                <td class="py-3 px-4 font-medium">{{ buku.judul }}</td>
                                <td class="py-3 px-4">{{ buku.penulis }}</td>
                                <td class="py-3 px-4 text-gray-600">{{ buku.penerbit }}</td>
                                <td class="py-3 px-4">
                                    <span class="inline-block bg-[#E0F2F1] text-[#004D40] px-2 py-1 rounded text-xs font-semibold">{{ buku.lokasi || 'Belum diatur' }}</span>
                                </td>
                                <td class="py-3 px-4 text-center whitespace-nowrap">
                                    <button @click="siapkanEdit(buku)" class="text-amber-500 hover:text-amber-700 font-medium mr-3">Edit</button>
                                    <button @click="hapusBuku(buku.id)" class="text-red-500 hover:text-red-700 font-medium">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    `,
    data() { 
        return { 
            list: [],
            form: { id: null, judul: '', penulis: '', penerbit: '', lokasi: '' },
            loading: false,
            isEdit: false
        } 
    },
    mounted() { this.ambilData(); },
    methods: {
        ambilData() {
            axios.get('http://localhost:8080/buku').then(res => { this.list = res.data; });
        },
        simpanBuku() {
            this.loading = true;
            if (this.isEdit) {
                axios.put('http://localhost:8080/buku/' + this.form.id, this.form)
                    .then(res => { this.batalEdit(); this.ambilData(); })
                    .finally(() => { this.loading = false; });
            } else {
                axios.post('http://localhost:8080/buku', this.form)
                    .then(res => { this.batalEdit(); this.ambilData(); })
                    .finally(() => { this.loading = false; });
            }
        },
        siapkanEdit(buku) {
            this.isEdit = true;
            this.form = { id: buku.id, judul: buku.judul, penulis: buku.penulis, penerbit: buku.penerbit, lokasi: buku.lokasi };
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        batalEdit() {
            this.isEdit = false;
            this.form = { id: null, judul: '', penulis: '', penerbit: '', lokasi: '' };
        },
        hapusBuku(id) {
            if(confirm("Yakin ingin menghapus buku ini?")) {
                axios.delete('http://localhost:8080/buku/' + id).then(res => { this.ambilData(); });
            }
        }
    }
};
