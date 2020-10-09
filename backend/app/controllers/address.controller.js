const db = require("../models");
const Address = db.address;

exports.addNeAddress = (res,req) => {
	if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const address = new Address({
  	street: req.body.street,
  	city: req.body.city,
  	suite: req.body.suite,
  	zipcode: req.body.zipcode
  });

  address.save(address).then(data => {
  	res.send(data);
  })
  .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Address."
      });
    });
};

exports.getAllAddress = (req,res) => {
	street = req.query.street;
	var condition = street ? { street: { $regex: new RegExp(title), $options: "i" } } : {};

	Address.find(condition).then(data => {
		res.send(data);
	})
	.catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving address."
      });
    });
};

exports.geAddressById = (req,res) => {
	const id = req.params.id;

	Address.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Address with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Address with id=" + id });
    });
};

exports.updatAddress = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Address.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Address with id=${id}. Maybe Address was not found!`
        });
      } else res.send({ message:  Address was updated successfully." });"
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Address with id=" + id
      });
    });
};

exports.deletAddress = (req, res) => {
  const id = req.params.id;

  Address.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Address with id=${id}. Maybe Address was not found!`
        });
      } else {
        res.send({
          message:  "Address was deleted successfully!"''
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Address with id=" + id
      });
    });
};


exports.deleteAllAddress = (req, res) => {
  Address.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount}  Address were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all address."
      });
    });
};