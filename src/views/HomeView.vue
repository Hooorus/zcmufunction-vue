<template>
  <v-app id="inspire">
    <!--    navbar-->
    <v-app-bar>
      <v-btn icon="mdi-home" @click="backToHome">
      </v-btn>
      <v-app-bar-title>ZCMU Function</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn :icon="collapseIcon" @click="showCities">
      </v-btn>
    </v-app-bar>
    <!--    content-->
    <v-main>
      <v-container>
        <v-row>
          <!--          综测统计-->
          <v-col cols="3">
            <v-hover v-slot="{ isHovering, props }">
              <v-card max-height="425" max-width="300" title="综测得分统计入口" v-bind="props"
                      :elevation="isHovering ? 12 : 4"
                      subtitle="根据Excel表格统计学生群体的个人综测得分">
                <v-img height="300" max-height="300"
                       src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                       cover class="text-white">
                </v-img>
                <v-card-actions>
                  <v-btn variant="text" color="teal-accent-4" @click="pushToZongce">
                    统计学生综测得分
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
          <!--          同学互评统计-->
          <v-col cols="3">
            <v-hover v-slot="{ isHovering, props }">
              <v-card max-height="425" max-width="300" title="同学互评统计入口" v-bind="props"
                      :elevation="isHovering ? 12 : 4"
                      subtitle="根据Excel表格统计综测内学生群体的同学互评得分">
                <v-img height="300" max-height="300"
                       src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                       cover class="text-white">
                </v-img>
                <v-card-actions>
                  <v-btn variant="text" color="purple-lighten-2" @click="pushToHuping">
                    统计同学互评得分
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="3" v-for="card in countriesInfo" :key="card.index" v-if="loadCities">
            <v-hover v-slot="{ isHovering, props }">
              <v-card height="425" max-height="425" max-width="300" :title="card.cityName" :subtitle="card.countryName"
                      v-bind="props" :elevation="isHovering ? 12 : 4" :append-icon="`fi-`+ card.countryFlag">
                <v-img height="300" max-height="300" :src="card.countryPhoto" cover class="text-white"></v-img>
                <v-card-actions>
                  <v-btn variant="text" color="purple-lighten-2" @click="reveal = true">
                    Explore
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";

