import Vue from "vue";
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel';

Vue.prototype.$eventBus = new Vue();

const CarouselComponent = {
	template: "#feedback-carousel",
	props: {
		reviews: {
			type : Array,
			default: []
		}
	},
	components: {
		Carousel,
		Slide,
	},
	data: () => ({
		slidesPerPage: 2
	}),
	watch: {
		slidesPerPage() {
			this.$eventBus.$emit('pages', this.pages)
			
		},
		reviews() {
			this.$eventBus.$emit('pages', this.pages);
			this.calcSlidesPerPage();
			
		}
	},
	computed: {
		pages() {
			return Math.ceil((this.reviews.length - 1) / this.slidesPerPage);
		}
	},
	methods: {
		pageChange(number) {
			this.$eventBus.$emit('activePage', number);
			
		},
		calcSlidesPerPage() {
			this.slidesPerPage = (window.innerWidth <= 768 ? 1 : 2);
		}
	},
	mounted() {
		window.addEventListener('resize', this.calcSlidesPerPage);
	}
};

const controls = {
	template: "#controls",
	data() {
		return {
		}
	},
	props: ['hasPrevous', 'hasNext']

};

new Vue ({
	el: "#feedback-slider-component",
	template: "#feedback-slider-container",
	data() {
		return {
			reviews: [],
			activePage: 0,
			pages: 0,

		}
	},
	components: {
		CarouselComponent,
		controls,
	},
	methods: {
		previous() {
			document.querySelector('.VueCarousel-navigation-prev').click();
		},
		next() {
			document.querySelector('.VueCarousel-navigation-next').click();
		}
	},
	created() {
		axios.get('https://webdev-api.loftschool.com/reviews/311')
			.then( reviews => {
				this.reviews = reviews.data;
				this.reviews.map( (review) => {
					return review.photo = 'https://webdev-api.loftschool.com/' + review.photo;
				})
			})
	},
	mounted() {
		this.$eventBus.$on('activePage', number => {
			this.activePage = number;
			console.log(this.activePage)
		});
		this.$eventBus.$on('pages', number => {
			this.pages = number;
			console.log(this.pages)
		});
	}
});