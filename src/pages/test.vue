<template>
  <div>

    <h1>Hello Test Component</h1>

    <p>Hello</p>

    <!-- test component one -->

    <div class="pt-16"></div>
     <TestComponentOne />
  </div>

</template>

<script>
import TestComponentOne from "@/components/TestComponentOne.vue";
// import TestComponentOne from "../components/TestComponentOne.vue";
export default {
  components: {
    TestComponentOne,
  },
};
</script>
