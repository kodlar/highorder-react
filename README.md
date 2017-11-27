http://momentjs.com/
https://webpack.github.io/docs/webpack-dev-server.html

Template
https://v4-alpha.getbootstrap.com/examples/narrow-jumbotron/

Source of Galaxy
https://github.com/cassiozen/ReactCasts/tree/master/episode1
videosu
https://www.youtube.com/watch?v=LTunyI2Oyzw

cssleri çözümlemek için
npm install --save-dev css-loader style-loader yüklüyoruz
bu video tamda bunu anlatıyor
https://www.youtube.com/watch?v=L1QMrPsPV5w

sleeper fonksiyonu için
https://stackoverflow.com/questions/38956121/how-to-add-delay-to-promise-inside-then

fonksiyon exportları için
http://2ality.com/2014/09/es6-modules-final.html

carried function : get single parameter and receive single parameter at one a time
o yüzden kodu reusable yapmak için loaderhoc üzerinde single parametre ekliyoruz.



@Hatalar

1-Eğer böyle bir hata alıyorsanız https://github.com/shakacode/bootstrap-loader/issues/230
  Çözüm önerisini buradan buldum https://github.com/postcss/postcss-loader/issues/160
  webpack.config.js üzerine file-loader yüklüyoruz
  
  Açıklamalar
  https://github.com/webpack-contrib/file-loader

2-@decorator patterni kullanmak için 
npm i --save-dev babel-plugin-transform-decorators-legacy 
daha sonra list.js class isminin üzerine bir attribute olarak
@LoaderHOC ilgili sınıfı verdik. Bu arada 
babelrc içine plugin eklendi
{code}
{
    "presets": [
        "es2015","react"
    ],
    "plugins": [
        ["transform-decorators-legacy"]
      ]
}
{code}
ayrıca bu adreste açıklaması var
https://stackoverflow.com/questions/33801311/webpack-babel-6-es6-decorators
bu yazıda decorator patterni ne işe yarar onu anlatıyor
https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841

3-import üzerinde eslint hata veriyor the keyword import is reserved hatası alıyorum bu adresten
https://github.com/babel/babel-eslint aşağıdaki kodu çalıştırdım.
{code}
npm install eslint@3.x babel-eslint@7 --save-dev
{code}
daha sonra root'a .eslintrc dosyası ekledim içine
{code}
{
    "parser": "babel-eslint",
    "rules": {
      "strict": 0
    }
}
{code}
ekledim daha sonra visual studio code baştan başlattım. Çünkü import hataları gelmeye devam ediyor
https://github.com/Microsoft/vscode/issues/7113 bu adresten konu hakkında açılan issue baktım.

