## Regisztrációs és Bejelentkezési folyamatok

### Regisztráció: 
A látogató kiválasztja a felhasználói típust (Vevő vagy Eladó), megadja az azonosítóit, pénzügyi adatait és elérhetőségeit. A rendszer elmenti az adatokat, és létrehozza az új felhasználói fiókot.

### Bejelentkezés: 
A felhasználó megadja a hitelesítő adatait. A rendszer ellenőrzi a jogosultságot, majd a szerepkörnek megfelelő kezdőfelületet (Vevő vagy Eladó oldal) jeleníti meg.

## Vevői (User) cselekvések
### Szűrés: 
A vevő megadja a keresési szempontokat (helyszín, időpont, ár, név). A rendszer leszűkíti a jegyek listáját, és megjeleníti a találatokat.
### Vásárlás/Licit: 
A vevő kiválaszt egy jegyet, és kezdeményezi a licitálást vagy a fix áras vásárlást. A rendszer rögzíti a tranzakciót és módosítja a jegy státuszát.

## Eladói (Seller) cselekvések
### Jegyfeltöltés: 
Az eladó rögzíti az eladni kívánt jegy adatait. A rendszer elérhetővé teszi a jegyet a piactéren.
### Keresés a saját kínálatban: 
Az eladó keresési paramétereket állít be. A rendszer a saját jegyei közül listázza a találatokat.
### Módosítás/Törlés: 
Az eladó parancsot ad egy jegy módosítására vagy törlésére. A rendszer frissíti vagy eltávolítja a tétel adatait az adatbázisból.

## Adminisztrátori cselekvések
### Tartalomkezelés: 
Az admin parancsot ad egy jegy törlésére vagy szerkesztésére. A rendszer azonnal végrehajtja a módosítást az aktív kínálatban.

### Felhasználókezelés: 
Az admin szerkeszti, törli vagy felfüggeszti egy felhasználó profilját. A rendszer érvényesíti a státuszváltást, adott esetben korlátozza a hozzáférést.
### Naplózás: 
Az admin lekérdezi a tranzakciós előzményeket (feltöltések, vételek, törlések). A rendszer előkeresi és listázza az érintett felhasználók és jegyek összesített eseménytörténetét.