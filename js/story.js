let vm = new Vue({
    el: '#app',
    data: {
        idx: 0,
        now_index: 0,
        lock: false,
        festivals: [{
            festival: '',
            hero: {
                img: '',
                content: ''
            },
            stories: [{
                img: '',
                title: '',
                content: ''
            }]
        }]
    },
    computed: {
        festival: function () {
            return this.festivals[this.idx]
        }
    },
    created() {
        window.onresize = this.resize
    },
    mounted() {
        let festival = window.location.href.split('=')[1]
        if(festival == undefined)
            festival = 0
        axios.get('../db.json')
            .then((res) => {
                this.festivals = res.data
                this.idx = festival
            })
            .then(() => {
                this.resize()
                let texts = document.querySelectorAll('.text')
                for (let index = 0; index < texts.length; index++) {
                    const text = texts[index];
                    text.onmouseover = function () {
                        vm.lock = true
                    }
                    text.onmouseleave = function () {
                        vm.lock = false
                    }
                }
            })
    },
    methods: {
        change(index) {
            this.idx = index
            this.now_index = 0
            this.remove()
            let story_blocks = document.querySelectorAll('.story_block')
            story_blocks[this.now_index].classList.add('expend')
            if(this.now_index>0)
                story_blocks[this.now_index].querySelector('.title').classList.add('hide')

        },
        expend(index, event) {
            this.now_index = index
            this.remove()
            event.currentTarget.classList.add('expend')
            if(!event.currentTarget.querySelector('.title').classList.contains('first'))
            event.currentTarget.querySelector('.title').classList.add('hide')
            this.resize()
        },
        next(e) {
            if (!this.lock && window.innerWidth>=768) {
                let story_blocks = document.querySelectorAll('.story_block')
                if (e.deltaY > 0 && this.now_index < story_blocks.length - 1)
                    this.now_index++
                else if (e.deltaY < 0 && this.now_index > 0)
                    this.now_index--
                this.remove()
                story_blocks[this.now_index].classList.add('expend')
                if(this.now_index>0)
                    story_blocks[this.now_index].querySelector('.title').classList.add('hide')

            }
        },
        remove() {
            let story_blocks = document.querySelectorAll('.story_block')

            for (let index = 0; index < story_blocks.length; index++) {
                const story_block = story_blocks[index];
                story_block.classList.remove('expend')

                story_blocks[index].querySelector('.title').classList.remove('hide')
            }
        },
        resize() {
            if(window.innerWidth>=768){
                setTimeout(function () {
                    let w = document.querySelector('section').offsetWidth
                    let contents = document.querySelectorAll('.content')
                    let story_blocks = document.querySelectorAll('.story_block')
                    for (let index = 0; index < contents.length; index++) {
                        const content = contents[index];
                        content.style.width = w - 100 * (story_blocks.length) + 'px'
                    }
                }, 300)
            }
            else{
                let w = document.querySelector('section').offsetWidth
                    let contents = document.querySelectorAll('.content')
                    let story_blocks = document.querySelectorAll('.story_block')
                    for (let index = 0; index < contents.length; index++) {
                        const content = contents[index];
                        content.style.width = w + 'px'
                    }
            }
            
        }
    }
})

let mouseX = 0;
let mouseY = 0;

let ball = {
    dom: document.querySelector(".cursor"),
    x: 0,
    y: 0,
    speed: 0.2
}

let dot = {
    dom: document.querySelector(".cursor-dot"),
    x: 0,
    y: 0,
    speed: 1
}

function animate() {
    let dist = {
        x: mouseX - ball.x,
        y: mouseY - ball.y
    }
    let dist1 = {
        x: mouseX - dot.x,
        y: mouseY - dot.y
    }
    ball.x = ball.x + (dist.x * ball.speed);
    ball.y = ball.y + (dist.y * ball.speed);

    dot.x = dot.x + (dist1.x * dot.speed);
    dot.y = dot.y + (dist1.y * dot.speed);

    ball.dom.style.left = ball.x + 'px';
    ball.dom.style.top = ball.y + 'px';
    dot.dom.style.left = dot.x + 'px';
    dot.dom.style.top = dot.y + 'px';
    requestAnimationFrame(animate)
}
animate();

document.addEventListener('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

let lists = document.querySelectorAll('li')

for (let index = 0; index < lists.length; index++) {
    const list = lists[index];
    list.onmouseover = function () {
        ball.dom.classList.add('grow')
    }
    list.onmouseleave = function () {
        ball.dom.classList.remove('grow')
    }
}
