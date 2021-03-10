var data = {
    index: 0,
    festivals: [{
        year: 2021,
        month: 2,
        date: '正月初一',
        day: 12,
        festival: '新年',
        good: '吃年糕',
        bad: '穿著大紅、博弈下注'
    }, {
        year: 2021,
        month: 2,
        date: '正月十五',
        day: 26,
        festival: '元宵',
        good: '吃元宵、湯圓',
        bad: '穿著大紅、博弈下注'
    }, {
        year: 2021,
        month: 4,
        date: '二月廿四',
        day: 4,
        festival: '清明',
        good: '吃潤餅、紅龜粿',
        bad: '穿著大紅、博弈下注'
    }, {
        year: 2021,
        month: 6,
        date: '五月初五',
        day: 14,
        festival: '端午',
        good: '吃粽子',
        bad: '跳水戲水'
    }, {
        year: 2021,
        month: 8,
        date: '七月初七',
        day: 14,
        festival: '七夕',
        good: '吃餃子、麻花捲',
        bad: '跳水戲水'
    },  {
        year: 2021,
        month: 8,
        date: '七月十五',
        day: 22,
        festival: '中元',
        good: '吃鴨子',
        bad: '穿著大紅、博弈下注'
    }, {
        year: 2021,
        month: 2,
        date: '八月十五',
        day: 15,
        festival: '中秋',
        good: '吃月餅',
        bad: '跳水戲水'
    }, {
        year: 2021,
        month: 9,
        date: '九月初九',
        day: 21,
        festival: '重陽節',
        good: '飲酒',
        bad: '穿著大紅、博弈下注'
    }, {
        year: 2021,
        month: 12,
        date: '十一月十八',
        day: 21,
        festival: '冬至',
        good: '吃湯圓',
        bad: '跳水戲水'
    }, {
        year: 2021,
        month: 2,
        date: '十二月卅日',
        day: 11,
        festival: '除夕',
        good: '吃長年菜',
        bad: '穿著大紅、博弈下注'
    }]
}


let vm = new Vue({
    el: '#app',
    data: data,
    computed: {
        festival_list() {
            return this.festivals[this.index]
        }
    },
    mounted(){
        window.onwheel = function (e) {
            if(e.deltaY>0 && vm.index< vm.festivals.length-1){
                vm.index ++
                swiper.slideTo(vm.index);
            }
            else if(e.deltaY<0 && vm.index > 0){
                vm.index --
                swiper.slideTo(vm.index);


            }
            console.log(`${e.deltaY}`);
        };
    },
    methods: {
        change(index) {
            this.index = index
        }
    }
})

var swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    slidesPerView: 10,
    spaceBetween: 10,
    mousewheel: true,
    centeredSlides: true,
    // touchRatio: 0,
    // grabCursor: true,
});

var index = document.querySelectorAll(".swiper-slide").length;

swiper.slideTo(0);
var swipers = document.querySelectorAll(".swiper-slide");

for (var i = 0; i < swipers.length; i++) {
    const index = i;
    swipers[i].onclick = function () {
        swiper.slideTo(index);
    };
}
// window.onwheel = function (e) {
//     console.log(e.deltaY);
// };