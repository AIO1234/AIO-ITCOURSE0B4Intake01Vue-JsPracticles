<template>
  <div>
    Hello Hellooo jek,jmhnbvcx,mnhb,kh jhgfdghlkjhgrf ijtyrfdhjbgf
    <div class="pt-5"></div>

    <p>hello Para</p>
  </div>
</template>

<script>
export default {
  components: {},

  // this occures before creating the component
  beforeCreate() {
    console.log("before create");
  },

  // this occures after created the component
  created() {
    console.log("created");
  },

  // this occures before loding the component
  beforeMount() {
    console.log("before mount");
  },

  // this occures after loaded the component
  mounted() {
    console.log("mounted");
  },

  // this occures before update anything in the component(after loaded)
  beforeUpdate() {
    console.log("before update");
  },

  // this occures after updated anything in the component
  updated() {
    console.log("updated");
  },
};
</script>

<style>

</style>