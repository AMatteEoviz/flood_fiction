var spec = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.21.0.json",
  "width": 600,
  "height": 500,
  "autosize": "fit",


  "data": {
    "url": "https://raw.githubusercontent.com/AMatteEoviz/flood_fiction/refs/heads/main/GEOJSON/hexa100_altiMean_popMean_cannes.geojson",
    "format": {"type": "json", "property": "features"}
  },

  "layer": [
    {
      "mark":{"type": "geoshape"},
      encoding: {
          "fill": {"value": "black"},
          "stroke": {"value": "black"},
          "strokeWidth": {"value": 7},
          "opacity": {"value": 0.2}
      }
      },

    {
    "mark":{"type": "geoshape"},
    "encoding": {
        "fill": {"value": "#252563"},
        "stroke": {"value": "white"}
    }
    },

    {
    "mark":{"type": "geoshape"},
    "encoding": {
        "fill": {"value": "#dedede"},
        "stroke": {"value": "white"},

    },
    "transform": [
      {"filter": {"field": "properties.MEAN_ALTI", "gte": 1}}
    ]
    }
  ]

}


function updateFilter(value) {
  spec.layer[2].transform[0].filter.gte = Number(value);
  vegaEmbed('#maCarte', spec).catch(console.error);
}

function updateURL(nomVille) {
  spec.data.url = `https://raw.githubusercontent.com/AMatteEoviz/flood_fiction/refs/heads/main/GEOJSON/hexa100_altiMean_popMean_${nomVille}.geojson`;
  vegaEmbed('#maCarte', spec).catch(console.error);
}

function rect(nomVille) {
  var nomVille = nomVille.toLowerCase()
  var nomVille = nomVille.replace(RegExp("-", "g"), "_")
  var nomVille = nomVille.replace(RegExp("'", "g"), "_")

  return nomVille
}

vegaEmbed('#maCarte', spec).catch(console.error);


document.getElementById('meanAlti').addEventListener('change', function(event) {
  updateFilter(event.target.value); 
  });

document.getElementById('selection').addEventListener('change', function(event) {
  updateURL(rect(event.target.value)); 
  });


