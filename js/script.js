Vue.use(VueToast, { position: 'top-right'  })

var app = new Vue({
    el: '#app',
    data: {
        fruits: [
            {
                name: 'Anggur',
                price: 45000,
                image: 'anggur.jpg',
                total: 1
            },
            {
                name: 'Apel',
                price: 28000,
                image: 'apel.jpg',
                total: 1
            },
            {
                name: 'Belimbing',
                price: 14000,
                image: 'belimbing.jpg',
                total: 1
            },
            {
                name: 'Buah Naga',
                price: 18000,
                image: 'buah-naga.jpg',
                total: 1
            },
            {
                name: 'Jeruk',
                price: 25000,
                image: 'jeruk.jpg',
                total: 1
            },
            {
                name: 'Mangga',
                price: 20000,
                image: 'mangga.jpg',
                total: 1
            },
            {
                name: 'Nanas',
                price: 15000,
                image: 'nanas.jpg',
                total: 1
            },
            {
                name: 'Pir',
                price: 28500,
                image: 'pir.jpg',
                total: 1
            },
            {
                name: 'Pisang',
                price: 7500,
                image: 'pisang.jpg',
                total: 1
            },
            {
                name: 'Stroberi',
                price: 46000,
                image: 'stroberi.jpg',
                total: 1
            },
        ],
        vegetables: [
            {
                name: 'Bayam',
                price: 6000,
                image: 'bayam.jpg',
                total: 1
            },
            {
                name: 'Beras',
                price: 12000,
                image: 'beras.jpg',
                total: 1
            },
            {
                name: 'Brokoli',
                price: 11000,
                image: 'Brokoli.jpg',
                total: 1
            },
            {
                name: 'Buncis',
                price: 16000,
                image: 'buncis.jpg',
                total: 1
            },
            {
                name: 'Cabai',
                price: 90000,
                image: 'cabai.jpg',
                total: 1
            },
            {
                name: 'Jagung',
                price: 9000,
                image: 'jagung.jpg',
                total: 1
            },
            {
                name: 'Kacang',
                price: 12000,
                image: 'kacang.jpg',
                total: 1
            },
            {
                name: 'Kelapa',
                price: 14000,
                image: 'kelapa.jpg',
                total: 1
            },
            {
                name: 'Kentang',
                price: 15000,
                image: 'kentang.jpg',
                total: 1
            },
            {
                name: 'Ketumbar',
                price: 50000,
                image: 'ketumbar.jpg',
                total: 1
            },
            {
                name: 'Lada',
                price: 78000,
                image: 'lada.jpg',
                total: 1
            },
            {
                name: 'Lobak',
                price: 6000,
                image: 'lobak.jpg',
                total: 1
            },
            {
                name: 'Toge',
                price: 7000,
                image: 'toge.jpg',
                total: 1
            },
            {
                name: 'Tomat',
                price: 12000,
                image: 'tomat.jpg',
                total: 1
            },
            {
                name: 'Wortel',
                price: 23000,
                image: 'wortel.jpg',
                total: 1
            },
            
        ],
        mix: [
            {
                name: 'Biji Kopi',
                price: 38000,
                image: 'biji-kopi.jpg',
                total: 1
            },
            {
                name: 'Keju',
                price: 45000,
                image: 'keju.jpg',
                total: 1
            },
            {
                name: 'Kopi',
                price: 30000,
                image: 'kopi.jpg',
                total: 1
            },
            {
                name: 'Minyak',
                price: 28000,
                image: 'minyak.jpg',
                total: 1
            },
            {
                name: 'Roti',
                price: 24000,
                image: 'roti.jpg',
                total: 1
            },
            {
                name: 'Salad',
                price: 25000,
                image: 'salad.jpg',
                total: 1
            },
            {
                name: 'Susu',
                price: 19000,
                image: 'susu.jpg',
                total: 1
            },
            {
                name: 'Teh',
                price: 16000,
                image: 'teh.jpg',
                total: 1
            },
            {
                name: 'Yogurt',
                price: 29000,
                image: 'yogurt.jpg',
                total: 1
            },

        ],
        selected: 'all',
        carts: [],
        detail: {}
    },
    methods: {
        setProducts(key){
            this.selected = key
        },
        addToCart(product){
            this.carts.push(product)
            Vue.$toast.success('Berhasil dimasukan ke keranjang!')
        },
        addTotal(i){
            this.carts[i].total++
        },
        reduceTotal(i){
            if(this.carts[i].total > 0){
                if(this.carts[i].total == 1){
                    this.carts.splice(i)
                }else{
                    this.carts[i].total--
                }
            }
        },
        detailProduct(data){
            this.detail = data
        },
        orderNow(){
            const myCarts = this.carts
            var message = `Halo%20admin,%20saya%20mau%20pesan%20:%0a`
            for(let i = 0; i < myCarts.length; i++){
                var products = `_____________________%0aProduk%20:%20${myCarts[i].name}%0aQty%20:%20${myCarts[i].total}%0a`
                message +=  products
            }

            let whatsapp = `https://wa.me/6282115003435?text=${message}%0aTerimakasih e-Tani :)`
            window.open(whatsapp, '_blank')
        }
    }
})