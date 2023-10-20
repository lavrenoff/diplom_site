<!-- https://swiperjs.com/vue#installation -->
<template>
    <swiper :pagination="{ clickable: true, }" :modules="modules" :slides-per-view="1" :space-between="50" class="mySwiper">
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner1.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner2.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner3.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner4.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
        <swiper-slide>
            <section class="banner_slider">
                <img src="../assets/img/banner5.png" alt="">
                <div class="banner_txts">
                    <p class="banner_txt1"><span>Доставка</span> цветов в городе</p>
                    <p class="banner_txt2">Владивосток</p>
                    <button class="banner_btn">КАТАЛОГ</button>
                </div>
            </section>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';



// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {


        return {

            //   pagination: {
            //   clickable: true,
            //   renderBullet: function (index, className) {
            //     return '<span class="' + className + '">' + (index + 1) + '</span>';
            //   },
            // },
            modules: [Pagination],

        };
    },
};
</script>

<style lang="scss" scoped>
.banner {
    &_slider {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 806px;
        margin-top: -100px;
        z-index: -1;
    }

    &_slider img {
        position: absolute;
        bottom: 0;
        // border: 1px solid;
    }

    &_txt1 {
        font-family: 'KARTON';
        font-size: 31px;
        color: #5B4A58;
        font-family: 400;
    }

    &_txt1 span {
        font-family: 'KARTON';
        color: #6AAE55;
        font-size: 31px;
    }



    &_txt2 {
        font-family: 'KARTON';
        font-size: 66px;
        color: #5B4A58;
        font-family: 400;
        padding-top: 15px;
    }

    &_txts {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -10%;
        margin-top: -5%;
        text-align: center;
    }

    &_btn {
        background-color: #6AAE55;
        border-radius: 10px;
        border: none;
        color: white;
        font-size: 18px;
        padding-top: 13px;
        padding-bottom: 13px;
        padding-right: 60px;
        padding-left: 60px;
        margin-top: 33px;
    }


}

.mySwiper {
    margin-top: -110px;
    // z-index: -1;
}</style>