var data = {
    index: 0,
    festivals: [{
        date: '十月十七日',
        day: 1,
        festival: '春節',
        good: '全家出遊、考取功名',
        bad: '穿著大紅、博弈下注'
    }, {
        date: '十月十七日',
        day: 20,
        festival: '元宵',
        good: '吃好吃的元宵、躲在棉被',
        bad: '穿著大紅、博弈下注'
    }, {
        date: '十月十七日',
        day: 25,
        festival: '清明',
        good: '掃墓',
        bad: '穿著大紅、博弈下注'
    }, {
        date: '五月五日',
        day: 15,
        festival: '端午',
        good: '划龍舟、立蛋',
        bad: '跳水戲水'
    }, {
        date: '五月五日',
        day: 7,
        festival: '七夕',
        good: '吃好吃的元宵、躲在棉被',
        bad: '跳水戲水'
    },  {
        date: '五月五日',
        day: 10,
        festival: '中元',
        good: '划龍舟、立蛋',
        bad: '穿著大紅、博弈下注'
    }, {
        date: '五月五日',
        day: 5,
        festival: '中秋',
        good: '吃好吃的元宵、躲在棉被',
        bad: '跳水戲水'
    }, {
        date: '五月五日',
        day: 20,
        festival: '重陽節',
        good: '划龍舟、立蛋',
        bad: '穿著大紅、博弈下注'
    }, {
        date: '五月五日',
        day: 25,
        festival: '冬至',
        good: '划龍舟、立蛋',
        bad: '跳水戲水'
    }, {
        date: '五月五日',
        day: 31,
        festival: '除夕',
        good: '划龍舟、立蛋',
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
    centeredSlides: true
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