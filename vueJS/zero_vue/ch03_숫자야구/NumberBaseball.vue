<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">
            <input maxlength="4" minlength="4" ref="answer" v-model="value" />
            <button type="submi">입력</button>
        </form>
        <div>시도: {{tries.length}}</div>
        <ul>
            <li v-for="ele in tries">
                <div> {{ele.try}} </div>
                <div> {{ele.result}} </div>
            </li>
        </ul>
    </div>
</template>

<script>
const getRandomNum = () => {
    const candidates = [1,2,3,4,5,6,7,8,9];
    const arr = [];
    for (let i = 0; i < 4; i++) {
        const choosen = candidates.splice(
            Math.floor(
                Math.random() * (9 - i)
            ), 1);
        arr.push(choosen);
    }
    return arr;
}
export default {
    data() {
        return {
            answers: getRandomNum(),
            tries:[],
            value: '',
            result: ''
        }
    },
    methods:{
        onSubmitForm(e) {
            // e.preventDefault(); // 해당 태그에  @submit.prevent 때문
            this.tries.push( 
                { try: this.value,                
                  result: '홈런'
                });
            this.value = '';
            this.$refs.answer.focus();
        }
    },
}
</script>

<style>

</style>