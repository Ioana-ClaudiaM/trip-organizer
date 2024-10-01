<template>
    <div class="navbar">
        <div class="page-icon">
            <img src="../assets/travel-bag.png" alt="icon">
            <h1>Trip Planner</h1>
        </div>
        <div class="buttons">
            <router-link to="/">
                <el-button type="warning" router-link to="/">HomePage</el-button>
            </router-link>
            <router-link to="/destinations">
                <el-button type="warning">Destinații</el-button>
            </router-link> 
            <router-link to="/wishlist">
                <el-button type="warning">Wishlist</el-button>
            </router-link>
            <router-link to="/contact">
                <el-button type="warning">Contact</el-button>
            </router-link>
            <router-link to="/profile">
                <el-button type="warning">Profil</el-button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarApp',
}
</script>

<style scoped>
.navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.2%;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
}

.page-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
}

h1 {
    font-family: 'Poppins';
    margin: 0;
}

.buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
    flex-grow: 1;
}

.el-button {
    color: black;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    padding: 10px 20px;
}

img {
    width: 60px;
    height: 60px;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .page-icon {
        justify-content: center;
        margin-bottom: 20px;
        width: 100%;
        justify-content: center;
    }

    .buttons {
        justify-content: center;
        width: 100%;
    }

    .el-button {
        width: 100%;
        text-align: center;
    }
}
</style>