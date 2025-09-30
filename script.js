const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbvwLkDMlckO2HvuLLXjMNhOk_ux7H2B-IV4-l1s6phqneKA-eqQTfcD_IujjcWcbmEPqdvrPyCxXP/pub?output=csv";

Papa.parse(url, {
    download: true,
    header: false,
    skipEmptyLines: true,
    complete: function(results) {
        const tableau = results.data;
        console.log("tableau :", tableau)

        const balise = document.getElementById("reponses");

        // En-tête du tableau
        let en_tete = "<tr>";
        tableau[0].forEach(colonne => {
            en_tete += `<th>${colonne}</th>`;
        });
        en_tete += "</tr>";
        balise.innerHTML += en_tete;

        // Cellule du tableau
        for (let i = 1; i < tableau.length; i++) {
            let contenu = "<tr>";
            tableau[i].forEach(cellule => {
                contenu += `<td>${cellule}</td>`;
            });
            contenu += "</tr>";
            balise.innerHTML += contenu;
        }
    }
});