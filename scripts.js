var iPhone6S = new Phone('Apple', 449, 'silver', 32),
	GalaxyS9 = new Phone('Samsung', 719.99, 'gold', 64),
	OnePlus5T = new Phone('OnePlus', 449, 'black', 64)
function Phone(brand, price, color, capacity) {
	this.brand = brand
	this.price = price
	this.color = color
	this.capacity = capacity
}
Phone.prototype.printInfo = function() {
		console.log('The phone brand is ' + this.brand + ', color is ' + this.color + 'and the price is $' + this.price + ' for ' + this.capacity + 'GB.')
}
iPhone6S.printInfo()
GalaxyS9.printInfo()
OnePlus5T.printInfo()