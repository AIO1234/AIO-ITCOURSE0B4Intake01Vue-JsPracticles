<template>

    <div class="sample">
        <div class="formcomponent">

        <v-container class="margines">
        <v-card class="p-5" elevation = "10" width = "538px">

             <center><h2>Sample Form</h2></center>

             <div class="pt-6"></div>

            <v-form class="pa-7">

                <v-row>

                <v-col cols = "12">

                    <label for="name">Name</label>

                    <div class="pt-1">
                    <v-text-field varian="outlined" v-model="name"></v-text-field>

                    <span v-if="name === 'Ravindu'">{{ name }}</span>
                     <!-- "v-model" used for two-way databinding -->

                    <!-- <input :value="name" id="text1" @input="show()">
                    {{ name }} -->
                    </div>

                </v-col>

                <v-col cols = "12">

                    <label for="address">Address</label>

                    <div class="pt-1">
                    <v-text-field varian="outlined" v-model="address"></v-text-field>
                    {{ address }}
                    </div>

                </v-col>

                <v-col cols = "12">

                    <label for="inquiry">Inquiry</label>

                    <div class="pt-1">
                    <v-text-field varian="outlined" v-model="inquery"></v-text-field>
                    {{ inquery }}
                    </div>

                </v-col>

                <v-col cols = "12">

                <v-btn style="text-transform: capitalize; width: 100%; background-color: #004da7; color: white;" @Click="test123()">Submit</v-btn>

                </v-col>

                    </v-row>
                </v-form>
            </v-card>
        </v-container>
        {{ test }}<br />
        array 1:{{ items }}
        </div>
    </div>

</template>

<script>

export default{
    data() {
        return {

        test: "Name",
        items: ['element1', 'element2'],
        name: "",   //This is an example for one-way databindind
        address: "Sample",//This is an example for two-way databindind using v-model in vue
        inquery: "Sample2",//This is an example for two-way databindind using v-model in vue
    };
},

beforeCreate() {
        console.log(this.test);
    },
created() {
        console.log(this.test);
    },
    methods: {

        test123() {
            console.log(this.test);
            this.$router.push("/") //nevigate to another page ('/'= index.html)
            
        },

        // show(){ //one way databinding example

        //     this.name = document.getElementById('text1').value;
        //     // console.log(this.name);
        // },
    },
};

</script>