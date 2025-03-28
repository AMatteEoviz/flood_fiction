var spec = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.21.0.json",
  "width": 600,
  "height": 500,
  "autosize": "fit",


  "data": {
    "url": "http://localhost:8080/geoserver/MoNat/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=MoNat%3Acommunes&outputFormat=application%2Fjson",
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

vegaEmbed('#map', spec).catch(console.error);


