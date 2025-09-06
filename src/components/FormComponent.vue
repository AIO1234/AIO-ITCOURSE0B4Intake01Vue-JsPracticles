<template>
  <div class="sample">
    <div class="formcomponent">
      <v-container class="margins">
        <v-card class="pa-5" elevation="10" width="538px">
          <center><h2>Sample Form</h2></center>
          <!-- form -->

          <div class="pt-6"></div>
          <v-form class="pa-7">
            <v-row>
              <!-- name -->
              <v-col cols="12">
                <label>Name</label>
                <div class="pt-1"></div>
                <v-text-field variant="outlined" v-model="name"></v-text-field>
                {{ name }}
              </v-col>

              <!-- address -->
              <v-col cols="12">
                <label>Address</label>
                <div class="pt-1"></div>
                <v-text-field
                  variant="outlined"
                  v-model="address"
                ></v-text-field>
                {{ address }}
              </v-col>

              <!-- inquiry -->
              <v-col cols="12">
                <label>Inquiry</label>
                <div class="pt-1"></div>
                <v-text-field
                  variant="outlined"
                  v-model="inquiry"
                ></v-text-field>
                {{ inquiry }}
              </v-col>

              <!-- button -->
              <v-col cols="12">
                <v-btn
                  style="text-transform: capitalize"
                  color="#004DA7"
                  block
                  @click="test123()"
                  >Submit</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-container>
      {{ test }}
      <br />
      Array 1 : {{ items }}
      <br />
      {{ obj1 }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "Name",
      items: ["elemant1", "elemant2"],
      obj1: { key1: "prop1" },
      name: "Test",
      address: "Sample",
      inquiry: "Sample2",
    };
  },

  beforeCreate() {
    console.log(this.test);
  },
  created() {
    console.log(this.test);
  },
  methods: {
    // test method
    test123() {
      console.log(this.test);
      this.$router.push("/");
    },
  },
};
</script>
