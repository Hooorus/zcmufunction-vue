<template>
  <v-app id="inspire">
    <!--    navbar-->
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>ZCMU Function</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>
    <!--    content-->
    <v-main>
      <v-container>
        <v-row>
          <!--          综测统计-->
          <v-col cols="4">
            <v-card height="425" max-height="425" title="综测得分统计入口"
                    subtitle="根据Excel表格统计学生群体的个人综测得分">
              <v-img height="300" max-height="300"
                     src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                     cover class="text-white">
              </v-img>
              <v-card-actions>
                <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
                  统计学生综测得分
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!--          同学互评统计-->
          <v-col cols="4">
            <v-card height="425" max-height="425" title="同学互评统计入口"
                    subtitle="根据Excel表格统计综测内学生群体的同学互评得分">
              <v-img height="300" max-height="300"
                     src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                     cover class="text-white">
              </v-img>
              <v-card-actions>
                <v-btn variant="text" color="purple-lighten-2" @click="reveal = true">
                  统计同学互评得分
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4" v-for="n in 7" :key="n">
            <v-card height="425" max-height="425" title="暂未开发"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from "@/components/Footer.vue";

export default {
  name: 'HomeView',
  components: {
    Footer,
    HelloWorld
  }
}
</script>
