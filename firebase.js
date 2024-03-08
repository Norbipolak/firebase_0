/*
Firebase ->
Get Started -> itt megjelennek az eddigi projektjeid
és van egy olyan gomb, hogy add project 

Mire jó a firebase -> 
Arra jó, hogy ide fel tudunk tölteni különböző weboldalakat erre a tárlhelyre

Add project
Ezzel készítünk egy új projectet és itt meg tudjuk adni, hogy mi legyen a projectünknek a neve
megadjuk a nevét continue 
és akkor be van a következő oldalon egy olyan, hogy enable Google Analytics for this project 
az nekünk nem kell, de az se baj ha marad (itt mindenféle statisztikai adatokat tudnánk szerezni a weboldalunkról)
azt mondjuk, hogy create project 

Megjelenik nekünk a firebase felülete 
itt tudnánk ios-re, androidra fejleszteni(deploy-olni), de nekünk nem ez kell hanem a web </>

Késsítünk egy webaplikációt (register app)
-megadjuk a nevét az applikációnak 
-alatta lesz egy olyan, hogy Also set up Firebase hosting, ami kell majd nekünk 
-> 
ez azt jelenti, hogy csinál nekünk egy hosting szolgéltatást, amivel meg tudjuk jeleníteni a neten a weboldalunkat
lesz valami domain címe és lesz egy tárhelye neki!!!!!!!!!!!!!!!!!
azt mondjuk, hogy register app

és itt lesz egy olyan, hogy -> npm install firebase
ezt majd meg kell adnunk a projektunknak(be kell írni a terminalba)

ami a az npm install forebase alatt van azt be kell rakni egy külön js fájlba, itt mi a fb.js-be bemásoltunk mindent, ami ott volt 

és így fog kinézni ->
*/

const firebaseConfig = {
    apiKey:"sdgfmisehtbijmkrebfidmkfdv",
    authDomain: "foods-c7744.firebaseapp.com",
    projectId: "foods-c7744",
    storageBucket: "foods-c7744.appspot.com", 
    messagingSenderId: "6546757547",
    appId: "1:343444543553:web:8svds3vds32rh3425"
};
/*
Megmutatja az Api kulcsunkat (apiKey), azt is meghatározza, hogy  mi lesz a webcímünk 
-> authDomain: "foods-c7744.firebaseapp.com"
és az applikációnak az id-ját, amit ő képez -> appId: "1:343444543553:web:8svds3vds32rh3425"

amit ide bemásultunk az alján van egy olyan
-> 
const app = initializeApp(firebaseConfig);

és akkor ezalá ezt az App-et exportáljuk, mert innen mendenféle szolgáltatás elérhető lesz majd 
pl. autentikáció vagy adatbázis
*/

const app = initializeApp(firebaseConfig);

export default app;

/*
!!!!!!!!!!!!!!!!!!!!!!!
és ha nekünk nincsen globálisan telepítve nekünk ez a firebase -> 
npm install -g firebase-tools


1. firebase-login

és akkor van egy olyan, hogy firebase login, de egyébként nem kell semmilyen felhasználónevet meg password-öt megadni, mert google alapú 
tehát , ha van egy google fiókunk, akkor kb. 2 lépésből meg lehet csinálni a firebase fiókunkat és akkor utána, úgy be lehet 
jelentkezni, kiválasztjuk, hogy melyik account-val akarunk bejelentkezni, rákattintunk és bejelentkeztet

2. firebase-init
és ezzel a firebase-init, mindenféle kérdéseket fog feltenni ->
és a kérdésekből, amit nekünk ki kell választani, bepipálni 
-> 
a. kérdés 
Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

(Ha tovaább akarunk menni, akkor enter-t nyomunk, ha ki akarunk valamit választani a listából akkor meg space-t)

b. kérdés
Please select an option
->
Use an existing project (mert mi a mér előzőleg megcsinált projekt-vel akarunk dolgozni, azt akarjuk felhasználni)
amit csináltunk erre a foods lesz, amit a legelején megadtunk, hogy add project

c.kérdés
What do you want to use as your public directory?
!!! ide nekünk azt kell beírni, hogy build
a build mappát szeretnénk használni és nem pedig a public-ot!!!!!!!!
mert,hogyha nekünk a public-ot felülírja az nagyon rossz és mi majd build-elés után 
a build-elés az az amikor csinálunk egy egyszerű JavaScript alapú app-ot ebből a React-es applikációból !!!!!!!!!!!!!!!!!!!

d.kérdés 
Configure as a single-page app(rewrite all urls to/index.html)?
yes (y)

e.kérdés
Set up an automatic builds and deploys with GitHub?
no (n)

és ezután csinál nekünk egy build mappát egy index.html fájl-val, amit már fel tudnánk rakni a netre azzal, hogy ->
firebase deploys
!!!!Ez a deploy, amikor feltöltünk valamit a host-odra tehát a tárhelyünkre

akkor azt mondjuk, hogy continue to console 
és a Project Overview mellett van egy fogaskrék és kiválasztjuk a project settings-et 
ott nincsen link, ami az oldalra vezetne, de van ugye az amit bemásoltunk és ott meg van a webcímünk -> 
authDomain: "foods-c7744.firebaseapp.com"

és akkor ha bármit változtatunk a index.html fájlban, ami a buildben van, akkor az itt meg fog jelenni 
!!!!!
ha meg az applikációnkat szeretnénk deploy-olni, akkor azt kell beírni a terminalba, hogy ->
npm run build 
Ez csinál nekünk egy html, Javacript, css alapú build-et, ami ugyanolyan, ugyanazt fogja csinálni, mint a 
react applikációnk csak nem lesz benne react kód, erre azért van szükség mert a böngészönk az nem tudja értelmezni a react kódot 
csak a js-t, html-t és a css-t!!!!!!!!!!!!!

csinált nekünk egy build mappát, amiben van egy static mappa és abban van egy 
1. index.html fájl 
2. van egy css mappa is amiben van egy css fájl is main.0jkh0kh115.css
3. és van egy js fájlunk, amiben van egy main.245345gf345.js fájl, gyakorlatilag ez csinálja meg azt amit mi leprogramoztunk 

és ha ilyenkor momdjuk azt, hogy ->
firebase deploy

akkor láthatjuk azt a foods-os valamit, amit elkészítettünk 
ez müködik is tehát ki tudjuk választani a dolgokat és kosárba rakni őket 
és akkor a cart-ban ugyanugy tudjuk állítani a mennyiséget és kitörölni az adott terméket 

és akkor ez már elérhető a neten, be tudja mindenki írni ezt a webcímet és tudja használni az oldalt 
*/