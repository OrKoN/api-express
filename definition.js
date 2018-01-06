"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _2.default.h(
    _.Service,
    {
      id: "my-service",
      port: 3000,
      version: "0.1.0",
      contact: "Alex",
      tags: ['node', 'service'],
      endpoint: "http://dev.server.at.home"
    },
    _2.default.h(_.Middleware, { use: require('./middleware/logger') }),
    _2.default.h(
      _.Group,
      { name: "Users", description: "All about users" },
      _2.default.h(
        _.Route,
        { path: "/users/:id", method: "get", handler: require('./handlers/getUserById') },
        _2.default.h(
          _.Request,
          null,
          _2.default.h(_.PathParameter, { name: "id", type: "string" })
        ),
        _2.default.h(_.Response, { schema: require('./schemas/getUserById.res.json') })
      )
    )
  );
};

var _ = require(".");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

