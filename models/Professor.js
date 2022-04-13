const { Model, DataTypes } = require("sequelize");

class Professor extends Model {
  static init(conexao) {
    super.init(
      {
        nome: DataTypes.STRING,
        turma: DataTypes.STRING,
        nivel: DataTypes.STRING,
        foto: DataTypes.STRING,
        trabalho: DataTypes.STRING,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "professores" }
    );
  }
}

module.exports = Professor;
