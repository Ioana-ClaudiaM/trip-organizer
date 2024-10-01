<template>
    <div class="destinations-page">
        <div class="activities">
            <div class="introduction">
                <h1>Add new activity</h1>
                <p>
                    Welcome to the activity planner! Here you can add new activities to your trip itinerary.
                    Simply enter the city where the activity will take place, select the date, and click
                    "Add activity" to include it in your schedule. Organizing your trip has never been
                    easier. Let’s make your journey unforgettable!
                </p>
            </div>
            <div class="add-activity">
                <img class='i1' src="../assets/318327-P94SFB-461-corr.jpg">
                <el-input v-model="city" placeholder="City" clearable />
                <el-input v-model="date" clearable type="date" />
                <select name="Type" id="type" v-model="type">
                    <option>Adventure</option>
                    <option>Relaxing</option>
                    <option>Culture</option>
                </select>
                <el-button type="success" @click="addActivity">Add activity</el-button>
            </div>
        </div>
        <Carousel></Carousel>
        <select name="Filter" id="filter" v-model="filter" @change="filterActivity">
            <option value="" disabled selected>Select activity type</option> 
            <option>Adventure</option>
            <option>Relaxing</option>
            <option>Culture</option>
            <option>All</option>
        </select>
        <div class="cards" v-show="filteredActivities.length > 0">
            <div v-for="activity in filteredActivities" :key="activity.city">
                <ActivityCard :name="activity.city" :date="activity.date" :type="activity.type"></ActivityCard>
            </div>
        </div>

    </div>
</template>

<script>
import ActivityCard from '@/components/ActivityCard.vue';
import Carousel from '@/components/Carousel.vue';

export default {
    name: 'DestinationsPage',
    data() {
        return {
            city: '',
            date: '',
            type: '',
            filter: '',
            activities: JSON.parse(localStorage.getItem('activities')) || [],
            filteredActivities: [],
        }
    },
    components: {
        Carousel,
        ActivityCard,
    },
    methods: {
        addActivity() {
            const activity = {
                city: this.city,
                date: this.date,
                type: this.type,
            }
            this.activities.push(activity);
            localStorage.setItem('activities', JSON.stringify(this.activities));
            this.city = '';
            this.date = '';
            this.type = '';
        }
        ,
        filterActivity() {
            if (!this.filter) {
                this.filteredActivities = this.activities;
            } else if ( this.filter && this.filter !== 'All') {
                this.filteredActivities = this.activities.filter(activity => activity.type === this.filter);
            }
            else{
                this.filteredActivities = this.activities;
            }
        }

    },
    mounted() {
        this.filteredActivities = this.activities; 
    },
}
</script>

<style scoped>
div {
    height: 100vh;
    width: 100%;
}

.i1 {
    width: 350px;
    height: 300px;
}

.i2 {
    width: 100px;
    height: 100px;
}

.activities {
    display: flex;
    flex-direction: row;
    gap: 8%;
    width: fit-content;
    height: fit-content;
    padding: 8%;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/flat-lay-map-hat-sandals.jpg);
    background-size: cover;
    background-position: center;
}

.add-activity,
.introduction {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding: 40px;
    gap: 10px;
    font-family: 'Poppins';
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.176);
    border-radius: 20px;
}

.add-activity {
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.217);
}

.el-button {
    font-family: 'Poppins';
    font-weight: 500;
}

select {
    width: 90%;
    height: 30px;
}

.add-activity .el-input {
    width: 90%;
    height: 10%;
}

.el-input,
select {
    --el-input-focus-border-color: rgb(40, 145, 45);
}

p {
    font-size: 1.2rem;
    text-shadow: 3px 3px 6px rgb(120, 221, 216);
    color: rgb(17, 48, 83);
    margin-top: -20px;
}

h1 {
    text-shadow: 3px 3px 6px rgb(230, 173, 173);
    color: rgb(205, 253, 205);
    font-size: 3rem;
    font-family: 'Playpen Sans';
}

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* Creează 3 coloane egale */
    gap: 16px;
    /* Spațiere între carduri */
    width: 100%;
    /* Ocupă toată lățimea */
    background-image: url('../assets/frame-with-travel-accessories-yellow-background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    margin-top: 30px;
}


.cards div {
    height: fit-content;
}

.destinations-page {
    height: fit-content;
}

#filter{
    width: 30%;
    margin-left: 35%;
    margin-top: 2%;
    font-family: 'Poppins';
    background-color: rgba(255, 240, 71, 0.324);
    text-align: center;
    font-weight: 500;
}

@media (max-width: 768px) {
    img {
        width: 150px;
        height: 100px;
    }

    .add-activity {
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 0.5rem;
    }

    .activities {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: fit-content;
        padding: 8%;
        gap: 20px;
        justify-content: center;
        align-items: center;
        background-image: url('../assets/frame-with-travel-accessories-yellow-background.jpg');
        background-size: cover;
        background-position: center;
    }
}
</style>