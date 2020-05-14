import Vue from "vue";

Vue.prototype.$eventBus = new Vue();

//объект 1
new Vue({
	el: '#mobile-menu-component',
	template: "#mobile-menu-wrapper",
	data() {
		return {
			menuStatus: false
		}
	},
	created() {
		this.$eventBus.$on('click-button', this.openMenu)
	},
	beforeDestroy(){
		this.$eventBus.$off('click-button');
	},	
	methods: {
		openMenu: function() {
			return this.menuStatus = true;
		},
		closeMenu() {
			this.menuStatus = false;
			this.$eventBus.$emit('close-menu', this.menuStatus)
		}
	}
});

//объект 2
new Vue({
  el: '#mobile-menu-button-component',
	template: "#mobile-menu-button-wrapper",
	data() {
		return {
			buttonClicked: false,
		}
	},
	created() {
		this.$eventBus.$on('closeButton', this.closeMenu)
	},
	methods: {
		openMenu() {
			this.buttonClicked = true;
			this.$eventBus.$emit('click-button', this.buttonClicked)
		},
		closeMenu() {
			return this.buttonClicked = false;
		}
	}
});
