import { extend, supplant, findOne, isNumber } from '@foragefox/doubledash';

class AngleInput {

    constructor(element, options) {
        this.element = element;
        this.options = extend(true, AngleInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
        this.body = document.body;

        this.element.innerHTML = supplant(this.options.templates.body, {
            name: this.options.name,
            value: this.options.value
		});

        this.value = parseInt(this.options.value);
        this.dial = this.convertDialValue(this.value);

        this.input = findOne('input', this.element);
        this.circle = findOne('.angle-input-circle', this.element);
        this.pivot = findOne('.angle-input-pivot', this.element);

        this.accessible(this.circle);
        this.setValue();
        this.bindEvents();
    }

    bindEvents() {
        this.circle.addEventListener('mousedown', (event) => this.beginTracking(event), false);
        this.input.addEventListener('keyup', (event) => this.inputChanged(event), false);
    }

    setValue() {
        this.pivot.style.transform = 'rotate(-' + this.dial + 'deg)';
        this.input.value = this.value;
    }

    convertValue(value) {
        value -= 90;
        if (value < 0) {
            value += 360;
        }
        return value;
    }

    convertDialValue(value) {
        value += 90;
        if (value >= 360) {
            value -= 360;
        }
        return value;
    }

    inputChanged() {
        this.value = this.normalize(this.input.value);
        this.dial = this.convertDialValue(this.value);
        this.setValue();
    }

    updateWithEvent(event, done) {
        var vector = [event.x, event.y];
        var deg = this.angle(vector, this.circle);
        this.dial = this.normalize(deg);
        this.value = this.convertValue(this.dial);
        this.setValue();
    }

    beginTracking(event) {
        
        var that = this;

        function endTracking(event) {
            that.updateWithEvent(event, true);
            that.body.removeEventListener('mousemove', duringTracking, false);
            that.body.removeEventListener('mouseup', endTracking, false);
        }

        function duringTracking(event) {
            that.updateWithEvent(event);
        }

        this.body.addEventListener('mousemove', duringTracking, false);
        this.body.addEventListener('mouseup', endTracking, false);
    }

    normalize(degree) {
        degree = isNumber(degree) && !Number.isNaN(degree) ? degree : 0;

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
