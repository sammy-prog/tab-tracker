<template>

    <div class="white elevation-1">
        <v-toolbar  dense class="light-blue accent-4" dark>
            <v-toolbar-title> {{ title }} </v-toolbar-title>
            <slot name="action">
            </slot>
        </v-toolbar>
        
        <div class="pl-4 pr-5 pt-2 pb-2">
            <slot>
                No slot content defined.
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>

<style scoped>

</style>
