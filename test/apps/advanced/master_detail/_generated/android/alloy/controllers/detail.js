function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        layout: "vertical",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "name"
    });
    $.__views.detail.add($.__views.name);
    $.__views.height = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "height"
    });
    $.__views.detail.add($.__views.height);
    $.__views.weight = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "weight"
    });
    $.__views.detail.add($.__views.weight);
    $.__views.age = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "age"
    });
    $.__views.detail.add($.__views.age);
    $.__views.record = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 15,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "normal"
        },
        textAlign: "left",
        id: "record"
    });
    $.__views.detail.add($.__views.record);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.setBoxerStats = function(name) {
        var stats = Alloy.Globals.data[name];
        $.name.text = "Name: " + name;
        $.age.text = "Age: " + stats.age;
        $.height.text = "Height: " + stats.height;
        $.weight.text = "Weight: " + stats.weight;
        $.record.text = "Record: " + stats.record;
        require("specs/detail")($, {
            name: name,
            stats: stats
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;