Vue.createApp({
    data() {
        return{
            listeVille: [
                "Cannes",
                "Antibes",
                "Nice",
                "Beaulieu-sur-Mer",
                "Cap-d'Ail",
                "Roquebrune-Cap-Martin",
                "Menton"
            ],
        }
    },
    
}).mount("#selection");

Vue.createApp({
    data() {
        return {
            selectAlti:0,
            data: {},
        }
    },
    created() {
        fetch("https://raw.githubusercontent.com/AMatteEoviz/flood_fiction/refs/heads/main/JSON/hexa100_altiMean_freqPop_global.json")
            .then(response => response.json())
            .then(json => {
                // Transformer le tableau en un objet { alti_round: freq_cum_pop }
                this.data = json.reduce((acc, item) => {
                    acc[item.MEAN_ALTI_rond] = item.FREQ_CUM;
                    return acc;
                }, {});
            })
            .catch(error => console.error("Erreur de chargement JSON :", error));
    },
    computed: {
        freqCumPop() {
            return this.data[this.selectAlti] || 0; // Évite les erreurs si la clé n'existe pas
        }
    }
}).mount("#app");
