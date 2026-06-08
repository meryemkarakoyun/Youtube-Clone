<!-- !Kütüphaneler -->

- react
- axios
- tailwindcss
- react-router-dom
- react-icons

<!--! Kaynaklar -->

API: https://rapidapi.com/ytjar/api/yt-api (aldığımız api adresi)

<!-- !Enviroment Variables -->

- Ortam değişkenleri, projenizde kullanmanız gereken ama herkesle paylaşmak istemeyiceğiniz ve githuna gönderilmesini engelliyeceğiniz değişkenlerdir.
- Projeyi yeniden yayınlamadan bu değerleri değiştirebiliriz.
- (api key, varitabanı url, admin variables, project variables)

- proje içerisinde bir `.env` isimli dosya aç (Src dosyası dışına açmak gerekli (en dışa ) yoksa çalışmaz)
- ` _DEĞİŞKEN_İSMİ=değişkenin değeri` formatıyla tanımlanır
- proje içerisinde `import.meta.env.VITE_DEĞİŞKEN_İSMİ` ifadesi ile env değişkenlere erişebiliriz.
- .env klasörünü .gitignore'a ekleyerek githuba gönderilmesiini engelleriz
- daha sonra projeyi indirip başlatıcak kişilere yardımcı olma amacıyla `.env.example` dosyası oluşturup hangi değişkenlerin tanımlanması gerektiğini belirtebiliriz
