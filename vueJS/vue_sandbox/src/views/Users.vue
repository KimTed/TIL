<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex sx6>
                <Allusers />
            </v-flex>
            <v-flex sx6>
                <SignUp />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Allusers from '@/components/Users/AllUsers'
import SignUp from '@/components/Users/SignUp'

export default {
    components: {
        Allusers,
        SignUp
    }
}
</script>