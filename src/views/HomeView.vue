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
                            v-bind="props" :elevation="isHovering ? 12 : 2">
                      <v-img height="425" max-height="425" :src="card.countryPhoto" cover class="text-white"
                             :gradient="card.backgroundGradient">
                        <v-card-item class="d-flex justify-center" style="height: 40%">
                          <h2 class="my-2" style="text-align: center; font-size: 26px">{{ card.cityOriginalName }}</h2>
                          <h3 class="my-2" style="text-align: center">{{ card.countryOriginalName }}</h3>
                        </v-card-item>
                        <v-card-item style="height: 30%"></v-card-item>
                        <v-card-item style="height: 30%" class="d-flex justify-center">
                          <v-icon
                              style="justify-self: center; text-align: center; border-radius: 0.5px; box-shadow: 0px 4px 4px 0px rgba(0, 1, 1, 0.2);"
                              :class="`fi fi-`+ card.countryFlag" class="my-2 mx-2">
                          </v-icon>
                        </v-card-item>
                      </v-img>
                    </v-card>
                  </div>
                  <!--side back-->
                  <div class="flip-side flip-side-back">
                    <v-card height="425" max-height="425" max-width="300"
                            v-bind="props" :elevation="isHovering ? 12 : 2">
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
        countryOriginalName: "Éire",
        cityName: "Dublin",
        cityOriginalName: "Baile Átha Cliath",
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
        countryOriginalName: "Éire",
        cityName: "Galway",
        cityOriginalName: "Gaillimh",
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
        countryOriginalName: "Éire",
        cityName: "Downpatrick Head",
        cityOriginalName: "Downpatrick Head",
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
        countryOriginalName: "United Kingdom",
        cityName: "Edinburgh",
        cityOriginalName: "Edinburgh",
        countryFlag: "gb",
        countryColor: "#01079A",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(1,7,154,.90), rgba(1,7,154,.90)",
        countryPhoto: "https://media.cntraveller.com/photos/611be9e3d5b6f5a4a3def392/16:9/w_2560%2Cc_limit/Mountain-view-over-city-Edinburgh-scotland-conde-nast-traveller-28july17-iStock.jpg",
        countryFlagPhoto: "https://getwallpapers.com/wallpaper/full/3/0/7/1042837-popular-united-kingdom-flag-wallpaper-1920x1080.jpg"
      },
      {
        index: 5,
        countryName: "United Kingdom",
        countryOriginalName: "United Kingdom",
        cityName: "London",
        cityOriginalName: "London",
        countryFlag: "gb",
        countryColor: "#01079A",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(1,7,154,.90), rgba(1,7,154,.90)",
        countryPhoto: "https://i2-prod.mirror.co.uk/incoming/article28701443.ece/ALTERNATES/s1200b/0_Tower-Bridge-in-London-England-United-Kingdomjp.jpg",
        countryFlagPhoto: "https://getwallpapers.com/wallpaper/full/3/0/7/1042837-popular-united-kingdom-flag-wallpaper-1920x1080.jpg"
      },
      {
        index: 6,
        countryName: "France",
        countryOriginalName: "France",
        cityName: "Paris",
        cityOriginalName: "Paris",
        countryFlag: "fr",
        countryColor: "#0236BC",
        isVisited: false,
        backgroundGradient: "154deg, rgba(2, 54, 188, 0.90) 0%, rgba(237, 41, 57, 0.90) 100%",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOTdWRhZoy5lJGdxy_ir-mQsy6N3O6CYLaOj0vC=w408-h544-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/510973709/photo/close-up-of-the-flag-of-france.webp?b=1&s=170667a&w=0&k=20&c=_DE_rAM3tKwHPoKI9PQFIkoV8vkuVR6SQYvucZwZa94="
      },
      {
        index: 7,
        countryName: "France",
        countryOriginalName: "France",
        cityName: "Nice",
        cityOriginalName: "Nice",
        countryFlag: "fr",
        countryColor: "#0236BC",
        isVisited: false,
        backgroundGradient: "154deg, rgba(2, 54, 188, 0.90) 0%, rgba(237, 41, 57, 0.90) 100%",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMY8OnFsq4dTy2MwpTlt2kDwDTwS55-YhJugvk=w408-h462-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/510973709/photo/close-up-of-the-flag-of-france.webp?b=1&s=170667a&w=0&k=20&c=_DE_rAM3tKwHPoKI9PQFIkoV8vkuVR6SQYvucZwZa94="
      },
      {
        index: 8,
        countryName: "Spain",
        countryOriginalName: "España",
        cityName: "Madrid",
        cityOriginalName: "Madrid",
        countryFlag: "es",
        countryColor: "#E1A200",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(225,162,0,.90), rgba(225,162,0,.90)",
        countryPhoto: "https://media.cntraveller.com/photos/611be916628f4910ed101d18/16:9/w_2992,h_1683,c_limit/parque-del-buen-retiro-gettyimages-873841648.jpg",
        countryFlagPhoto: "https://png.pngtree.com/background/20210715/original/pngtree-wavy-spain-flag-background-picture-image_1316536.jpg"
      },
      {
        index: 9,
        countryName: "Spain",
        countryOriginalName: "España",
        cityName: "Valencia",
        cityOriginalName: "Valencia",
        countryFlag: "es",
        countryColor: "#E1A200",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(225,162,0,.90), rgba(225,162,0,.90)",
        countryPhoto: "https://hips.hearstapps.com/hmg-prod/images/the-city-of-arts-and-sciences-valencia-spai-1651683436.jpg",
        countryFlagPhoto: "https://png.pngtree.com/background/20210715/original/pngtree-wavy-spain-flag-background-picture-image_1316536.jpg"
      },
      {
        index: 10,
        countryName: "Netherlands",
        countryOriginalName: "Nederland",
        cityName: "Amsterdam",
        cityOriginalName: "Amsterdam",
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
        countryOriginalName: "Luxembourg",
        cityName: "Luxembourg",
        cityOriginalName: "Luxembourg",
        countryFlag: "lu",
        countryColor: "#00A5E5",
        isVisited: false,
        backgroundGradient: "154deg, rgba(237, 26, 59, 0.90) 0%, rgba(237, 26, 59, 0.90) 20.83%, rgba(0, 166, 231, 0.90) 80.73%, rgba(0, 166, 231, 0.90) 100%",
        countryPhoto: "https://static.wixstatic.com/media/167538_977edcbf76574f319032610b56191d89~mv2.png/v1/fill/w_940,h_788,al_c,q_90/167538_977edcbf76574f319032610b56191d89~mv2.png",
        countryFlagPhoto: "https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/3013/5531/Luxemburg__80447.1647332205.jpg?c=2"
      },
      {
        index: 12,
        countryName: "Switzerland",
        countryOriginalName: "Schweiz",
        cityName: "Zurich",
        cityOriginalName: "Zürich",
        countryFlag: "ch",
        countryColor: "#E31D1D",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(227,29,29,.90), rgba(227,29,29,.90)",
        countryPhoto: "https://www.ab-in-den-urlaub.de/magazin/wp-content/uploads/2019/09/1568894625_Stadtblick-Fraum%C3%BCnster.jpg",
        countryFlagPhoto: "https://rare-gallery.com/uploads/posts/728640-Switzerland-Flag-Cross.jpg"
      },
      {
        index: 12,
        countryName: "Switzerland",
        countryOriginalName: "Schweiz",
        cityName: "Bern",
        cityOriginalName: "Bern",
        countryFlag: "ch",
        countryColor: "#E31D1D",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(227,29,29,.90), rgba(227,29,29,.90)",
        countryPhoto: "https://www.railbookers.ca/sites/railbookers/files/styles/hero/public/media/images/shutterstock_1438073690.jpg?h=82f92a78&itok=4jjanHvF",
        countryFlagPhoto: "https://rare-gallery.com/uploads/posts/728640-Switzerland-Flag-Cross.jpg"
      },
      {
        index: 13,
        countryName: "Liechtenstein",
        countryOriginalName: "Liechtenstein",
        cityName: "Vaduz",
        cityOriginalName: "Vaduz",
        countryFlag: "li",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(0,43,127,.90), rgba(0,43,127,.90)",
        countryPhoto: "https://www.bodensee.eu/regionen-staedte/liechtenstein/2022/image-thumb__9709__lightbox/252284_vaduzerbilder_2019--113-_web.jpeg",
        countryFlagPhoto: "https://www.wagrati.eu/media/images/flagge-liechtenstein-1400x840.jpg"
      },
      {
        index: 14,
        countryName: "Italy",
        countryOriginalName: "Italy",
        cityName: "Milan",
        cityOriginalName: "Milan",
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
        countryOriginalName: "Italy",
        cityName: "Florence",
        cityOriginalName: "Florence",
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
        countryOriginalName: "Italy",
        cityName: "Rome",
        cityOriginalName: "Roma",
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
        countryOriginalName: "Österreich",
        cityName: "Vienna",
        cityOriginalName: "Wien",
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
        countryOriginalName: "Deutschland",
        cityName: "Frankfurt",
        cityOriginalName: "Frankfurt",
        countryFlag: "de",
        countryColor: "#270000",
        isVisited: false,
        backgroundGradient: "154deg, rgba(39, 0, 0, 0.90) 25%, rgba(221, 0, 0, 0.90) 62.5%, rgba(255, 206, 0, 0.90) 100%",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipO-zwhm1jx4VBJMKCgtBvngNSAGC9JKhSjwQkV8=w408-h321-k-no",
        countryFlagPhoto: "https://t3.ftcdn.net/jpg/01/11/68/26/360_F_111682656_g63NR8Z16g8H8boPR3LK6J4VEbSv9oXg.jpg"
      },
      {
        index: 18,
        countryName: "Germany",
        countryOriginalName: "Deutschland",
        cityName: "Munich",
        cityOriginalName: "München",
        countryFlag: "de",
        countryColor: "#270000",
        isVisited: false,
        backgroundGradient: "154deg, rgba(39, 0, 0, 0.90) 25%, rgba(221, 0, 0, 0.90) 62.5%, rgba(255, 206, 0, 0.90) 100%",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipOYVBGDvrCQ5SLWQSMb8YaJnJcAlj6ZZc0bvkfN=w408-h272-k-no",
        countryFlagPhoto: "https://t3.ftcdn.net/jpg/01/11/68/26/360_F_111682656_g63NR8Z16g8H8boPR3LK6J4VEbSv9oXg.jpg"
      },
      {
        index: 19,
        countryName: "Germany",
        countryOriginalName: "Deutschland",
        cityName: "Berlin",
        cityOriginalName: "Berlin",
        countryFlag: "de",
        countryColor: "#270000",
        isVisited: false,
        backgroundGradient: "154deg, rgba(39, 0, 0, 0.90) 25%, rgba(221, 0, 0, 0.90) 62.5%, rgba(255, 206, 0, 0.90) 100%",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipMsEmR6jfTcoAqgqo5fZqX0s1sJgmXFXkr9Vocw=w408-h272-k-no",
        countryFlagPhoto: "https://t3.ftcdn.net/jpg/01/11/68/26/360_F_111682656_g63NR8Z16g8H8boPR3LK6J4VEbSv9oXg.jpg"
      },
      {
        index: 20,
        countryName: "Czechia",
        countryOriginalName: "Česko",
        cityName: "Prague",
        cityOriginalName: "Praha",
        countryFlag: "cz",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(17, 69, 126,.90), rgba(17, 69, 126,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNBzXLJmNJRs6OpKQpgc2kY7yM_0oyLT2szrgs=w408-h544-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/1218009965/photo/flag-of-czech-republic-blowing-in-the-wind.jpg?s=612x612&w=0&k=20&c=IGfLgDCIPk8ZbALgON3uSr6QcYZJ1gzxTA4xSR7XgsE="
      },
      {
        index: 21,
        countryName: "Denmark",
        countryOriginalName: "Denmark",
        cityName: "Copenhagen",
        cityOriginalName: "København",
        countryFlag: "dk",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(200,16,46,.90), rgba(200,16,46,.90)",
        countryPhoto: "https://bilder.apollo.no/kobenhavn-1592404966-504984-ImageGalleryX2.jpg",
        countryFlagPhoto: "https://a-z-animals.com/media/2022/11/flag-of-denmark-blowing-in-the-wind.jpg_s1024x1024wisk20c0DPsTA3CmJAKJpP_Nf6O87msLuW1drgrAW5cWSvDQJ8-1024x614.jpg"
      },
      {
        index: 21,
        countryName: "Finland",
        countryOriginalName: "Suomi",
        cityName: "Helsinki",
        cityOriginalName: "Helsinki",
        countryFlag: "fi",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(0, 47, 108,.90), rgba(0, 47, 108,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNOuY0PBLRJoBe5rm5Tzv_zG-SwCxng7QArtdvd=w408-h272-k-no",
        countryFlagPhoto: "https://www.wagrati.eu/media/images/flagge-finnland-1400x855.jpg"
      },
      {
        index: 22,
        countryName: "Greece",
        countryOriginalName: "Ελλάδα",
        cityName: "Athens",
        cityOriginalName: "Αθήνα",
        countryFlag: "gr",
        countryColor: "#026EBC",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(2,110,188,.90), rgba(2,110,188,.90)",
        countryPhoto: "https://thekit.ca/wp-content/uploads/2022/09/2022-greece-thekit.ca-fb.jpg",
        countryFlagPhoto: "https://img.freepik.com/premium-photo/blue-white-national-flag-greece_526955-261.jpg"
      },
      {
        index: 23,
        countryName: "Turkey",
        countryOriginalName: "Türkiye",
        cityName: "Istanbul",
        cityOriginalName: "İstanbul",
        countryFlag: "tr",
        countryColor: "#9A0101",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(154,1,1,.90), rgba(154,1,1,.90)",
        countryPhoto: "https://www.tooistanbul.com/wp-content/uploads/2020/06/hagia-sophia.jpg",
        countryFlagPhoto: "https://archive.org/download/TurkeyFlag/TurkeyFlag.jpg"
      },
      {
        index: 24,
        countryName: "Japan",
        countryOriginalName: "日本",
        cityName: "Tokyo",
        cityOriginalName: "東京",
        countryFlag: "jp",
        countryColor: "#B59898",
        isVisited: false,
        backgroundGradient: "154deg, rgba(188, 0, 45, 0.90) 0%, rgba(181, 152, 152, 0.90) 100%",
        countryPhoto: "https://skyticket.com/guide/wp-content/uploads/2019/07/shutterstock_790426882.jpg",
        countryFlagPhoto: "https://st.depositphotos.com/1588500/2561/i/450/depositphotos_25615859-stock-photo-flag-of-japan.jpg"
      },
      {
        index: 25,
        countryName: "Singapore",
        countryOriginalName: "Singapore",
        cityName: "Singapore",
        cityOriginalName: "Singapore",
        countryFlag: "sg",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(223,0,0,.90), rgba(223,0,0,.90)",
        countryPhoto: "https://img.delicious.com.au/Ci1eTz5D/w759-h506-cfill/del/2022/06/singapore-food-lovers-guide-best-places-to-stay-eat-and-drink-169950-2.jpg",
        countryFlagPhoto: "https://www.motosha.com/files/preview/1280x711/2162-singapore-flag.jpg"
      },
      {
        index: 26,
        countryName: "South Korea",
        countryOriginalName: "대한민국",
        cityName: "Seoul",
        cityOriginalName: "서울특별시",
        countryFlag: "kr",
        countryColor: "#737373",
        isVisited: false,
        backgroundGradient: "154deg, rgba(54, 65, 136, 0.90) 40%, rgba(208, 208, 208, 0.90) 100%",
        countryPhoto: "https://www.lw.com/dfsmedia/1281ba27c7364299935b6ca4e198a70d/67594-50128/seoul-office-detail",
        countryFlagPhoto: "https://c4.wallpaperflare.com/wallpaper/843/422/452/south-korea-flag-asian-korean-wallpaper-preview.jpg"
      },
      {
        index: 26,
        countryName: "South Korea",
        countryOriginalName: "대한민국",
        cityName: "JeJu",
        cityOriginalName: "제주특별자치도",
        countryFlag: "kr",
        countryColor: "#737373",
        isVisited: false,
        backgroundGradient: "154deg, rgba(54, 65, 136, 0.90) 40%, rgba(208, 208, 208, 0.90) 100%",
        countryPhoto: "https://www.wapititravel.com/blog/wp-content/uploads/2022/12/jeongbang_waterfall_jeju_south_korea.jpeg",
        countryFlagPhoto: "https://c4.wallpaperflare.com/wallpaper/843/422/452/south-korea-flag-asian-korean-wallpaper-preview.jpg"
      },
      {
        index: 27,
        countryName: "Hong Kong SAR",
        countryOriginalName: "香港特別行政區",
        cityName: "Wan Chai",
        cityOriginalName: "灣仔",
        countryFlag: "hk",
        countryColor: "#FF3535",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(255,53,53,.90), rgba(255,53,53,.90)",
        countryPhoto: "https://ticketbox.my.id/wp-content/uploads/2023/08/Hong-Kong-Travel-Destinations.jpg",
        countryFlagPhoto: "https://media.istockphoto.com/id/916628954/vector/hong-kong-flag-background.jpg?s=612x612&w=0&k=20&c=q4xn1zTBvmZHoufVbqiJtRIyypKAKra8RT9ACASQrGg="
      },
      {
        index: 27,
        countryName: "Macau SAR",
        countryOriginalName: "澳門特別行政區",
        cityName: "Ruins of St. Paul's",
        cityOriginalName: "大三巴牌坊",
        countryFlag: "mo",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(0,120,94,.90), rgba(0,120,94,.90)",
        countryPhoto: "https://news.cgtn.com/news/3567444e7951444f3149544d32456a4e35557a4e31457a6333566d54/img/8fa61fa0970b49e680b8753f246e87e8/8fa61fa0970b49e680b8753f246e87e8.jpg",
        countryFlagPhoto: "https://media.istockphoto.com/id/1421347731/vector/waving-macau-flag-in-beautiful-3d-illustration.jpg?s=612x612&w=0&k=20&c=GPAqskNXPC5qg1LqEGt3aXLMzWByVTcvOPc1NPZMJmA="
      },
      {
        index: 28,
        countryName: "Ireland",
        countryOriginalName: "Éire",
        cityName: "Cliff of Moher",
        cityOriginalName: "Aillte an Mhothairr",
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
        countryOriginalName: "Malaysia",
        cityName: "Kuala Lumpur",
        cityOriginalName: "Kuala Lumpur",
        countryFlag: "my",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(235,184,0,.90), rgba(235,184,0,.90)",
        countryPhoto: "https://a.cdn-hotels.com/gdcs/production150/d1027/53d84813-85cf-49fb-bc55-4d708c32933e.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        countryFlagPhoto: "https://st2.depositphotos.com/3905143/5949/i/450/depositphotos_59497371-stock-photo-malaysia-waving-flag.jpg"
      },
      {
        index: 30,
        countryName: "Malaysia",
        countryOriginalName: "Malaysia",
        cityName: "George Town",
        cityOriginalName: "George Town",
        countryFlag: "my",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(235,184,0,.90), rgba(235,184,0,.90)",
        countryPhoto: "https://www.tripsavvy.com/thmb/DnTMIADvI4AZwsnKZhaAyuo9wok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penang-malaysia-b40c38589e794a61ba904d64c0a02c43.jpg",
        countryFlagPhoto: "https://st2.depositphotos.com/3905143/5949/i/450/depositphotos_59497371-stock-photo-malaysia-waving-flag.jpg"
      },
      {
        index: 31,
        countryName: "Philippine",
        countryOriginalName: "Pilipinas",
        cityName: "Manila",
        cityOriginalName: "Manila",
        countryFlag: "ph",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(0,56,168,.90), rgba(0,56,168,.90)",
        countryPhoto: "https://content.r9cdn.net/rimg/dimg/3f/25/1f5a7b8e-city-29645-176cf1dd5ad.jpg?crop=true&width=1020&height=498",
        countryFlagPhoto: "https://img.freepik.com/free-photo/view-philippine-flag_23-2150319712.jpg"
      },
      {
        index: 32,
        countryName: "Belgium",
        countryOriginalName: "Belgium",
        cityName: "Brussels",
        cityOriginalName: "Bruxelles",
        countryFlag: "be",
        countryColor: "#D7B400",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(215,177,2,.90), rgba(215,177,12,.90)",
        countryPhoto: "https://history.icaci.org/wp-content/uploads/2023/04/Africamuseum-outside.jpeg",
        countryFlagPhoto: "https://i.pinimg.com/736x/0e/9d/91/0e9d9121df8671469a28322c330d0654.jpg"
      },
      {
        index: 33,
        countryName: "Portugal",
        countryOriginalName: "Portugal",
        cityName: "Lisbon",
        cityOriginalName: "Lisbon",
        countryFlag: "pt",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(0,102,0,.90), rgba(0,102,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipNPJSyPRk-i6wRJQ3IJwjCxE2qdbGXCFpkXQ_LR=w408-h305-k-no",
        countryFlagPhoto: "https://i.pinimg.com/1200x/4e/03/d1/4e03d131fac0472c01b387c18d91d8c7.jpg"
      },
      {
        index: 34,
        countryName: "Poland",
        countryOriginalName: "Polska",
        cityName: "Warsaw",
        cityOriginalName: "Warszawa",
        countryFlag: "pl",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(220,20,60,.90), rgba(220,20,60,.90)",
        countryPhoto: "https://a.cdn-hotels.com/gdcs/production174/d1938/a563a469-4020-4110-97f6-c5c5618c2321.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        countryFlagPhoto: "https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/4403/5320/polandsleeve__83449.1619532074.jpg?c=2"
      },
      {
        index: 35,
        countryName: "Morocco",
        countryOriginalName: "المغرب",
        cityName: "Casablanca",
        cityOriginalName: "الدار البيضاء",
        countryFlag: "ma",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(193,39,45,.90), rgba(193,39,45,.90)",
        countryPhoto: "https://www.vivamorocco.com/wp-content/uploads/2017/11/Casablanca-morocco.jpg",
        countryFlagPhoto: "https://c4.wallpaperflare.com/wallpaper/128/752/1006/flag-marocco-morocco-wallpaper-preview.jpg"
      },
      {
        index: 36,
        countryName: "Italy",
        countryOriginalName: "Italy",
        cityName: "Venice",
        cityOriginalName: "Venezia",
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
        countryOriginalName: "Magyarország",
        cityName: "Budapest",
        cityOriginalName: "Budapest",
        countryFlag: "hu",
        countryColor: "",
        isVisited: false,
        backgroundGradient: "to bottom, rgba(56,141,0,.90), rgba(56,141,0,.90)",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipP3MmrJdtgWH8GIDsPY_6mjeS8rBHpieDzl3FZe=w408-h303-k-no",
        countryFlagPhoto: "https://t3.ftcdn.net/jpg/00/42/10/00/360_F_42100082_wglCyVDzgDhouPIg1CRHOCizU11Dx5Dk.jpg"
      },
      {
        index: 38,
        countryName: "France",
        countryOriginalName: "France",
        cityName: "Mont Saint-Michel",
        cityOriginalName: "Le Mont-Saint-Michel",
        countryFlag: "fr",
        countryColor: "#0236BC",
        isVisited: false,
        backgroundGradient: "154deg, rgba(2, 54, 188, 0.90) 0%, rgba(237, 41, 57, 0.90) 100%",
        countryPhoto: "https://lh5.googleusercontent.com/p/AF1QipO4lFEW2pnnmB7MQsAzsq8x6qVSwvNnBhbFagDU=w408-h544-k-no",
        countryFlagPhoto: "https://media.istockphoto.com/id/510973709/photo/close-up-of-the-flag-of-france.webp?b=1&s=170667a&w=0&k=20&c=_DE_rAM3tKwHPoKI9PQFIkoV8vkuVR6SQYvucZwZa94="
      },
      {
        index: 39,
        countryName: "Iceland",
        countryOriginalName: "Ísland",
        cityName: "Reykjavik",
        cityOriginalName: "Reykjavík",
        countryFlag: "is",
        countryColor: "#234090",
        isVisited: false,
        backgroundGradient: "154deg, rgba(35, 64, 144, 0.90) 0%, rgba(35, 64, 144, 0.90) 35.94%, rgba(252, 94, 92, 0.90) 100%",
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
* {
  font-family: Ubuntu;
}

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
