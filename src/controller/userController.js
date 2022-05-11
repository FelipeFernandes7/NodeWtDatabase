class userController {
  create(req, res) {
    const connection = require("../database");
    const { nome_emp, cargo, comissao, status, salario, dt_nascimento } =
      req.body;

    if (
      !nome_emp ||
      !cargo ||
      !comissao ||
      !status ||
      !salario ||
      !dt_nascimento
    ) {
      res.status(400).json({ message: "Campos Vazios" });
    } else {
      connection.query(
        `INSERT INTO tb_empregado (nome_emp, cargo,dt_nascimento, salario,comissao,status)
        values('${nome_emp}', '${cargo}','${dt_nascimento}', '${salario}','${comissao}','${status}')`,
        (err) => {
          if (err) {
            res.status(400).json({ message: err.message });
          } else {
            res.status(200).json({ message: "Usuário atualizado com Sucesso" });
          }
        }
      );
    }
  }
  async update(req, res) {
    const connection = require("../database");
    const id = req.params.id;
    const datas = {
      nome_emp: req.body.nome_emp,
      cargo: req.body.cargo,
      salario: req.body.salario,
    };

    if (!id || !datas.nome_emp || !datas.cargo || !datas.salario) {
      res.status(400).json({ message: "Os campos estão vazios" });
    } else {
      connection.query(
        "UPDATE tb_empregado SET ? WHERE id = ?",
        [datas, id],
        (err, results, fields) => {
          if (err) {
            res.status(400).json({ message: err.message });
          } else {
            res
              .status(200)
              .json({ message: "Empregado Atualizado com Sucesso!" });
          }
        }
      );
    }
  }

  async remove(req, res) {
    const connection = require("../database");
    const { id } = req.params;

    if (!id) {
      res
        .status(400)
        .json({ message: "Necessário informar o id para excluir o usuário" });
    } else {
      connection.query(
        " DELETE FROM tb_empregado WHERE id = ? ",
        [Number(id)],
        (err) => {
          if (err) {
            res.status(400).json({ message: err.message });
          } else {
            res.status(200).json({ message: "Usuário deletado com Sucesso" });
          }
        }
      );
    }
  }
  async users(req, res) {
    const { id } = req.params;
    const connection = require("../database");

    connection.query(
      "SELECT * FROM `tb_empregado` WHERE id = ? ",
      [id],
      function (err, results, fields) {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          if (results.length === 0) {
            res.status(400).json({ message: "Nehum usuário encontrado!" });
          } else {
            res.status(200).json({ data: results });
          }
        }
      }
    );
  }
}

module.exports = new userController();
