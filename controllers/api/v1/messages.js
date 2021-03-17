const Message = require("../../../models/Message");

//GET api/v1/messages
const getAll = (req, res) => {
  let query = req.query;
  let username = req.query.user;
  console.log(query);
  if (Object.keys(query).length === 0) {
    Message.find({}, (err, doc) => {
      if (err) {
        res.json({
          status: "error",
          message: "Couldnot find the messages",
        });
      }
      if (!err) {
        res.json({
          status: "success",
          data: {
            message: doc,
          },
        });
      }
    });
  } else {
    Message.find({ user: username }, (err, doc) => {
      if (err) {
        res.json({
          status: "error",
          message: `Couldnot find a user with username: ${username}`,
        });
      }
      if (!err) {
        res.json({
          status: "success",
          data: {
            message: doc,
          },
        });
      }
    });
  }
};

//GET api/v1/messages/:id
const getOne = (req, res) => {
  userId = req.params.id;
  Message.findOne({ _id: userId }, (err, doc) => {
    if (err) {
      res.json({
        status: "error",
        message: `Couldnot find a user with id: ${userId}`,
      });
    }
    if (!err) {
      res.json({
        status: "success",
        data: {
          message: doc,
        },
      });
    }
  });
};

//POST api/v1/messages
const create = (req, res, next) => {
  let message = new Message();
  message.text = req.body.text;
  message.user = req.body.user;
  message.save((err, doc) => {
    if (err) {
      res.json({
        status: "error",
        message: "Couldnot save this message",
      });
    }
    if (!err) {
      res.json({
        status: "success",
        data: {
          message: doc,
        },
      });
    }
  });
};

//PUT api/v1/messages/:id
const updateOne = (req, res) => {
  userId = req.params.id;
  Message.findOneAndUpdate(
    { _id: `${userId}` },
    {
      text: `${req.body.text}`,
      user: `${req.body.user}`,
    },
    {
      returnOriginal: false,
    },
    (err, doc) => {
      if (err) {
        res.json({
          status: "error",
          message: `Couldnot update a user with id: ${userId}`,
        });
      }
      if (!err) {
        res.json({
          status: "success",
          data: {
            message: doc,
          },
        });
      }
    }
  );
};

//DELETE api/v1/messages/:id
const deleteOne = (req, res) => {
  userId = req.params.id;
  Message.findOneAndDelete({ _id: `${userId}` }, (err, doc) => {
    if (err) {
      res.json({
        status: "error",
        message: `Couldnot delete a user with id: ${userId}`,
      });
    }
    if (!err) {
      res.json({
        status: "success",
        data: {
          message: "the message was removed",
        },
      });
    }
  });
};

module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.create = create;
module.exports.updateOne = updateOne;
module.exports.deleteOne = deleteOne;
