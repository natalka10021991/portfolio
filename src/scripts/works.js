import Vue from "vue";
import axios from 'axios'


const thumbs = {
	template: "#slider-thumbs",
	data() {
		return {
		}
	},
	props: ["works", "currentWork", "currentIndex"]
}

const buttons = {
	template: "#slider-buttons",
};

const display = {
	template: "#slider-display",
	components: {
		thumbs,
		buttons
	},
	props: ["currentWork", "works", "currentIndex"],
	computed: {
		reversedWorks() {
			const works = [...this.works];
			return works.reverse();
		}
	}
};

const tags = {
	template: "#slider-tags",
	props: ["tags"]
};

const info = {
	template: "#slider-info",
	components: {
		tags
	},
	props: ["currentWork"],
	computed: {
		tagsArray() {
			return this.currentWork.techs.split(",");
		}
	}
};

new Vue ({
	el: "#slider-component",
	template: "#slider-container",
	components: {
		display,
		info
	},
	data() {
		return {
			works: [],
			currentIndex: 0,
		}
	},
	created() {
		axios.get('https://webdev-api.loftschool.com/works/311')
			.then( works => {
				this.works = works.data;
				console.log(this.works)
				this.works.map( (work) => {
					return work.photo = 'https://webdev-api.loftschool.com/' + work.photo;
				})
			})
	},
	watch: {
		currentIndex(value) {
			this.makeInfiniteLoopForIndex(value);
		}
	},
	computed: {
		currentWork() {
			return this.works[this.currentIndex];
		}
	},
	methods: {
		makeInfiniteLoopForIndex(value) {
			const worksAmountFromZero = this.works.length - 1
			if (value > worksAmountFromZero) this.currentIndex = 0;
			if (value < 0) this.currentIndex = worksAmountFromZero;
		},
		handleSlide(direction) {
			switch(direction) {
				case 'next':
					this.currentIndex++;
					break;
				case 'prev':
					this.currentIndex--;
					break;
			}
		},
		changeSlide(index) {
			console.log(this.works)
			return this.currentIndex = index - 1;

		},
	},
});
