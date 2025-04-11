document.getElementById("selection").addEventListeners("change", (event) => {
                                            const value = document.getElementById('inputValue').value;
                                            const url = `https://github.com/AMatteEoviz/flood_fiction/blob/main/GEOJSON/hexa100_altiMean_popMean_${value}.geojson`;
  
  var spec = {
  
    "$schema": "https://vega.github.io/schema/vega-lite/v5.21.0.json",
    "width": 600,
    "height": 500,
    "autosize": "fit",
  
  
    "data": {
      "url": url,
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
      }
    ]
  
  }
  
  
  vegaEmbed('#maCarte', spec).catch(console.error);
}


