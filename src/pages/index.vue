<template>

<div>

  <h1>Hello</h1>
  <h3>Hellooo...!</h3>

 </div>


</template>

<script >
  
  export default{

    components: {

    },
// Vue life cycle hook
    beforeCreate() {

      console.log("Before Create"); //Loade at first (Before every events)

    },

    created(){

      console.log("Created"); // After beforeCreate

    },

    beforeMount() {

      console.log("Before Mount"); //Loded after beforeCreate and Created

    },

    mounted() {

      console.log("Mounted"); //Loded after beforeCreate and created

    },

    beforeUpdate() {

      console.log("Before Update"); //Before every updates

    },

    updated() {

      console.log("Updated"); //With every updates

    },

  };

</script>

