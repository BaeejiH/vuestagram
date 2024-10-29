import axios from "axios";
import { createStore } from "vuex";

// actions 구조
// actions : {
//     데이터가져오기(context){
//         axios.get('').then(()=>{
//             성공시 실행할 코드
//            context.commit('mutations함수명') --> state변경 및 수정이 필요할시 context도 추가
//         })
//     }
// }



const store = createStore({
    state() {
        return{
            name : 'kim', // state 보관하고 싶으면 여기에
            age : 99,
            likes : [30,60,90],
            likesState : [false,false,false], // 좋아요가 눌렸지 현재 상태
            more : {},
        }
    },
    mutations : { //state 수정방법 정의하는 곳
        setMore(state,data){
            state.more =data
        },
        이름변경(state){
            state.name = 'park'
        },
        나이증가(state,data){
            state.age += data
        },
        좋아요증가(state,index){
            if(state.likesState[index] == false){
                state.likes[index]++
                state.likesState[index] = true; // 상태를 true로 변경 , 이 코드가 없을시 한번 증가하고 그 이후로는 계속 감소함
            }else{
                state.likes[index]--
                state.likesState[index] = false; // 상태를 false로 변경, =
            }
        }
    },
    actions: {//ajax 요청 하는 곳
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a)=>{//ajax로 데이터가져옴
                console.log(a.data);
                context.commit('setMore',a.data) // mutations를 이용해서 state에 저장
            })
        }
    }
})
export default store;