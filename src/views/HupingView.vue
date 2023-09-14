<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-btn icon="mdi-home" @click="backToHome">
      </v-btn>
      <v-app-bar-title>同学互评统计</v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="bg-grey-lighten-3">
      <!--      <v-container>-->
      <v-row class="my-2 mx-2">
        <v-col cols="12" md="4">
          <!--            <v-sheet rounded="lg" min-height="70vh" width="300">-->
          <!--            <v-img src="../assets/example.png" height="70vh"></v-img>-->
          <img src="../assets/example.png" style="height: 75vh; width: 30vw">
          <!--            </v-sheet>-->
        </v-col>
        <v-col cols="12" md="4">
          <v-sheet min-height="70vh" rounded="lg">
            <h2 class="mx-4 py-2">快速计算班级综测互评分</h2>
            <p class="mx-4 py-2">
              请参照左侧实例进行编辑：创建你班级人数量的sheet，然后将每个人的excel表格合并到一个文件内分多个sheet提交
            </p>
            <v-form>
              <v-slider class="py-0" v-model="classPopulation" label="请输入班级人数：即sheet表数"
                        :min="1" :max="100" :step="1" thumb-label></v-slider>
              <v-slider class="py-0" v-model="firstclassmateIndexRow" label="第一个同学的序号所在的行号"
                        :min="0" :max="30" :step="1" thumb-label></v-slider>
              <v-text-field class="py-0" v-model="firstclassmateIndexCol" placeholder="A"
                            label="第一个同学的序号所在的列号"></v-text-field>
              <v-slider class="py-0" v-model="firstclassmateNameRow" label="第一个同学的姓名所在的行号"
                        :min="0" :max="30" :step="1" thumb-label></v-slider>
              <v-text-field class="py-0" v-model="firstclassmateNameCol" placeholder="B"
                            label="第一个同学的姓名所在的列号"></v-text-field>
              <v-slider class="py-0" v-model="firstclassmateScoreRow" label="第一个同学的评分所在的行号"
                        :min="0" :max="30" :step="1" thumb-label></v-slider>
              <v-text-field class="py-0" v-model="firstclassmateScoreCol" placeholder="F"
                            label="第一个同学的评分所在的列号"></v-text-field>
              <v-row>
                <v-col cols="12" md="4">
                  <v-checkbox v-model="exclude_up" label="去除个人评分最大值" value="true"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4">
                  <v-checkbox v-model="exclude_dn" label="忽略个人自评" value="true"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4">
                  <v-checkbox v-model="self_miss" label="去除个人评分最小值" value="true"></v-checkbox>
                </v-col>
              </v-row>
              <v-btn block class="mt-2" @click="saveTemporaryData">保存</v-btn>
              <v-file-input :disabled="fileUploadDisabled" accept=".xls, .xlsx, .csv" label="上传互评文件(1个)" class="my-2"></v-file-input>
            </v-form>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="4">
          <v-sheet rounded="lg" min-height="70vh">
            <h2 class="mx-4 py-2">结果槽</h2>
            <p class="mx-4 py-2">

            </p>
          </v-sheet>
        </v-col>
      </v-row>
      <!--      </v-container>-->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "HupingView",
  data: () => {
    return {
      classPopulation: 30,
      firstclassmateIndexRow: 5,
      firstclassmateIndexCol: "A",
      firstclassmateNameRow: 5,
      firstclassmateNameCol: "B",
      firstclassmateScoreRow: 5,
      firstclassmateScoreCol: "F",
      exclude_up: false,
      exclude_dn: false,
      self_miss: false,
      isSaved: false,
      fileUploadDisabled: true,
    }
  },
  methods: {
    backToHome() {
      this.$router.push('/')
    },
    saveTemporaryData() {
      this.isSaved = true
      this.fileUploadDisabled = false
    }
  }
}
</script>

<style scoped>

</style>
