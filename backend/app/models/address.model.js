module.exports = mongoose => {
	var schema = mongoose.Schema(
		{
			street: String,
			city: String,
			suite: String,
			zipcode: String

		},
		{ timestamps: true }
	)
	schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

	const Address = mongoose.model("address", schema);
  	return Address;

}