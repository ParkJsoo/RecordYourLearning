<template>
    <div id="board-home">
        <home-today></home-today>
        <div class="home-sectionB">
            <home-homework></home-homework>
            <home-graph></home-graph>
        </div>
    </div>
</template>

<script>
import HomeToday from './home/HomeToday.vue'
import HomeHomework from './home/HomeHomework.vue'
import HomeGraph from './home/HomeGraph.vue'

export default {
    components: {
        'HomeToday': HomeToday,
        'HomeHomework': HomeHomework,
        'HomeGraph': HomeGraph,
    }
}
</script>

<style scoped>
    #board-home {
        padding: 40px 45px;
        display: flex;
        justify-content: space-around;
    }
    .home-sectionB {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>