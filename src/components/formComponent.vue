<template>

    <div>
        <v-container style="margin-right: 30%; margin-left: 35%;">
        <v-card class="p-5" elevation = "10" width = "538px">

             <center><h2>Sample Form</h2></center>

             <div class="pt-6"></div>

            <v-form class="pa-7">

                <v-row>

                <v-col cols = "12">

                    <label for="name">Name</label>

                    <div class="pt-1">
                    <v-text-field varian="outlined"></v-text-field>
                    </div>

                </v-col>

                <v-col cols = "12">

                    <label for="address">Address</label>

                    <div class="pt-1">
                    <v-text-field varian="outlined"></v-text-field>
                    </div>

                </v-col>

                <v-col cols = "12">

                    <label for="inquiry">Inquiry</label>

                    <div class="pt-1">
                    <v-text-field varian="outlined"></v-text-field>
                    </div>

                </v-col>

                <v-col cols = "12">

                <v-btn style="text-transform: capitalize; width: 100%; background-color: #004da7; color: white;" >Submit</v-btn>

                </v-col>

                    </v-row>
                </v-form>
            </v-card>
        </v-container>
    </div>

</template>

<script>

</script>