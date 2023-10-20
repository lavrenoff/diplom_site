<template>
    <div v-if="review.length !== 0" class="messages">
        <div v-for="item in review" :key="item.id">
            <div class="rating">
                <div class="family">
                    <p class="family__p">{{ item.firstName }}</p>
                    <p class="family__date">{{ item.date }} г. {{ item.city }}</p>
                </div>
                <star-rating v-bind:increment="1" v-bind:max-rating="5" inactive-color="#E0E0E0"
                                        :show-rating="false" active-color="#F2C94C" v-bind:star-size="20"
                                        :read-only="true" :rating="item.points">
                                    </star-rating>

            </div>
            <div class="rating__text">
                <p>{{ item.text }}</p>
            </div>


        </div>
    </div>
    <div v-else><h2>Вы первый, можете написать отзыв</h2></div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    name: 'ReviewListComponent',
    props: ['review'],
    components:{
        StarRating
    },

    data() {
        return {
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

.family{
    &__p{
        font-size: 16px;
        font-weight: 700;
        color: #6AAE55;
    }

    &__date{
        font-size: 12px;
        font-weight: 400;
        color: #828282;
    }
}
.rating{
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text{
        padding-top: 10px;
        padding-bottom: 20px;
    }

    &__text{
        border-bottom: 1px solid #E0E0E0;
        margin-bottom: 20px;
    }
}

.messages{
    background-color: white;
    margin-top: 35px;
    border-radius: 10px;
    padding-top: 27px;
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 35px;
}
</style>