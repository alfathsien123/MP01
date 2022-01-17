const { db } = require('../database')

module.exports = {
    getData: (req, res) => {
        let scriptQuery = `Select * from karyawan k join posisi p on p.idposisi=k.idposisi;`
        if (req.query.nama) {
            scriptQuery = `Select * from karyawan where nama = ${db.escape(req.query.nama)};`
        }
        db.query(scriptQuery, (err, results) => {
            if (err) res.status(500).send(err)
            res.status(200).send(results)
        })
    },
    addData: (req, res) => {
        console.log(req.body)
        let { nama, usia, email, berat, tahun, kota, idposisi } = req.body
        let insertQuery = `Insert into karyawan values (null,${db.escape(nama)},${db.escape(usia)},${db.escape(email)},${db.escape(berat)},${db.escape(kota)},${db.escape(tahun)},${db.escape(idposisi)});`
        console.log(insertQuery)
        db.query(insertQuery, (err, results) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }

            db.query(`Select * from karyawan where nama = ${db.escape(nama)};`, (err2, results2) => {
                if (err2) res.status(500).send(err2)
                res.status(200).send({ message: 'Penambahan Karyawan Berhasil', data: results2 })
                // res.status(200).send(results)
            })
        })
    },
    editData: (req, res) => {
        let dataUpdate = []
        for (let prop in req.body) {
            dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`)
        }

        let updateQuery = `UPDATE karyawan set ${dataUpdate} where idkaryawan = ${req.params.id};`
        console.log(updateQuery)
        db.query(updateQuery, (err, results) => {
            if (err) res.status(500).send(err)
            res.status(200).send(results)
        })
    },
    deleteData: (req, res) => {
        let deleteQuery = `DELETE from karyawan where idkaryawan = ${db.escape(req.params.idkaryawan)};`

        db.query(deleteQuery, (err, results) => {
            if (err) res.status(500).send(err)
            res.status(200).send(results)
        })
    }
}