<template>
   <app-master>

       <div slot='breadcrumb'>
         <app-breadcrumb>
             <div class="title-box ttm-textcolor-white">
                <div class="page-title-heading">
                    <h1 class="title">Sano Foods</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="breadcrumb-wrapper-inner">
                            <span>
                                <router-link class="home" title='Go to AgroPark' to='/'><i class="themifyicon ti-home"></i>&nbsp;&nbsp;Home </router-link>
            
                            </span>
                            <span class="ttm-bread-sep">&nbsp; | &nbsp;</span>
                            <span>Distributors Form</span>
                        </div>
                    </div>
                </div>
            </div>
         </app-breadcrumb>
       </div>


        



      <div slot='main_content'>

        <section class="ttm-row clearfix">
            <div class="container">
                <div class="row pt-60 res-991-pt-0">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="pr-40 res-991-pr-0 res-991-pb-30">
                            <!-- section-title -->
                            <div class="section-title with-desc clearfix">
                                <div class="title-header">
                                    <h2 class="title">Distributors Form</h2>
<<<<<<< HEAD
=======
                                    
>>>>>>> cleaning up
                                </div>
                            </div>
                            <!-- section-title end -->
                            <form id="ttm-contactform" class="ttm-contactform wrap-form style2 res-991-mt_15 clearfix" method="post" action="#">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Surname *</label>
                                        <span class="text-input"><input  v-model="formData.surname" type="text" value="" placeholder="" required="required" ></span>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Other Names *</label>
                                        <span class="text-input"><input  v-model="formData.other_names" type="text" value="" placeholder="" required="required" ></span>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Your email *</label>
                                        <span class="text-input"><input v-model="formData.email" type="email" value="" placeholder="" required="required"></span>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Your Phone *</label>
                                        <span class="text-input"><input v-model="formData.telephone" type="text" value="" placeholder="" required="required"></span>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Date of Birth *</label>
                                        
                                        <datepicker placeholder="Select Date" v-model="formData.date_of_birth" ></datepicker>
                                        <!-- <span class="text-input"><input  v-model="formData.date_of_birth" type="text" value="" placeholder="" required="required" ></span> -->
                                    </div>
                                    <div class="col-md-6">
                                        <label>Occupation *</label>
                                        <span class="text-input"><input  v-model="formData.occupation" type="text" value="" placeholder="" required="required" ></span>
                                    </div>
                                    <!-- <div class="col-md-6">
                                        <label>Marital Status *</label>
                                        <span class="text-input"><select v-model="formData.marital_status"  name="religion">
                                             <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                             <option value="widow">Widow</option>
                                        </select>
                                        </span>
                                    </div> -->
                                    <!-- <div class="col-md-6">
                                        <label>Religion *</label>
                                        <span class="text-input"><select v-model="formData.religion"  name="religion"> -->
                                        <!-- <span class="text-input"><input  v-model="formData.gender" type="text" value="" placeholder="" required="required" ></span> -->
                                            <!-- <option value="christianity">Christianity</option>
                                            <option value="islam">Islam</option>
                                            <option value="others">Others</option>
                                        </select>
                                        </span>
                                    </div> -->
                                    <div class="col-md-3">
                                        <label>Gender *</label>
                                        <span class="text-input"><select v-model="formData.gender"  name="gender">
                                        <!-- <span class="text-input"><input  v-model="formData.gender" type="text" value="" placeholder="" required="required" ></span> -->
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        </span>
                                    </div>
                                    <div class="col-md-9">
                                        <label>Shop Address *</label>
                                        <span class="text-input"><input  v-model="formData.shop_address" type="text" value="" placeholder="" required="required" ></span>
                                    </div>
                                    <div class="col-md-12">
                                        <label>Home Address*</label>
                                        <span class="text-input"><input v-model="formData.home_address" type="text" value="" placeholder="" required="required"></span>
                                    </div>
                                    <div class="col-md-12">
                                        <label>Business Address *</label>
                                        <span class="text-input"><input  v-model="formData.business_address" type="text" value="" placeholder="" ></span>
                                    </div>
                                    <!-- <div class="col-md-12">
                                        <label>Your Message *</label>
                                        <span class="text-input"><textarea v-model="message" cols="40" rows="6" placeholder="" required="required"></textarea></span>
                                    </div> -->
                                </div>
                                <input type="submit" @click.prevent="submit('SUBMIT_DISTRIBUTORS_FORM')" value="REGISTER" class="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor">
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- intro-section end -->

        
      </div>

   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
import { seo } from "../Repositories/seo"
import { pick } from "../Repositories/pick"
import { vuesax } from "../Repositories/vuesax"
import Datepicker from 'vuejs-datepicker';
// import { fb, db } from "../firebase"

export default {
  name: "Welcome",
  mixins: [seo,pick,vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : Breadcrumb,
     Datepicker

  },
  data(){
      return{
          date: '',
          formData: {
            surname: ' ',
            other_names: ' ',
            email: '',
            telephone: ' ',
            home_address: '',
            business_address: '',
            shop_address: '',
            date_of_birth: '',
            gender: '',
            occupation: ''

          },          
        
      }
  },
  methods: {
      api_params(value) {
        if(value == "SUBMIT_DISTRIBUTORS_FORM"){
            return { ...this.formData }
        }
        },

        async api_calls(value){

        let response;
        let x = this;


        if(value == "SUBMIT_DISTRIBUTORS_FORM"){

            /** Start loader gif */
          this.showLoading();

          response = await this.$store.dispatch("distributors_registration", this.api_params(value));

            /** If response contain status */
            if( response && 'status' in response){
              
                /** If response status is 200 */
                if(response.status == 200){

                    x.showNotif({type: 'success', message: response.data.message });

                    /** Clears all input field */
                    x.clearInputField(x.formData);
                }


                /** If response status is 400 or 404 */
                if(response.status == 400 || response.status == 404){
                  x.showNotif({type: 'warning', message: response.data.message });

                }

                /** If response contains error */
                if(response.data.errors){
                  x.showNotif({type: 'warning', message: response.data.errors });
                  
                }
                
              } 

              /** End loader gif */
              this.hideLoading();
        }

    },
     
     async submit(value){
        let x = this;
      
        if(value == "SUBMIT_DISTRIBUTORS_FORM"){
           this.api_calls(value);
            
        }

    }
  },

  created(){
      
    //   this.seoMetaData('Distributors Form' , '');
    //   this.showNotif({type: 'warning', message: "hewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"});
  }

};
</script>
<style scoped>
.ttm-page-title-row {
    display: block;
    padding-top: 45px;
    padding-bottom: 45px;
    z-index: 11;
}

.pt-60 {
    padding-top: 0px !important;
}

select{
    border: 1px solid transparent;
    background-color: #f9fafa;
    color: #9dabaf;
    width: 100%;
    padding: 10px 15px;
    padding-left: 33px;
     min-height: 44.8px;
    letter-spacing: 1px;
}

input, select{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
