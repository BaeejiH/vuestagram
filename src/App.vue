<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step ==1" @click="step++">Next</li>
      <li v-if="step ==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/WW.jpg" class="logo" />
  </div>

  <ContainerBox :인스타데이터="인스타데이터" :step="step"
  :전송한이미지="전송한이미지" @writetext="작성한글=$event"/>
 
<!-- 
이미지 업로드한 것을 HTML에 보여주려면 
1. FileReader()
2.url.createObjecturl() -->
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 <!-- <div v-if="tap == 0">내용1</div>
 <div v-if="tap == 1">내용2</div>
 <div v-if="tap == 2">내용3</div>
<button @click="tap = 0">버튼0</button>
<button @click="tap = 1">버튼1</button>
<button @click="tap = 2">버튼2</button> -->

<!-- 
vuex 
원래는 데이터를 변경하면 안됨
1. 미리 store.js에 수정방법을 정의해두고
2. 그 방법을 컴포넌트에서 소환해서 수정해야함
-->
<h4>안녕 {{$store.state.age}}</h4>
<button @click="$store.commit('나이증가',10000000000000000000)">버튼</button>
<!-- mutations를 부탁하는 함수 comit -->
<p>{{$store.state.more}}</p>
 <button @click="$store.dispatch('getData')">더보기</button>
 <!-- actions를 부탁하는 함수 dispatch -->

 <p>{{now1}} {{카운터}}</p>
 <button @click="카운터++">버트은</button>

 <p>{{name}} {{age}}</p>

</template>

<script>
// Ajax
// get요청 : url 하나로 요청하는 것을 get요청(데이터 서버에서 가져올 때)
// post요청 : 서버로 데이터를 보낼 때
// get/post 요청하면 브라우저가 새로고침됨
// 그러나 Ajax를 쓴다면 새로고침 없이도 get/post 요청 가능
// Ajax요청 방법 1.axios 2.fetch
import ContainerBox from './components/ContainerBox.vue'
import postdata from './assets/postdata.js'
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'App',
  data(){
    return{
    카운터 : 0,
     작성한글 : '',
     인스타데이터 : postdata,
     더보기횟수 : 0,
     tap : 0,
     step : 3,
     전송한이미지 : [],
     선택한필터 : '',
    }
  },
  components: {
    ContainerBox:ContainerBox
  },
  computed: {
    now1(){ // 계산결과용 저장 함수
      return new Date() // computed 함수는 사용해도 실행되지 않음. 처음 실행하고 값을 간직.
    },
    now3(){
      return this.$store.state.name
    },
    ...mapState(['name','likes','age']), // 다른 computes 함수랑 함께 쓰려면 필요
  },
  methods : {
    ...mapMutations(['setMore','좋아요증가']),
    now(){
      return new Date() // 사용할때마다 실행.
    },
    publish(){
      var 내게시물 = {
      name: "Bae jihun",
      userImage: "https://picsum.photos/100?random=3",
      postImage: this.전송한이미지,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.작성한글,
      filter: this.선택한필터
      };
      this.인스타데이터.unshift(내게시물); // 왼쪽의 array에 자료집어넣어줌
      this.전송한이미지 = [];
      this.step=0;
    },
     mounted(){
    this.emitter.on('applyFilter',(a)=>{
      this.선택한필터 = a
    })
  },
    more(){
      // post 요청방식
      // axios.post('url',{name : 'kim'}).then().catch((err)=>{
      //   err
      // })
      
      //get요청에서 주소는 백틱으로 표시
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기횟수}.json`)
      .then(결과=>{// arrow함수는 바깥에 잇던 this를 그대로 사용함.
        this.인스타데이터.push(결과.data);
        this.더보기횟수++;
      })
      .catch(err =>{
        console.error('데이터를 가져오는 실패:',err);
      })
    },
    upload(e){
     let 파일 = e.target.files;
     let url = URL.createObjectURL(파일[0]);
     console.log(url);
     this.전송한이미지.push(url);//url을 생성한후 this.전송한이미지에 값을 할당해야함.
     this.step++;
    }
  }
}
</script> 

<style>


body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 30px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

</style>
