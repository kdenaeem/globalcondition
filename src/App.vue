
<template>
  <div>
    <SideBar></SideBar>
    <NewsMap :news="news"></NewsMap>
    <Arbi></Arbi>
  </div>
</template>

<script>
import NewsMap from "@/components/NewsMap.vue";
import newsData from "@/assets/test.json"
import SideBar from "@/components/SideBar.vue"
import Arbi from "@/components/Arb.vue"

export default {
  name: "App",
  components: {
    NewsMap,
    SideBar,
    Arbi
  },
  data() {
    return {

    };
  },
  computed: {
    news() {
        return newsData;
      }
    },
};
</script>


