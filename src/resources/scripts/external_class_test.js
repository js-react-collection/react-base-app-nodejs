
export default class EXTERNAL_CLASS_TEST {

	constructor(name, value) {
		this.name = name
		this.value = value
	}

	increaseValue(v) {
		this.value += v
	}

	decreaseValue(v) {
		this.value -= v
	}

	getValue() {
		return this.value
	}

}