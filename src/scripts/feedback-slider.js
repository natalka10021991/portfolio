import Vue from "vue";

import { Carousel, Slide } from 'vue-carousel';

new Vue ({
	el: "#feedback-slider-component",
	template: "#feedback-slider-container",
	data() {
		return {
			feedback: []
		}
	},
	components: {
		Carousel,
		Slide
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