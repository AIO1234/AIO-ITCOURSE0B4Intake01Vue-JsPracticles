<template>

    <div>

        <!-- Slider Component -->
         <sliderComponent />

         <div class="pt-10"></div>

        <!-- Card Component -->
         <cardComponent />

         <div class="pt-10"></div>

         <!-- Form Component -->
         <formComponent />

         <div class="pt-10"></div>


    </div>

</template>

<script>

    import sliderComponent from '@/components/sliderComponent.vue';
    import cardComponent from '@/components/cardComponent.vue';
    import formComponent from '@/components/formComponent.vue';

    export default{
        components: {

            sliderComponent,
            cardComponent,
            formComponent,
        },
    };

</script>