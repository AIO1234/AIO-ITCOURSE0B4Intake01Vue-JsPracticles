<template>
  <div>
    <!-- slider component -->
    <SliderComponent />

    <div class="pt-10"></div>

    <CardComponent />

    <div class="pt-10"></div>

    <FormComponent />

    <div class="pt-10"></div>
  </div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import FormComponent from "@/components/FormComponent.vue";

export default {
  components: {
    SliderComponent,
    CardComponent,
    FormComponent,
  },
};
</script>
