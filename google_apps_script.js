/**
 * PROJECTE DE RECERCA DE PSICOLOGIA — JESSICA GARNIER
 * Google Apps Script per recollir respostes en temps real a Google Sheets.
 * 
 * INSTRUCCIONS DE CONFIGURACIÓ (2 minuts):
 * 1. Obre Google Sheets (https://sheets.new) i crea un full nou buit anomenat: "PR Psicologia Respostes".
 * 2. Al menú superior clica a: Extensions > Apps Script.
 * 3. Esborra tot el codi que hi hagi i ENGANXA aquest codi complet.
 * 4. Clica al botó "Desplega" (o "Implementar" / "Deploy") a dalt a la dreta > "Nou desplegament" (New deployment).
 * 5. Clica a la icona de la roda dentada > Selecciona "Aplicació web" (Web App).
 * 6. Configura:
 *    - Descripció: "Recollida PR Psicologia"
 *    - Executa com a: "Jo" (el teu compte)
 *    - Qui hi té accés: "Tothom" (Anyone)  <-- IMPORTANTÍSSIM perquè els companys puguin enviar sense iniciar sessió!
 * 7. Clica a "Desplega" (Deploy). Google et demanarà acceptar permisos (és normal, clica a "Avançat" i accepta).
 * 8. Copia l'URL de l'aplicació web que et dóna (acaba en /exec).
 * 9. Obre el teu index.html i enganxa aquest enllaç a la variable GOOGLE_SCRIPT_URL (cap a la línia 268).
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Si el full està buit, creem les capçaleres de les columnes
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Codi",
        "Data_Hora",
        "Sexe_Biologic",
        "Identitat_Genere",
        "Genere_Percebut",
        "Punts_Masc",
        "Punts_Fem",
        "Conductes_Interessos",
        "Resposta_Laia",
        "Emocio_Laia",
        "Resposta_Marc",
        "Emocio_Marc",
        "Resposta_Julia",
        "Emocio_Julia",
        "Resposta_Nil",
        "Emocio_Nil",
        "Resposta_Carla",
        "Emocio_Carla",
        "Resposta_Alex",
        "Emocio_Alex"
      ]);
      // Posar la primera fila en negreta
      sheet.getRange(1, 1, 1, 20).setFontWeight("bold");
    }
    
    // Afegim la nova fila amb les dades del participant
    sheet.appendRow([
      data.code || "",
      data.timestamp || new Date().toISOString(),
      data.sex || "",
      data.gender || "",
      data.perceived_gender || "",
      data.masc_score || 0,
      data.fem_score || 0,
      data.traits || "",
      data.laia_resp || "",
      data.laia_emo || "",
      data.marc_resp || "",
      data.marc_emo || "",
      data.julia_resp || "",
      data.julia_emo || "",
      data.nil_resp || "",
      data.nil_emo || "",
      data.carla_resp || "",
      data.carla_emo || "",
      data.alex_resp || "",
      data.alex_emo || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rows = sheet.getDataRange().getValues();
    
    if (rows.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var participants = [];
    
    // Saltem la primera fila (capçaleres)
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      participants.push({
        code: row[0],
        timestamp: row[1],
        answers: {
          sex: row[2],
          gender: row[3],
          traits: row[7] ? String(row[7]).split(" | ") : [],
          laia: row[8],
          marc: row[10],
          julia: row[12],
          nil: row[14],
          carla: row[16],
          alex: row[18]
        }
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify(participants))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
