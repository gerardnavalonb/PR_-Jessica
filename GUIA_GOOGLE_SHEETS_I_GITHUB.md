# 🚀 Guia Pas a Pas: Connectar la Web amb Google Sheets i GitHub Pages

Aquesta guia et permetrà recollir les respostes de qualsevol persona que obri la teva web (des del mòbil o ordinador) directament al teu propi **Google Sheets**, i veure totes les dades calculades al teu **panell d'administració** en temps real.

---

## 📌 Pas 1: Crear el teu Google Sheets (2 minuts)

1. Entra a [Google Sheets](https://sheets.new) amb el teu compte de Google/Gmail.
2. Posa-li un nom al document a dalt a l'esquerra, per exemple: `PR Psicologia - Respostes`.
3. Al menú superior, fes clic a **Extensions** > **Apps Script**.
4. S'obrirà una pestanya nova amb un editor de codi. **Esborra el codi que hi ha** per defecte.
5. Copia i enganxa tot el codi del fitxer [`google_apps_script.js`](file:///C:/Users/adbatx/.gemini/antigravity/scratch/pr-psicologia/google_apps_script.js).
6. A dalt a la dreta, fes clic al botó blau **Desplega** (o *Deploy*) > **Nou desplegament** (*New deployment*).
7. Al costat de "Selecciona el tipus", fes clic a la icona d'engranatge ⚙️ i tria **Aplicació web** (*Web app*).
8. Omple els camps així:
   * **Descripció:** `Recollida PR`
   * **Executa com a:** `Jo` (*Me*)
   * **Qui hi té accés:** **`Tothom`** (*Anyone*) ⚠️ *(Molt important! Si no poses "Tothom", els participants no podran enviar les respostes).*
9. Clica a **Desplega** (*Deploy*).
10. Google et demanarà autoritzar permisos:
    * Clica a **Revisa els permisos** (*Review permissions*) i tria el teu compte.
    * Si et surt un avís de seguretat de Google, fes clic a **Avançat** (*Advanced*) i després a **Ves a PR (no segur)** (*Go to project*). És el teu propi script, així que és 100% segur.
    * Fes clic a **Permet** (*Allow*).
11. Et sortirà una finestra amb una adreça URL que acaba en `/exec`. **Copia aquest enllaç!**

---

## 📌 Pas 2: Posar l'enllaç al teu `index.html` (30 segons)

1. Obre el fitxer [`index.html`](file:///C:/Users/adbatx/.gemini/antigravity/scratch/pr-psicologia/index.html).
2. Busca la línia on diu:
   ```javascript
   const GOOGLE_SCRIPT_URL = "";
   ```
3. Enganxa el teu enllaç dins de les cometes. Ha de quedar així:
   ```javascript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
   ```
4. Guarda el fitxer (`Ctrl + S`).

---

## 📌 Pas 3: Pujar-ho a GitHub Pages (3 minuts)

1. Entra a [github.com](https://github.com) i inicia sessió (o crea un compte gratuït si no en tens).
2. Crea un repositori nou clicant a **New**:
   * Nom del repositori: `pr-psicologia`
   * Assegura't que estigui en **Public**.
   * Clica a **Create repository**.
3. A la pantalla següent, clica a **uploading an existing file**.
4. Arrossega el fitxer `index.html` i clica a **Commit changes**.
5. Vés a la pestanya **Settings** (configuració del repositori) > menú lateral **Pages**.
6. A l'apartat **Branch**, canvia `None` per **`main`** i clica a **Save**.
7. En 1 minut, GitHub et donarà el teu enllaç públic, per exemple:
   `https://elteuusuari.github.io/pr-psicologia/`

---

## 🎉 Com funciona tot ara?

* **Per als participants:** Envia'ls aquest enllaç per WhatsApp o xarxes. Quan responen i cliquen a "Continuar" al final:
  * Les dades van directament al teu **Google Sheets** (fila a fila, en segons!).
* **Per a tu (Jessica):**
  * Pots obrir el teu Google Sheets en qualsevol moment i veure les respostes entrades.
  * O bé pots obrir la teva web, anar a baix de tot a **"● administració"**, posar la teva contrasenya (`jessica2025`) i clicar al botó verd **"🔄 Sincronitzar dades"**: et carregarà totes les respostes i et calcularà els percentatges, taules creuades i el test de $\chi^2$ en viu!
