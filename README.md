# Grup5-CRM Web sitesi

## Projeyi Çalıştırma

Projeyi çalıştırmak için bilgisayarınıza clone yaptıktan sonra ilgili dosyaların yüklenmesi için proje dizininde "npm install" komutu çalıştırması gereklidir.

Daha sonra "npm start" diyerek projeyi web browser'da görünteleyebilirsiniz.

## Projeyi Geliştirme Kuralları

Projeyi geliştirirken master branch’ine direk pushlama yapmıyoruz. Master bizim deploy etmeye hazır production kodumuz olacak. Bunun yerine feature branchleri açıp mesela feat/login gibi bu branch üzerinden geliştirme yapıp en son geliştirme bitince pull request atıyoruz yine direk master'a merge yapmıyoruz.

Kısaca adımlar şu şekilde örnek olarak;

Master branch'ı üzerindeyken;

- git branch feat/login
- git checkout feat/login
- bazı geliştirmeler yapıldı …..
- git add .
- git commit -m "uygun bir commit mesajı"
- git push origin feat/login
-  ve son olarak azure devops’daki repodan master'a pull request açma.


