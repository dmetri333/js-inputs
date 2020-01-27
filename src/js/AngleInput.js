import Util from '@foragefox/page-builder-util';

class AngleInput {

    constructor(element, options) {
        this.element = element;
        this.$element = $(element);
        this.options = $.extend(true, {}, AngleInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
        this.body = document.body;

        this.$element.html(Util.supplant(this.options.templates.body, {
            name: this.options.name,
            value: this.options.value
        }));

        this.value = this.options.value;
        this.input = this.$element.find('input');
        this.circle = this.$element.find('.angle-input-circle')[0];
        this.pivot = this.$element.find('.angle-input-pivot');

        this.accessible(this.circle);
        this.setValue();
        this.bindEvents();
    }

    bindEvents() {
        this.circle.addEventListener('mousedown', this.beginTracking.bind(this), false);
        this.input.on('keyup', this.inputChanged.bind(this));
    }

    setValue() {
        this.pivot.css('transform', "rotate(-" + this.value + "deg)");
        this.input.val(this.value);
    }

    inputChanged() {
        this.value = this.normalize(this.input.val());
        this.setValue();
    }

    updateWithEvent(event, done) {
        var vector = [event.x, event.y];
        var deg = this.angle(vector, this.circle);
        this.value = this.normalize(deg);
        this.setValue();
    }

    beginTracking(e) {
        var that = this;

        function endTracking(e) {
            that.updateWithEvent(e, true);
            that.body.removeEventListener('mousemove', duringTracking, false);
            that.body.removeEventListener('mouseup', endTracking, false);
        }

        function duringTracking(e) {
            that.updateWithEvent(e);
        }

        that.body.addEventListener('mousemove', duringTracking, false);
        that.body.addEventListener('mouseup', endTracking, false);
    }

    normalize(degree) {
        var n = Math.max(this.options.min, Math.min(degree, this.options.max));
        var s = n - (n % this.options.step);
        var high = Math.ceil(n / this.options.step);
        var low = Math.round(n / this.options.step);
        return high >= (n / this.options.step)
            ? (high * this.options.step == 360) ? 0 : (high * this.options.step)
            : low * this.options.step;
    }

    radToDeg(rad) {
        return rad * (180 / Math.PI);
    }

    getCenter(element) {
        var rect = element.getBoundingClientRect();
        return [
            rect.left + (rect.width / 2),
            rect.top + (rect.height / 2),
        ];
    }

    angle(vector, element) {
        var center = this.getCenter(element);
        var x = vector[0] - center[0];
        var y = vector[1] - center[1];
        var deg = this.radToDeg(Math.atan2(x, y));
        deg -= 90;
        if (deg < 0) deg += 360;
        return deg;
    }

    accessible(container) {
        if (container.tabIndex === -1) container.tabIndex = 0;
    }
}

AngleInput.DEFAULTS = {
    name: '',
    value: 0,
    max: 360,
    min: 0,
    step: 1,
    templates: {
        body: `
        <input class="form-control" type="text" name="{{name}}" value="{{value}}">  
        <div class="angle-input-circle">
            <div class="angle-input-pivot"></div>
        </div>
        `
    }
}

export default AngleInput;
