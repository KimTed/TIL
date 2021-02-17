<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm">
            <input maxlength="4" ref="answer" v-model="value" />
            <button>입력</button>
        </form>
        <div>시도: {{}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            answer: ''
        }
    },
    methods:{
        onSubmitForm(e) {
            e.preventDefault();
        }
    },
}
</script>

<style>

</style>