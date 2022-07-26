class Typing {
    constructor(prop) {
        this.el = document.querySelector(prop.el)
        this.interval = prop.interval || 500
        this.delay = prop.delay == undefined ? 1000 : prop.delay
        this.text = this.el.innerHTML
        this.el.innerHTML = ''

        setTimeout(() => {
            this.write()
        }, this.delay);
    }
    write(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.write(i)
            }, this.interval);
        }
    }
}
new Typing({
    el: '.info_text',
    interval: 50,
    delay: 0
})