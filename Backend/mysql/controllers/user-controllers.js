const utils = require("../utils");
const db = require("../database").promise();

const getAllUserData = async (req, res) => {
  try {
    // get all user data from our database
    const GET_USERS = `SELECT * FROM users;`;
    const [users] = await db.execute(GET_USERS);

    res.status(200).send(new utils.CreateRespond(200, "success", users));
  } catch (error) {
    console.log(error);
    res.status(500).send("internal service error");
  }
};

const deleteUserDataById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    // check if users already exist?
    const GET_USER_BY_ID = `SELECT * FROM users WHERE id = ${id};`;
    const [user] = await db.execute(GET_USER_BY_ID);
    console.log(user);

    // if users doesnt exist
    if (!user.length)
      throw new utils.CreateError(
        "Bad Request",
        401,
        `${req.method} : ${req.url}`,
        `user with id : ${id} doesn't found`
      );

    // delete user
    const DELETE_USER_BY_ID = `DELETE FROM users WHERE id = ${id};`;
    const DELETED_USER = await db.execute(DELETE_USER_BY_ID);
    console.log(DELETED_USER);

    res
      .status(200)
      .send(
        new utils.CreateRespond(
          200,
          `user with id : ${id} has been deleted`,
          {}
        )
      );
  } catch (error) {
    const err = error.code ? error : new utils.CreateError();
    res.status(err.code).send(err);
  }
};

// TODO : POST DATA
const postNewData = async (req, res) => {
  const { uid, username, email, password } = req.body; // dapat diakses karena ada middleware parsejson (lihat di index.js awal)
  try {
    const newUser = `INSERT INTO users (uid, username, email, password) VALUES ('${uid}', '${username}', '${email}', '${password}')`;
    const [new_user] = await db.execute(newUser);

    // const newUser = `INSERT INTO users (uid, username, email, password) VALUES (?, ?, ?, ?);
    // const [new_user] = await db.execute(newUser, [uid, username, email, password]);
    res
      .status(200)
      .send(
        new utils.CreateRespond(
          200,
          "create data user has been executed successfully",
          new_user
        )
      );
  } catch (error) {}
};

// TODO : PATCH

const patchData = async (req, res) => {
  const a = String(req.body.username);

  try {
    const selectUsername = `SELECT * FROM users WHERE username = "${a}"; `;
    const [select_Username] = await db.execute(selectUsername);
    const oldPass = select_Username[0].password;

    // const patchData = `ALTER TABLE users RENAME COLUMN '${oldPass}' TO '${pass}'`;
    // const [patch_Data] = await db.execute(patchData);
    console.log(oldPass);
    res
      .status(200)
      .send(
        new utils.CreateRespond(
          200,
          "patch data user has been executed successfully",
          select_Username
        )
      );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUserData,
  deleteUserDataById,
  postNewData,
  patchData,
};