export default {
  name: 'HomeView',
  components: {
    Footer,
  },
  data: () => ({
    countriesInfo: [
      {
        index: 1,
        countryName: "Ireland",
        cityName: "Dublin",
        countryFlag: "ie",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipP06b_yke7b8r3b2k78ExolKK3t3Byg5HIgQtpy=w408-h306-k-no"
      },
      {
        index: 2,
        countryName: "Ireland",
        cityName: "Galway",
        countryFlag: "ie",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipN7SrmacFFNeYVIe9jJRfQQtYDKimJsYIK8V55D=w408-h272-k-no"
      },
      {
        index: 3,
        countryName: "Ireland",
        cityName: "Down Patrick Head",
        countryFlag: "ie",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNI41Gx7npC0SRwOKVmTz8gLwOHHBTkGjCyx9U8=w408-h272-k-no"
      },
      {
        index: 4,
        countryName: "United Kingdom",
        cityName: "Edinburgh",
        countryFlag: "gb",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMiwBqc1TtYoxs8BbkFy-ApqzvFA5bIzUHvgzeD=w408-h255-k-no"
      },
      {
        index: 5,
        countryName: "United Kingdom",
        cityName: "London",
        countryFlag: "gb",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNcldReFhF_o_7SOSKE7v3P5XapCyYWZ4Oq0JWj=w408-h306-k-no"
      },
      {
        index: 6,
        countryName: "France",
        cityName: "Paris",
        countryFlag: "fr",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOTdWRhZoy5lJGdxy_ir-mQsy6N3O6CYLaOj0vC=w408-h544-k-no"
      },
      {
        index: 7,
        countryName: "France",
        cityName: "Nice",
        countryFlag: "fr",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMY8OnFsq4dTy2MwpTlt2kDwDTwS55-YhJugvk=w408-h462-k-no"
      },
      {
        index: 8,
        countryName: "Spain",
        cityName: "Madrid",
        countryFlag: "es",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMgtANRnQXoQ-OeeRBWN3P5W-_OgF_PPrcmOn8M=w408-h306-k-no"
      },
      {
        index: 9,
        countryName: "Spain",
        cityName: "Valencia",
        countryFlag: "es",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNBcaQzfx7WOSU8ykPKS_kdt8QbG3T6BGk_RkAo=w408-h306-k-no"
      },
      {
        index: 10,
        countryName: "Netherlands",
        cityName: "Amsterdam",
        countryFlag: "nl",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNsGse7pcNEcCZ81lPN7CTQklPujl4lKRo6hCna=w408-h306-k-no"
      },
      {
        index: 11,
        countryName: "Luxembourg",
        cityName: "Luxembourg",
        countryFlag: "lu",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMUUQ1r0ilj10b6z8HKUJjgfYK8mCxq7h1LP-2z=w408-h306-k-no"
      },
      {
        index: 12,
        countryName: "Switzerland",
        cityName: "Zurich",
        countryFlag: "ch",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipP28dyerkgsbs2MG2qQa7pyy0mcAdrBuA9ENjhz=w452-h240-k-no"
      },
      {
        index: 12,
        countryName: "Switzerland",
        cityName: "Bern",
        countryFlag: "ch",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPQcG_frelrQwlbFIP8GVKxTmMjfLFNrsPBKAYU=w426-h240-k-no"
      },
      {
        index: 13,
        countryName: "Liechtenstein",
        cityName: "Vaduz",
        countryFlag: "li",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNdasGZANypq_gWlfZ0VDkXEiwmUUbDQCq3g_7d=w426-h240-k-no"
      },
      {
        index: 14,
        countryName: "Italy",
        cityName: "Milan",
        countryFlag: "it",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipM2ka51cVyONS4E6qiUZZ3Oe8zzpnFKdzSGt7a1=w408-h906-k-no"
      },
      {
        index: 15,
        countryName: "Italy",
        cityName: "Florence",
        countryFlag: "it",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipP7Q8wtW359QI5m0bbQB2D0OVvk9I469WCF4gn7=w408-h272-k-no"
      },
      {
        index: 15,
        countryName: "Italy",
        cityName: "Rome",
        countryFlag: "it",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMZZUjB9LOvxFVdcKpWRjSKF8cGxLxwmRAKNSis=w408-h272-k-no"
      },
      {
        index: 16,
        countryName: "Austria",
        cityName: "Vienna",
        countryFlag: "at",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOjSJ9xpRMrmbUmyxIodbj5_RnAks0I-D1rzsC3=w408-h306-k-no"
      },
      {
        index: 17,
        countryName: "Germany",
        cityName: "Frankfurt",
        countryFlag: "de",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipO-zwhm1jx4VBJMKCgtBvngNSAGC9JKhSjwQkV8=w408-h321-k-no"
      },
      {
        index: 18,
        countryName: "Germany",
        cityName: "Munich",
        countryFlag: "de",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOYVBGDvrCQ5SLWQSMb8YaJnJcAlj6ZZc0bvkfN=w408-h272-k-no"
      },
      {
        index: 19,
        countryName: "Germany",
        cityName: "Berlin",
        countryFlag: "de",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMsEmR6jfTcoAqgqo5fZqX0s1sJgmXFXkr9Vocw=w408-h272-k-no"
      },
      {
        index: 20,
        countryName: "Czechia",
        cityName: "Prague",
        countryFlag: "cz",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNBzXLJmNJRs6OpKQpgc2kY7yM_0oyLT2szrgs=w408-h544-k-no"
      },
      {
        index: 21,
        countryName: "Denmark",
        cityName: "Copenhagen",
        countryFlag: "dk",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOIkP19Tl8_l8QMQ3jYjjsRcmVmddNb0e90ncdO=w408-h306-k-no"
      },
      {
        index: 21,
        countryName: "Finland",
        cityName: "Helsinki",
        countryFlag: "fi",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNOuY0PBLRJoBe5rm5Tzv_zG-SwCxng7QArtdvd=w408-h272-k-no"
      },
      {
        index: 22,
        countryName: "Greece",
        cityName: "Athens",
        countryFlag: "gr",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNFOKh2KZAdSsTVxVtJKcMDLU9Bcu19gL5LdOI=w408-h272-k-no"
      },
      {
        index: 23,
        countryName: "Turkey",
        cityName: "Istanbul",
        countryFlag: "tr",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMeIQbzVfRfX2MceCED7L2NW9yHzXZQ-z_rPLGb=w408-h392-k-no"
      },
      {
        index: 24,
        countryName: "Japan",
        cityName: "Tokyo",
        countryFlag: "jp",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOfDOxIZwD6vTH5Mx2Bi6aBiGi_KtX-ft2k5zZL=w408-h679-k-no"
      },
      {
        index: 25,
        countryName: "Singapore",
        cityName: "Singapore",
        countryFlag: "sg",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNOe1SSy37mfb8qiDLaJTOcn47XhrZZlNRFZ4Q6=w408-h272-k-no"
      },
      {
        index: 26,
        countryName: "South Korea",
        cityName: "Seoul",
        countryFlag: "kr",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPvc9Qm-q3zaHrxROf0P3kYD9cbOWhD5puciWie=w408-h508-k-no"
      },
      {
        index: 26,
        countryName: "South Korea",
        cityName: "JeJu",
        countryFlag: "kr",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMSQfxOpl2UBicUmMPyFTEzwu0Kdjs5bw57Yy9_=w491-h240-k-no"
      },
      {
        index: 27,
        countryName: "Hong Kong SAR",
        cityName: "Hong Kong",
        countryFlag: "hk",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPseX_3OQS-rr-VVOtYOkiN57tBwewkcZExZKZt=w654-h240-k-no"
      },
      {
        index: 27,
        countryName: "Macau SAR",
        cityName: "Macau",
        countryFlag: "mo",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipM-06Rc1yusB5CojlzhDz7jnxV5ARHq-PRgQX75=w408-h269-k-no"
      },
      {
        index: 28,
        countryName: "Ireland",
        cityName: "Cliff of Moher",
        countryFlag: "ie",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOJKCx5-eV_EaZeo7DWIp5Y4DqWHc9LX0DzEI5O=w408-h306-k-no"
      },
      {
        index: 29,
        countryName: "Malaysia",
        cityName: "Kuala Lumpur",
        countryFlag: "my",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPDSQHvG3jmv9YIOhzzdXGdgC-aXZqC_gtBUckP=w408-h272-k-no"
      },
      {
        index: 30,
        countryName: "Malaysia",
        cityName: "George Town",
        countryFlag: "my",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNXfaW4fFD_pLoEZAffbUUtXDAP1XkUSAgXoA20=w506-h240-k-no"
      },
      {
        index: 31,
        countryName: "Philippine",
        cityName: "Manila",
        countryFlag: "ph",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPzlWJaKAuF72aAHKKkZTHF66O7BbuFA02h2AFQ=w408-h544-k-no"
      },
      {
        index: 32,
        countryName: "Belgium",
        cityName: "Brussels",
        countryFlag: "be",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOH9BKmdNaIUGedt0r3ivNT-wkGk1nRikHsQqg=w408-h243-k-no"
      },
      {
        index: 33,
        countryName: "Portugal",
        cityName: "Lisbon",
        countryFlag: "pt",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNPJSyPRk-i6wRJQ3IJwjCxE2qdbGXCFpkXQ_LR=w408-h305-k-no"
      },
      {
        index: 34,
        countryName: "Poland",
        cityName: "Warsaw",
        countryFlag: "pl",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNMm-3_ieTiEzzIy4IC1Eu9ljXY-Ujl-8SHkhWb=w408-h275-k-no"
      },
      {
        index: 35,
        countryName: "Morocco",
        cityName: "Casablanca",
        countryFlag: "ma",
        isVisited: false,
        countryPhoto: "https://lh3.googleusercontent.com/gps-proxy/AF-Tc0Q1aDd6vOo5tce92QpA54pQt_M4_XdlRaD0pKc8M-6_Nnld1Sp8EqRfaW6aE03cwB8WqfkCV0DopJm9ejRK_ZeLUmNTwKGMbarR338ptrSr5_gCu3nOwAdZdY2EFPGurGF4dL6Zur3cnriZ11je3EheAuuxw3cPIKoU7aefpsWzEJtiWWr86Md5=w408-h306-k-no"
      },
      {
        index: 36,
        countryName: "Italy",
        cityName: "Venice",
        countryFlag: "it",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w408-h255-k-no"
      },
      {
        index: 37,
        countryName: "Hungary",
        cityName: "Budapest",
        countryFlag: "hu",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipP3MmrJdtgWH8GIDsPY_6mjeS8rBHpieDzl3FZe=w408-h303-k-no"
      },
      {
        index: 38,
        countryName: "France",
        cityName: "Mont Saint-Michel",
        countryFlag: "fr",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipO4lFEW2pnnmB7MQsAzsq8x6qVSwvNnBhbFagDU=w408-h544-k-no"
      },
      {
        index: 39,
        countryName: "Iceland",
        cityName: "Hvannadalshnukur",
        countryFlag: "is",
        isVisited: false,
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipM_mZGBAoWqsbGJ0R9p5GQNGqYXuauzP9vHjAdO=w408-h272-k-no"
      },
    ],
    loadCities: false,
    collapseStatus: true,
    collapseIcon: "mdi-chevron-up"
  }),
  methods: {
    showCities() {
      this.loadCities = !this.loadCities

      this.collapseStatus = !this.collapseStatus
      if (this.collapseStatus) {
        this.collapseIcon = "mdi-chevron-up"
      } else if (!this.collapseStatus) {
        this.collapseIcon = "mdi-chevron-down"
      }
    },
    backToHome(){
      this.$router.push('/')
    },
    pushToZongce(){
      this.$router.push('/zongce')
    },
    pushToHuping(){
      this.$router.push('/huping')
    }
  }
}
</script>
