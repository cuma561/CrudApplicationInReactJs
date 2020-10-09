const db = require("../models");
const Company = db.company;

exports.addNewCompany = (res,req) => {
	if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const company = new Company({
  	name: req.body.name
  });

  company.save(company).then(data => {
  	res.send(data);
  })
  .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Company."
      });
    });
};

exports.getAllCompany = (req,res) => {
	name = req.query.name;
	var condition = name ? { name: { $regex: new RegExp(title), $options: "i" } } : {};

  Company.find(condition).then(data => {
		res.send(data);
	})
	.catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving company."
      });
    });
};

exports.getComapnyById = (req,res) => {
	const id = req.params.id;

  Company.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Company with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Company with id=" + id });
    });
};

exports.updateCompany = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Company.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Company with id=${id}. Maybe Company was not found!`
        });
      } else res.send({ message: "Company was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Company with id=" + id
      });
    });
};

exports.deleteComapny = (req, res) => {
  const id = req.params.id;

  Company.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Company with id=${id}. Maybe Company was not found!`
        });
      } else {
        res.send({
          message: "Company was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Company with id=" + id
      });
    });
};


exports.deleteAllCompany = (req, res) => {
 Company.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Company were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all company."
      });
    });
};