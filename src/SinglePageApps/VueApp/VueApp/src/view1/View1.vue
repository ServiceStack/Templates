<template>
    <div id="view1">
        <h3>{{ message }}</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return { message: "This is View 1" }
  }
});
</script>

<style lang="scss">
@import '../app.scss';

#view1 h3 {
    color: darken($navbar-background, 10%);
    text-shadow: 2px 2px 3px rgba(0,0,0,0.2);
}
</style>
