export const reverseMixin = {
	data() {
		return {
			message: "",
		};
	},
	computed: {
		reversedMessage() {
			return this.message.split("").reverse().join("");
		},
		withLength() {
			return this.reversedMessage + " (" + this.reversedMessage.length + ")";
		},
	},
};
