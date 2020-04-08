module.exports = (sequelize, type) => {
    return sequelize.define('test', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          field: "id"
        }
    });
}
