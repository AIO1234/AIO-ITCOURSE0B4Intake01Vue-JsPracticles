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
                <v-text-field variant="outlined"></v-text-field>
              </v-col>

              <!-- address -->
              <v-col cols="12">
                <label>Address</label>
                <div class="pt-1"></div>
                <v-text-field variant="outlined"></v-text-field>
              </v-col>

              <!-- inquiry -->
              <v-col cols="12">
                <label>Inquiry</label>
                <div class="pt-1"></div>
                <v-text-field variant="outlined"></v-text-field>
              </v-col>

              <!-- button -->
              <v-col cols="12">
                <v-btn style="text-transform: capitalize" color="#004DA7" block
                  >Submit</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>
