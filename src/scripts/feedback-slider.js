import Vue from "vue";

const buttons = {
	template: "#feedback-slider-buttons"
}

const slider = {
	template: "#feedback-slider",
	props: ["feedback"]
}

new Vue ({
	el: "#feedback-slider-component",
	template: "#feedback-slider-container",
	data() {
		return {
			feedback: []
		}
	},
	components: {
		buttons,
		slider
	},
	methods: {
		makeArrWithRequiredImages(array) {
			return array.map(item => {
				const requirePic = require(`../images/content/${item.photo}`);
				item.photo = requirePic;
				return item;
			})
		}
	},
	created() {
		const data = require('../data/feedback.json');
		this.feedback = this.makeArrWithRequiredImages(data);
	}

});