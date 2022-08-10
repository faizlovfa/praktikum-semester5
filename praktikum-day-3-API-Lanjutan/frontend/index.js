const { createApp, ref} = Vue;
const app = createApp({
    setup() {
        const url = "http://localhost:7000/";
        const namaMakanan = ref([]);
        const namaMinuman = ref([]);

        const generateMakanan =async () => {
            const res = await axios.get(url+ "makanan");
            namaMakanan.value = res.data;
            namaMinuman.value = [];
            console.log(namaMakanan);
        };
        const generateMinuman =async () => {
            const res = await axios.get(url+ "minuman");
            namaMinuman.value = res.data;
            namaMakanan.value=[];
            console.log(namaMinuman);
        };

        return{
            generateMakanan,
            generateMinuman,
            namaMakanan,
            namaMinuman,
        };
    },
});
app.mount ("#app")