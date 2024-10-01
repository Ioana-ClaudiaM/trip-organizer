<template>
    <div class="carousel">
    <el-carousel v-if="items.length > 0" trigger="click" height="150px">
      <el-carousel-item v-for="(activity,item) in items.length" :key="activity">
        <p v-bind:class="{
            type1 : items[item].type === 'Adventure',
            type2 : items[item].type === 'Relaxing',
            type3 : items[item].type === 'Culture',
        }">
            {{ '!' + ' City to go: '+ items[item].city + " Date: "+items[item].date + " Type of activity: "+items[item].type + ' !'}}
    </p>
      </el-carousel-item>
    </el-carousel>
    <el-carousel v-else trigger="click" height="150px">
      <el-carousel-item >
        <h2 style="text-align: center; font-size:3rem; font-family: 'Playpen Sans'; color:lightcoral">No activities was added.</h2>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
        name:'CarouselComponent',
        data(){
            return{
                items: [],
            }
        },
        mounted() {
        const data = JSON.parse(localStorage.getItem('activities'));
        this.items = data || []; 
    }
    }
</script>

<style scoped>
.carousel{
    height:fit-content;
}
.type1 {
color:rgb(207, 85, 105);
  line-height: 150px;
  margin: 0;
  text-align: center;
  font-size: 2rem;
  font-family: 'Playpen Sans';
  font-weight: bold;
  text-shadow: 4px 4px 2px rgb(255, 255, 255);
}

.type2 {
  color: #399b7a;
  line-height: 150px;
  margin: 0;
  text-align: center;
  font-size: 2rem;
  font-family: 'Playpen Sans';
  font-weight: bold;
  text-shadow: 4px 4px 2px rgb(255, 255, 255);

}

.type3 {
  color: #309bbb;
  line-height: 150px;
  margin: 0;
  text-align: center;
  font-size: 2rem;
  font-family: 'Playpen Sans';
  font-weight: bold;
  text-shadow: 4px 4px 2px rgb(255, 255, 255);

}

.el-carousel__item {
  margin-top: 30px;
  background-image:url(../assets/flat-lay-map-hat-sandals.jpg);
  background-size:cover;
  background-position: center;
}


</style>