// import models
const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "products_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: { model: ProductTag, unique: false },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: { model: ProductTag, unique: false },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
