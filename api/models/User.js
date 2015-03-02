 var mongoose = require('mongoose')
 var bcrypt = require('bcrypt-nodejs');
 
 var UserSchema = new mongoose.Schema({
 	password: String,
 	username: String,
 	lastname: String,
 	email: String
 })

 UserSchema.methods.toJSON = function  () {
	var user = this.toObject();
	delete user.password;
	return user;
}

exports.model = mongoose.model('user',UserSchema);

UserSchema.pre('save', function(next){
	var user = this;
	if (!user.isModified('password'))return next();

	bcrypt.genSalt(10, function  (err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, null, function  (err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		})
	})

})
