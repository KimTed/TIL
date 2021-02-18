<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">
            <input maxlength="4" minlength="4" ref="answer" v-model="value" />
            <button>입력</button>
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
export default {
    data() {
        return {
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