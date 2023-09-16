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
          <!-- travel cards-->
          <v-col cols="3" v-for="card in countriesInfo" :key="card.index" v-if="loadCities">
            <v-hover v-slot="{ isHovering, props }">
              <!--flip card-->
              <div class="flip-card-wrap">
                <div class="flip-card">
                  <!--side front-->
                  <div class="flip-side flip-side-front">
                    <v-card height="425" max-height="425" max-width="300"
                            v-bind="props" :elevation="isHovering ? 12 : 4">
                      <v-img height="425" max-height="425" :src="card.countryPhoto" cover class="text-white"
                             :gradient="card.backgroundGradient">
                        <v-card-item>
                          <v-card-title>{{ card.cityName }}</v-card-title>
                          <v-card-subtitle>{{ card.countryName }}</v-card-subtitle>
                          <v-icon :class="`fi fi-`+ card.countryFlag"></v-icon>
                        </v-card-item>
                      </v-img>
                    </v-card>
                  </div>
                  <!--side back-->
                  <div class="flip-side flip-side-back">
                    <v-card height="425" max-height="425" max-width="300"
                            v-bind="props" :elevation="isHovering ? 12 : 4">
                      <!--card head-->
                      <v-img height="75" cover>
                        <!--transparent background flag slot-->
                        <template #placeholder>
                          <v-img class="align-end text-white align-center justify-center" height="75"
                                 :src="card.countryFlagPhoto"
                                 style="opacity: 30%; transform: rotate(-18.5deg) scale(290%)">
                          </v-img>
                        </template>
                        <!--text & flag above it-->
                        <v-card-item :append-icon="`fi fi-`+ card.countryFlag">
                          <v-card-title>{{ card.cityName }}</v-card-title>
                          <v-card-subtitle>{{ card.countryName }}</v-card-subtitle>
                          <!--                    <span slot="append" :class="`fi fi-`+ card.countryFlag"></span>-->
                        </v-card-item>
                      </v-img>
                      <v-img height="300" max-height="300" :src="card.countryPhoto" cover class="text-white"></v-img>
                      <v-card-actions>
                        <v-btn variant="text" :color="card.countryColor" @click="adc = true">
                          Explore
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </div>
                </div>
              </div>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
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
        countryColor: "#019A4A",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(1,154,74,.90), rgba(1,154,74,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipP06b_yke7b8r3b2k78ExolKK3t3Byg5HIgQtpy=w408-h306-k-no",
        countryFlagPhoto: "https://img.freepik.com/premium-photo/flag-ireland-3d-illustration-irish-flag-waving_2227-1789.jpg",
      },
      {
        index: 2,
        countryName: "Ireland",
        cityName: "Galway",
        countryFlag: "ie",
        countryColor: "#019A4A",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(1,154,74,.90), rgba(1,154,74,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipN7SrmacFFNeYVIe9jJRfQQtYDKimJsYIK8V55D=w408-h272-k-no",
        countryFlagPhoto: "https://img.freepik.com/premium-photo/flag-ireland-3d-illustration-irish-flag-waving_2227-1789.jpg",
      },
      {
        index: 3,
        countryName: "Ireland",
        cityName: "Down Patrick Head",
        countryFlag: "ie",
        countryColor: "#019A4A",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(1,154,74,.90), rgba(1,154,74,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNI41Gx7npC0SRwOKVmTz8gLwOHHBTkGjCyx9U8=w408-h272-k-no",
        countryFlagPhoto: "https://img.freepik.com/premium-photo/flag-ireland-3d-illustration-irish-flag-waving_2227-1789.jpg",
      },
      {
        index: 4,
        countryName: "United Kingdom",
        cityName: "Edinburgh",
        countryFlag: "gb",
        countryColor: "#01079A",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(1,7,154,.90), rgba(1,7,154,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMiwBqc1TtYoxs8BbkFy-ApqzvFA5bIzUHvgzeD=w408-h255-k-no",
        countryFlagPhoto: "https://getwallpapers.com/wallpaper/full/3/0/7/1042837-popular-united-kingdom-flag-wallpaper-1920x1080.jpg"
      },
      {
        index: 5,
        countryName: "United Kingdom",
        cityName: "London",
        countryFlag: "gb",
        countryColor: "#01079A",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(1,7,154,.90), rgba(1,7,154,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNcldReFhF_o_7SOSKE7v3P5XapCyYWZ4Oq0JWj=w408-h306-k-no",
        countryFlagPhoto: "https://getwallpapers.com/wallpaper/full/3/0/7/1042837-popular-united-kingdom-flag-wallpaper-1920x1080.jpg"
      },
      {
        index: 6,
        countryName: "France",
        cityName: "Paris",
        countryFlag: "fr",
        countryColor: "#0236BC",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(2,54,188,.90), rgba(2,54,188,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOTdWRhZoy5lJGdxy_ir-mQsy6N3O6CYLaOj0vC=w408-h544-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/510973709/photo/close-up-of-the-flag-of-france.webp?b=1&s=170667a&w=0&k=20&c=_DE_rAM3tKwHPoKI9PQFIkoV8vkuVR6SQYvucZwZa94="
      },
      {
        index: 7,
        countryName: "France",
        cityName: "Nice",
        countryFlag: "fr",
        countryColor: "#0236BC",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(2,54,188,.90), rgba(2,54,188,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMY8OnFsq4dTy2MwpTlt2kDwDTwS55-YhJugvk=w408-h462-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/510973709/photo/close-up-of-the-flag-of-france.webp?b=1&s=170667a&w=0&k=20&c=_DE_rAM3tKwHPoKI9PQFIkoV8vkuVR6SQYvucZwZa94="
      },
      {
        index: 8,
        countryName: "Spain",
        cityName: "Madrid",
        countryFlag: "es",
        countryColor: "#E1A200",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(225,162,0,.90), rgba(225,162,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMgtANRnQXoQ-OeeRBWN3P5W-_OgF_PPrcmOn8M=w408-h306-k-no",
        countryFlagPhoto: "https://png.pngtree.com/background/20210715/original/pngtree-wavy-spain-flag-background-picture-image_1316536.jpg"
      },
      {
        index: 9,
        countryName: "Spain",
        cityName: "Valencia",
        countryFlag: "es",
        countryColor: "#E1A200",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(225,162,0,.90), rgba(225,162,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNBcaQzfx7WOSU8ykPKS_kdt8QbG3T6BGk_RkAo=w408-h306-k-no",
        countryFlagPhoto: "https://png.pngtree.com/background/20210715/original/pngtree-wavy-spain-flag-background-picture-image_1316536.jpg"
      },
      {
        index: 10,
        countryName: "Netherlands",
        cityName: "Amsterdam",
        countryFlag: "nl",
        countryColor: "#21468B",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(33,70,139,.90), rgba(33,70,139,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNsGse7pcNEcCZ81lPN7CTQklPujl4lKRo6hCna=w408-h306-k-no",
        countryFlagPhoto: "https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/2962/5202/hollandflag__26010.1614607410.jpg?c=2"
      },
      {
        index: 11,
        countryName: "Luxembourg",
        cityName: "Luxembourg",
        countryFlag: "lu",
        countryColor: "#00A5E5",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(0,165,229,.90), rgba(0,165,229,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMUUQ1r0ilj10b6z8HKUJjgfYK8mCxq7h1LP-2z=w408-h306-k-no",
        countryFlagPhoto: "https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/3013/5531/Luxemburg__80447.1647332205.jpg?c=2"
      },
      {
        index: 12,
        countryName: "Switzerland",
        cityName: "Zurich",
        countryFlag: "ch",
        countryColor: "#E31D1D",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(227,29,29,.90), rgba(227,29,29,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipP28dyerkgsbs2MG2qQa7pyy0mcAdrBuA9ENjhz=w452-h240-k-no",
        countryFlagPhoto: "https://rare-gallery.com/uploads/posts/728640-Switzerland-Flag-Cross.jpg"
      },
      {
        index: 12,
        countryName: "Switzerland",
        cityName: "Bern",
        countryFlag: "ch",
        countryColor: "#E31D1D",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(227,29,29,.90), rgba(227,29,29,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPQcG_frelrQwlbFIP8GVKxTmMjfLFNrsPBKAYU=w426-h240-k-no",
        countryFlagPhoto: "https://rare-gallery.com/uploads/posts/728640-Switzerland-Flag-Cross.jpg"
      },
      {
        index: 13,
        countryName: "Liechtenstein",
        cityName: "Vaduz",
        countryFlag: "li",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNdasGZANypq_gWlfZ0VDkXEiwmUUbDQCq3g_7d=w426-h240-k-no",
        countryFlagPhoto: "https://www.wagrati.eu/media/images/flagge-liechtenstein-1400x840.jpg"
      },
      {
        index: 14,
        countryName: "Italy",
        cityName: "Milan",
        countryFlag: "it",
        countryColor: "#038700",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(3,135,0,.90), rgba(3,135,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipM2ka51cVyONS4E6qiUZZ3Oe8zzpnFKdzSGt7a1=w408-h906-k-no",
        countryFlagPhoto: "https://www.worldatlas.com/r/w1200/upload/20/07/2a/shutterstock-152854481.jpg"
      },
      {
        index: 15,
        countryName: "Italy",
        cityName: "Florence",
        countryFlag: "it",
        countryColor: "#038700",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(3,135,0,.90), rgba(3,135,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipP7Q8wtW359QI5m0bbQB2D0OVvk9I469WCF4gn7=w408-h272-k-no",
        countryFlagPhoto: "https://www.worldatlas.com/r/w1200/upload/20/07/2a/shutterstock-152854481.jpg"
      },
      {
        index: 15,
        countryName: "Italy",
        cityName: "Rome",
        countryFlag: "it",
        countryColor: "#038700",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(3,135,0,.90), rgba(3,135,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMZZUjB9LOvxFVdcKpWRjSKF8cGxLxwmRAKNSis=w408-h272-k-no",
        countryFlagPhoto: "https://www.worldatlas.com/r/w1200/upload/20/07/2a/shutterstock-152854481.jpg"
      },
      {
        index: 16,
        countryName: "Austria",
        cityName: "Vienna",
        countryFlag: "at",
        countryColor: "#C8102E",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(200,16,46,.90), rgba(200,16,46,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOjSJ9xpRMrmbUmyxIodbj5_RnAks0I-D1rzsC3=w408-h306-k-no",
        countryFlagPhoto: "https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/2806/5104/austriaflag__75754.1605185717.jpg?c=2"
      },
      {
        index: 17,
        countryName: "Germany",
        cityName: "Frankfurt",
        countryFlag: "de",
        countryColor: "#270000",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(39,0,0,.90), rgba(39,0,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipO-zwhm1jx4VBJMKCgtBvngNSAGC9JKhSjwQkV8=w408-h321-k-no",
        countryFlagPhoto: "https://t3.ftcdn.net/jpg/01/11/68/26/360_F_111682656_g63NR8Z16g8H8boPR3LK6J4VEbSv9oXg.jpg"
      },
      {
        index: 18,
        countryName: "Germany",
        cityName: "Munich",
        countryFlag: "de",
        countryColor: "#270000",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(39,0,0,.90), rgba(39,0,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOYVBGDvrCQ5SLWQSMb8YaJnJcAlj6ZZc0bvkfN=w408-h272-k-no",
        countryFlagPhoto: "https://t3.ftcdn.net/jpg/01/11/68/26/360_F_111682656_g63NR8Z16g8H8boPR3LK6J4VEbSv9oXg.jpg"
      },
      {
        index: 19,
        countryName: "Germany",
        cityName: "Berlin",
        countryFlag: "de",
        countryColor: "#270000",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(39,0,0,.90), rgba(39,0,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMsEmR6jfTcoAqgqo5fZqX0s1sJgmXFXkr9Vocw=w408-h272-k-no",
        countryFlagPhoto: "https://t3.ftcdn.net/jpg/01/11/68/26/360_F_111682656_g63NR8Z16g8H8boPR3LK6J4VEbSv9oXg.jpg"
      },
      {
        index: 20,
        countryName: "Czechia",
        cityName: "Prague",
        countryFlag: "cz",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(39,0,0,.90), rgba(39,0,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNBzXLJmNJRs6OpKQpgc2kY7yM_0oyLT2szrgs=w408-h544-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/1218009965/photo/flag-of-czech-republic-blowing-in-the-wind.jpg?s=612x612&w=0&k=20&c=IGfLgDCIPk8ZbALgON3uSr6QcYZJ1gzxTA4xSR7XgsE="
      },
      {
        index: 21,
        countryName: "Denmark",
        cityName: "Copenhagen",
        countryFlag: "dk",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOIkP19Tl8_l8QMQ3jYjjsRcmVmddNb0e90ncdO=w408-h306-k-no",
        countryFlagPhoto: "https://a-z-animals.com/media/2022/11/flag-of-denmark-blowing-in-the-wind.jpg_s1024x1024wisk20c0DPsTA3CmJAKJpP_Nf6O87msLuW1drgrAW5cWSvDQJ8-1024x614.jpg"
      },
      {
        index: 21,
        countryName: "Finland",
        cityName: "Helsinki",
        countryFlag: "fi",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNOuY0PBLRJoBe5rm5Tzv_zG-SwCxng7QArtdvd=w408-h272-k-no",
        countryFlagPhoto: "https://www.wagrati.eu/media/images/flagge-finnland-1400x855.jpg"
      },
      {
        index: 22,
        countryName: "Greece",
        cityName: "Athens",
        countryFlag: "gr",
        countryColor: "#026EBC",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(2,110,188,.90), rgba(2,110,188,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNFOKh2KZAdSsTVxVtJKcMDLU9Bcu19gL5LdOI=w408-h272-k-no",
        countryFlagPhoto: "https://img.freepik.com/premium-photo/blue-white-national-flag-greece_526955-261.jpg"
      },
      {
        index: 23,
        countryName: "Turkey",
        cityName: "Istanbul",
        countryFlag: "tr",
        countryColor: "#9A0101",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(154,1,1,.90), rgba(154,1,1,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMeIQbzVfRfX2MceCED7L2NW9yHzXZQ-z_rPLGb=w408-h392-k-no",
        countryFlagPhoto: "https://archive.org/download/TurkeyFlag/TurkeyFlag.jpg"
      },
      {
        index: 24,
        countryName: "Japan",
        cityName: "Tokyo",
        countryFlag: "jp",
        countryColor: "#B59898",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(181,152,152,.90), rgba(181,152,152,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOfDOxIZwD6vTH5Mx2Bi6aBiGi_KtX-ft2k5zZL=w408-h679-k-no",
        countryFlagPhoto: "https://st.depositphotos.com/1588500/2561/i/450/depositphotos_25615859-stock-photo-flag-of-japan.jpg"
      },
      {
        index: 25,
        countryName: "Singapore",
        cityName: "Singapore",
        countryFlag: "sg",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNOe1SSy37mfb8qiDLaJTOcn47XhrZZlNRFZ4Q6=w408-h272-k-no",
        countryFlagPhoto: "https://www.motosha.com/files/preview/1280x711/2162-singapore-flag.jpg"
      },
      {
        index: 26,
        countryName: "South Korea",
        cityName: "Seoul",
        countryFlag: "kr",
        countryColor: "#737373",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(115,115,115,.90), rgba(115,115,115,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPvc9Qm-q3zaHrxROf0P3kYD9cbOWhD5puciWie=w408-h508-k-no",
        countryFlagPhoto: "https://c4.wallpaperflare.com/wallpaper/843/422/452/south-korea-flag-asian-korean-wallpaper-preview.jpg"
      },
      {
        index: 26,
        countryName: "South Korea",
        cityName: "JeJu",
        countryFlag: "kr",
        countryColor: "#737373",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(115,115,115,.90), rgba(115,115,115,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMSQfxOpl2UBicUmMPyFTEzwu0Kdjs5bw57Yy9_=w491-h240-k-no",
        countryFlagPhoto: "https://c4.wallpaperflare.com/wallpaper/843/422/452/south-korea-flag-asian-korean-wallpaper-preview.jpg"
      },
      {
        index: 27,
        countryName: "Hong Kong SAR",
        cityName: "Hong Kong",
        countryFlag: "hk",
        countryColor: "#FF3535",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPseX_3OQS-rr-VVOtYOkiN57tBwewkcZExZKZt=w654-h240-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/916628954/vector/hong-kong-flag-background.jpg?s=612x612&w=0&k=20&c=q4xn1zTBvmZHoufVbqiJtRIyypKAKra8RT9ACASQrGg="
      },
      {
        index: 27,
        countryName: "Macau SAR",
        cityName: "Macau",
        countryFlag: "mo",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipM-06Rc1yusB5CojlzhDz7jnxV5ARHq-PRgQX75=w408-h269-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/1421347731/vector/waving-macau-flag-in-beautiful-3d-illustration.jpg?s=612x612&w=0&k=20&c=GPAqskNXPC5qg1LqEGt3aXLMzWByVTcvOPc1NPZMJmA="
      },
      {
        index: 28,
        countryName: "Ireland",
        cityName: "Cliff of Moher",
        countryFlag: "ie",
        countryColor: "#019A4A",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(1,154,74,.90), rgba(1,154,74,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOJKCx5-eV_EaZeo7DWIp5Y4DqWHc9LX0DzEI5O=w408-h306-k-no",
        countryFlagPhoto: "https://img.freepik.com/premium-photo/flag-ireland-3d-illustration-irish-flag-waving_2227-1789.jpg",
      },
      {
        index: 29,
        countryName: "Malaysia",
        cityName: "Kuala Lumpur",
        countryFlag: "my",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPDSQHvG3jmv9YIOhzzdXGdgC-aXZqC_gtBUckP=w408-h272-k-no",
        countryFlagPhoto: "https://st2.depositphotos.com/3905143/5949/i/450/depositphotos_59497371-stock-photo-malaysia-waving-flag.jpg"
      },
      {
        index: 30,
        countryName: "Malaysia",
        cityName: "George Town",
        countryFlag: "my",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNXfaW4fFD_pLoEZAffbUUtXDAP1XkUSAgXoA20=w506-h240-k-no",
        countryFlagPhoto: "https://st2.depositphotos.com/3905143/5949/i/450/depositphotos_59497371-stock-photo-malaysia-waving-flag.jpg"
      },
      {
        index: 31,
        countryName: "Philippine",
        cityName: "Manila",
        countryFlag: "ph",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipPzlWJaKAuF72aAHKKkZTHF66O7BbuFA02h2AFQ=w408-h544-k-no",
        countryFlagPhoto: "https://img.freepik.com/free-photo/view-philippine-flag_23-2150319712.jpg"
      },
      {
        index: 32,
        countryName: "Belgium",
        cityName: "Brussels",
        countryFlag: "be",
        countryColor: "#D7B400",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOH9BKmdNaIUGedt0r3ivNT-wkGk1nRikHsQqg=w408-h243-k-no",
        countryFlagPhoto: "https://i.pinimg.com/736x/0e/9d/91/0e9d9121df8671469a28322c330d0654.jpg"
      },
      {
        index: 33,
        countryName: "Portugal",
        cityName: "Lisbon",
        countryFlag: "pt",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNPJSyPRk-i6wRJQ3IJwjCxE2qdbGXCFpkXQ_LR=w408-h305-k-no",
        countryFlagPhoto: "https://i.pinimg.com/1200x/4e/03/d1/4e03d131fac0472c01b387c18d91d8c7.jpg"
      },
      {
        index: 34,
        countryName: "Poland",
        cityName: "Warsaw",
        countryFlag: "pl",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNMm-3_ieTiEzzIy4IC1Eu9ljXY-Ujl-8SHkhWb=w408-h275-k-no",
        countryFlagPhoto: "https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/4403/5320/polandsleeve__83449.1619532074.jpg?c=2"
      },
      {
        index: 35,
        countryName: "Morocco",
        cityName: "Casablanca",
        countryFlag: "ma",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://www.vivamorocco.com/wp-content/uploads/2017/11/Casablanca-morocco.jpg",
        countryFlagPhoto: "https://c4.wallpaperflare.com/wallpaper/128/752/1006/flag-marocco-morocco-wallpaper-preview.jpg"
      },
      {
        index: 36,
        countryName: "Italy",
        cityName: "Venice",
        countryFlag: "it",
        countryColor: "#038700",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(3,135,0,.90), rgba(3,135,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w408-h255-k-no",
        countryFlagPhoto: "https://www.worldatlas.com/r/w1200/upload/20/07/2a/shutterstock-152854481.jpg"
      },
      {
        index: 37,
        countryName: "Hungary",
        cityName: "Budapest",
        countryFlag: "hu",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipP3MmrJdtgWH8GIDsPY_6mjeS8rBHpieDzl3FZe=w408-h303-k-no",
        countryFlagPhoto: "https://t3.ftcdn.net/jpg/00/42/10/00/360_F_42100082_wglCyVDzgDhouPIg1CRHOCizU11Dx5Dk.jpg"
      },
      {
        index: 38,
        countryName: "France",
        cityName: "Mont Saint-Michel",
        countryFlag: "fr",
        countryColor: "#0236BC",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(2,54,188,.90), rgba(2,54,188,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipO4lFEW2pnnmB7MQsAzsq8x6qVSwvNnBhbFagDU=w408-h544-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/510973709/photo/close-up-of-the-flag-of-france.webp?b=1&s=170667a&w=0&k=20&c=_DE_rAM3tKwHPoKI9PQFIkoV8vkuVR6SQYvucZwZa94="
      },
      {
        index: 39,
        countryName: "Iceland",
        cityName: "Hvannadalshnukur",
        countryFlag: "is",
        countryColor: "#234090",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(35,64,144,.90), rgba(35,64,144,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipM_mZGBAoWqsbGJ0R9p5GQNGqYXuauzP9vHjAdO=w408-h272-k-no",
        countryFlagPhoto: "https://www.iamreykjavik.com/wp-content/uploads/2018/08/iceland-flag-meaning-history-symbolism-e1535617406754-1280x720.jpg"
      },
    ],
    loadCities: true,
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
    backToHome() {
      this.$router.push('/')
    },
    pushToZongce() {
      this.$router.push('/zongce')
    },
    pushToHuping() {
      this.$router.push('/huping')
    }
  }
}
</script>
<style>
.flip-card-wrap {
  display: flex;
  width: 100%;
  height: 425px;
  perspective: 800px;
  box-sizing: border-box;
}

.flip-card {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 1s ease;
  transform-style: preserve-3d;
}

.flip-side {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.flip-side-front {
  backface-visibility: hidden;
}

.flip-side-back {
  backface-visibility: hidden;
  transform: rotateY(180deg);
  /*transform-origin: 50%;*/
  box-sizing: border-box;
}

.flip-card-wrap:active .flip-card {
  transform: rotateY(180deg);
  /*transform-origin: 0%;*/
}
</style>
