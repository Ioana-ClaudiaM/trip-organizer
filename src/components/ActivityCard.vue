<template>
    <div class="card" v-bind:class="{
        cardCulture: type === 'Culture',
        cardAdventure: type === 'Adventure',
        cardRelaxing: type === 'Relaxing'
    }">
        <div class="img-card" :style="backgroundImage"></div>
        <h2>Destination {{ name }}</h2>
        <h2>Date {{ date }} </h2>
        <h2>Type of activity {{ type }}</h2>
    </div>
</template>

<script>
export default {
    name: 'ActivityCard',
    props: {
        name: String,
        date: String,
        type: String,
    },
    computed: {
    backgroundImage() {
        let imageUrl = '';
        if (this.type === 'Adventure') {
            imageUrl = require('@/assets/adventure.jpg');
        } else if (this.type === 'Culture') {
            imageUrl = require('@/assets/culture.jpg');
        } else if (this.type === 'Relaxing') {
            imageUrl = require('@/assets/summer_05.jpg');
        }
        return {
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };
    }
}

}
</script>

<style scoped>
.card {
    height: fit-content;
    width: fit-content;
    padding: 16px;
    background-color: #00000031;
    color: white;
    font-family: 'Poppins';
}

.img-card {
    width: 300px;
    height: 200px;
    border: 4px dashed rgb(255, 240, 23);
}

.cardCulture {
    border: 1px solid #000000;
}

.cardAdventure {
    border: 1px solid #ff0000;
}

.cardRelaxing {
    border: 1px solid #00ff00;
}
</style>
