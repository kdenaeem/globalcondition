<!-- Load required Bootstrap and BootstrapVue CSS -->

<!-- Load polyfills to support older browsers -->
<script src="//polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver" crossorigin="anonymous"></script>

<!-- Load Vue followed by BootstrapVue -->
<script src="//unpkg.com/vue@latest/dist/vue.min.js"></script>
<script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>

<!-- Load the following for BootstrapVueIcons support -->
<script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js"></script>
<template>
    
<div id="app">
           <b-button  variant="outline-primary" v-b-toggle.sidebar-1>
          <img src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png" style="float: right; width: 25px;">
        </b-button>
        <b-sidebar id="sidebar-1" title="Options" left shadow>
          <template>
            <div class="px-3 py-2">
                <h4 id="sidebar-no-header-title">Find out how to properly read and digest news from around the world, different sources safely by checking out Information</h4>
                <b-button  lg="3" class="pb-2" variant="light" @click="modalShow = !modalShow" block >Information</b-button>
                
                <b-button  lg="3" class="pb-2" variant="light" block >Credits</b-button>  
                <b-button  lg="3" class="pb-2" variant="light" block >Contact me</b-button>               
            </div>
          </template>
        </b-sidebar>
    <b-container>
    <b-row v-if="modalShow" class="modalCard" id="card">
      <b-modal
      title = "Reading the News"
      v-model="modalShow">The goal of this application is to allow users to explore news around the world. People tend to keep themselves updates about news from their country. Sticking to their comfort zone, refusing to learn and engage in foreign matters. Regardless of what you're reading, educating yourself about conditions/lives/politics of countries that may be on the other side of the world only progresses your ability to emphatise with others and digest events within your own country. Engaging yourself in international affairs only allows you connect yourself on a deeper and more intellectual level to humans around the global. However, in the age of information, guided misinformation plagues the internet. And so, its important to research any topics or discussion thoroughly before coming to a conclusion, this is because news outlets with certain biases have no choice but to malform stories to fit certain biases. This however, mainly applies to politics examples can still be found to change the smallest of things. This news map presents you with stories from all over the world with different sources, read each and every piece with a grain of salt and if your interested make sure to research it afterwards. I hope I opened you to stories from around the world, and my only advice is to keep engaging.   </b-modal>
    </b-row>
    </b-container>
</div>
</template>


<script>
export default {
    name:"SideBar",
    data() {
        return {
            modalShow:false
        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';


.modal:before{
   display: none;
};
.menu_button {
    margin-right: -100rem;
}
</style>
