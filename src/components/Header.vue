<template>
  <!--header start-->
        <header id="masthead" class="header ttm-header-style-classicinfo">
           
            <!-- ttm-topbar-wrapper -->
            <div class="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                <div class="container">
                    <div class="ttm-topbar-content">
                        <ul class="top-contact text-left">
                            <li><i class="themifyicon ti-location-pin"></i> 18, Udi Street, Osborne Foreshore, Ikoyi Lagos </li>
                            <li><i class="themifyicon ti-timer"></i>Mon - Fri 8.00 - 17.00</li>
                        </ul>
                        <div class="topbar-right text-right">
                            <div class="ttm-social-links-wrapper list-inline">
                                <ul class="social-icons">
                                    <li><a href="https://web.facebook.com/agroparkng?_rdc=1&_rdr"><i class="fa fa-facebook"></i></a>
                                    </li>
                                    <li><a href="https://twitter.com/agroparkng"><i class="fa fa-twitter"></i></a>
                                    </li>
                                    
                                    <li><a href="https://www.instagram.com/agroparkng/"><i class="fa fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" href="#">GET A APPOINTMENT!</a>
                        </div>
                    </div>
                </div>
            </div><!-- ttm-topbar-wrapper end -->
            
        </header><!--header end-->

</template>

<script>
export default {
  name: "Header",
  props: {},
  data(){
      return {
          active: ''
      }
  },
  methods:{
      triggerMenu(){
          if(this.active == ''){
               this.active = 'active'
          }else{
              this.active= '';
          }
         
          console.log(this.active);
      },

      dropdown(event){
          let clickedElement = event.target.nextElementSibling;
          let clickedElementClassList = Array.from(clickedElement.classList);
          if(clickedElementClassList.includes('active')){
              clickedElement.classList.remove('active');
          }else{
               clickedElement.classList.add('active');
          }


          let parentElement = event.target;
          let parentElementClassList = Array.from(parentElement.classList);
          if(parentElementClassList.includes('active')){
              parentElement.classList.remove('active');
          }else{
               parentElement.classList.add('active');
          }
          

      }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    /* li.has-submenu > a::after {
        content: 'Hi';
    }


    li.has-submenu > a.active::after {
        content: '\f106';
    } */
</style>





 