<template>
  <div class="columns is-centered is-multiline" style="margin-top: 2rem; margin-bottom: 5rem; margin-right: 2rem; ">
    <div id="map_div" class="column is-8"> 
      <div id="news_map"></div>
    </div>
    <div class="column is-3">

      <div class="columns is-multiline" style="margin-top: 3rem;margin-left: 10rem;margin-right: -1rem">
        <p class="title column is-10">{{ currentcountry }}</p>
        <div class="column is-11 expand-on-hover" v-for="(article, index) in articles" :key="index">
          <a :href="article.url">
            <div class="card">
              <div class="card-image">
                <img :src="article.image" />
              </div>
              <div class="card-content">
                <p class="subtitle is-5 ">{{ article.title }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datamap from "../../node_modules/datamaps";
import * as d3a from 'd3';

const countriesInfo = require("countries-information");
const coords = require("country-coords").byCountry();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("7a48e2a897a24114b76fddbd5e5b1a3c");

export default {
  name: "NewsMap",
  props: ["news"],
  data() {
    clicked : "aaa"
    return {
      currentcountry: "Click on the nodes to view current news", //current country that is hovered
      articles: [], //placeholder for articles which will appear on hover.
    };
  },
  
  mounted() {
    const vm = this;
    var map = new Datamap({
      scope: "world",
      element: document.getElementById("news_map"),
      height: 700,
      width: 1300,
      fills: {
        defaultFill: "#b9bdc4",
        red: "#CA302D"
      },
      
      done: function(datamap) {
        d3a.select('.datamap').call(
          d3a.zoom().scaleExtent([0.8, 7]).on('zoom', function() {
            datamap.svg.selectAll('g').attr('transform', d3a.event.transform)
          })
        )
        // datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
        //   vm.clicked = true
        //   console.log(this.clicked)
        // });
      },
  

  imageChanger(){
    this.getImage(article.url).then(function(response){
      document.getElementById("img").src="response"
    });
  },
  setProjection: function(element) {
    var projection = d3.geo.equirectangular()
      .center([1, 10])
      .scale(250)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geo.path()
      .projection(projection);

    return {path: path, projection: projection};
  }, 
      
      
    });

    map.bubbles(this.newsBubbles, {
      popupTemplate: function(geo, data) {
        vm.currentcountry = data.name;
        vm.articles = data.articles;
      },
      
    });
    },
    watch: {
      articles() {
        this.articles.forEach(article => {
          this.getImage(article.title).then(image => (article.image = image));
        });
      }
    },
      methods: {
        changeSize() {
          vm.clicked = true
        },
        getImageAlJ(title) {
        return newsapi.v2
        .everything({
          qInTitle:title,
          sources: "al-jazeera-english",
        })
        .then(response => {
          if (response.articles.length > 0 && 
          response.articles[0].urlToImage != undefined)
          {
            return response.articles[0].urlToImage;
          } else {

            return "https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1"; 
          }
        })
      },
      getImage(title) {
        return newsapi.v2
        .everything({
          qInTitle: title, //Search for title in news api
          sources: "bbc-news", //Restrict to BBC news only. You can change this to suit your needs
        })
        .then(response => {
          if (
            response.articles.length > 0 &&
            response.articles[0].urlToImage != undefined
          ) {
            // return response.articles[0].urlToImage;
          } else {
            return this.getImageAlJ(title)
          }
        });
      },
    changeSize() {
        var x = document.getElementById("map_div").innerHTML;
        document.getElementById("map_div").setAttribute("class", "column is-7")
      },
    getCoordinates(name) {
      let country_info = countriesInfo.getCountryInfoByName(name);
      let coordinates = coords.get(country_info.alpha2);
      // console.log(name, coordinates);
      return coordinates;
    },
    getLatitude(name) {
      //Simple wrapper function to make things easier. Just call this.getLatitude('some country name')
      return this.getCoordinates(name).latitude;
    },
    getLongitude(name) {
      //Simple wrapper function to make things easier. Just call this.getLongitude('some country name')
      return this.getCoordinates(name).longitude;
    },
    reformatArticles(articles) {
      //Reformats { "title": "url" } to  { title: "title", url: "url" }
      let newArticles = [];
      let titles = Object.keys(articles);
      titles.forEach(article => {
        newArticles.push({
          title: article,
          url: articles[article].link,
          image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Vervet_Monkey_%28Chlorocebus_pygerythrus%29.jpg"
        });
      });

      return newArticles;
    }
  },
  computed: {
    newsBubbles() {
      let bubbles = [];
      let countries = Object.keys(this.news); 
      console.log(countries)
      countries.forEach(country => {
        let country_articles = (this.reformatArticles(this.news[country]));
        console.log(country)

        let bubble = {
          
          name: country,
          articles: country_articles,
          radius: (country_articles.length * 15) / 5, 
          latitude: this.getLatitude(country),
          longitude: this.getLongitude(country),
          fillKey : "red"
         };
        //  console.log(this.reformatArticles(this.news["Brazil"]))
        bubbles.push(bubble);
      });
      return bubbles;
    },
  }
};
</script>

<style scoped>
.expand-on-hover:hover {
  width: 130%;
  transition: 300ms ease width;
}

.expand-on-hover {
  transition: 300ms ease width;
}
</style>

