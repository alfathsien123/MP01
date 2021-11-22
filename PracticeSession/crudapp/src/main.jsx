import React from "react";
import Axios from "axios";
import { Table, Form, Button, Modal, Spinner } from "react-bootstrap";

// Global Variable
const URL = "http://localhost:2000/clients";

// Main Component
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      name: "",
      email: "",
      phone: "",
      currency: "",
      address: "",
      post: "",
      region: "",
      id: null,
      editClient: {
        name: "",
        email: "",
        id: "",
        phone: "",
        currency: "",
        address: "",
        postalZip: "",
        region: "",
      },
      loading: false,
      save: false,
      delete: false,
      deleteData: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    Axios.get(URL)
      .then((respond) => {
        console.log("respond : ", respond);
        this.setState({ clients: respond.data, loading: false });
      })
      .catch((error) => console.log("error : ", error));
  }

  renderClientList = () => {
    return this.state.clients.map((item) => {
      //  conditional rendering
      if (item.id === this.state.id) {
        return (
          <tr key={item.id}>
            <td>#</td>
            <td>
              <Form.Control
                type="text"
                defaultValue={item.name}
                onChange={(event) =>
                  this.setState({
                    editClient: {
                      ...this.state.editClient,
                      name: event.target.value,
                    },
                  })
                }
              />
            </td>
            <td>
              <Form.Control
                type="email"
                defaultValue={item.email}
                onChange={(event) =>
                  this.setState({
                    editClient: {
                      ...this.state.editClient,
                      email: event.target.value,
                    },
                  })
                }
              />
            </td>
            <td>
              <Form.Control
                type="text"
                defaultValue={item.phone}
                onChange={(event) =>
                  this.setState({
                    editClient: {
                      ...this.state.editClient,
                      phone: event.target.value,
                    },
                  })
                }
              />
            </td>
            <td>
              <Form.Control
                type="text"
                defaultValue={item.currency}
                onChange={(event) =>
                  this.setState({
                    editClient: {
                      ...this.state.editClient,
                      currency: event.target.value,
                    },
                  })
                }
              />
            </td>
            <td>
              <Form.Control
                type="text"
                defaultValue={item.address}
                onChange={(event) =>
                  this.setState({
                    editClient: {
                      ...this.state.editClient,
                      address: event.target.value,
                    },
                  })
                }
              />
            </td>
            <td>
              <Form.Control
                type="text"
                defaultValue={item.postalZip}
                onChange={(event) =>
                  this.setState({
                    editClient: {
                      ...this.state.editClient,
                      postalZip: event.target.value,
                    },
                  })
                }
              />
            </td>
            <td>
              <Form.Control
                type="text"
                defaultValue={item.region}
                onChange={(event) =>
                  this.setState({
                    editClient: {
                      ...this.state.editClient,
                      region: event.target.value,
                    },
                  })
                }
              />
            </td>
            <td>
              <Button variant="warning" onClick={this.onButtonCancel}>
                Cancel
              </Button>
              <Button variant="success" onClick={() => this.onButtonSave(item)}>
                Save
              </Button>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.currency}</td>
            <td>{item.address}</td>
            <td>{item.postalZip}</td>
            <td>{item.region}</td>
            <td>
              <Button
                variant="danger"
                onClick={() => this.onButtonDelete(item.id)}
              >
                Delete
              </Button>
              <Button variant="warning" onClick={() => this.onButtonEdit(item)}>
                Edit
              </Button>
            </td>
          </tr>
        );
      }
    });
  };

  onButtonSubmit = () => {
    // prepare data
    const newClient = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      postalZip: this.state.post,
      country: "",
      region: this.state.region,
      numberrange: 0,
      currency: this.state.currency,
    };
    // check data before it sended to our server
    for (let key in newClient) {
      if (key === "country") continue;
      if (key === "numberrange") continue;
      if (newClient[`${key}`] === "") return;
    }

    // console.log('client : ', newClient)

    // POST : kirim data ke server
    Axios.post(URL, newClient)
      .then((postres) => {
        console.log("post-res : ", postres);

        // get new data
        Axios.get(URL).then((getres) => {
          this.setState({ clients: getres.data });
        });
      })
      .catch((error) => console.log(error));
  };

  onButtonDelete = (id) => {
    this.setState({ delete: true, deleteData: id });

    // Axios.delete(URL + `/${id}`)
    //   .then((respond) => {
    //     console.log(respond);

    //     // get new data
    //     Axios.get(URL).then((getres) => {
    //       this.setState({ clients: getres.data });
    //     });
    //   })
    //   .catch((error) => console.log(error));
  };

  onButtonEdit = (item) => {
    this.setState({
      id: item.id,
      editClient: {
        name: item.name,
        numberrange: item.numberrange,
        email: item.email,
        id: item.id,
        phone: item.phone,
        currency: item.currency,
        address: item.address,
        country: item.country,
        postalZip: item.postalZip,
        region: item.region,
      },
    });
  };

  onButtonCancel = () => {
    this.setState({ id: null });
  };

  onButtonSave = (prevData) => {
    // check if data has been updated
    console.log(prevData);
    console.log(this.state.editClient);
    if (
      JSON.stringify(prevData) ===
      JSON.stringify({ ...this.state.editClient, id: this.state.id })
    ) {
      this.setState({ id: null });
      return;
    }

    // save cofirm
    this.setState({ save: true });
    // console.log(this.state.editClient)
  };

  closeConfirm = () => {
    this.setState({ id: null });
    this.setState({ save: false });
    this.setState({ delete: false });
  };

  saveConfirm = () => {
    this.setState({ save: false });
    Axios.put(URL + `/${this.state.id}`, this.state.editClient)
      .then((respond) => {
        console.log("respond : ", respond);
        // get new data
        Axios.get(URL).then((getres) => {
          this.setState({
            clients: getres.data,
            id: null,
            editClient: {
              name: "",
              email: "",
              phone: "",
              currency: "",
              address: "",
              postalZip: "",
              region: "",
            },
          });
        });
      })
      .catch((error) => console.log(error));
  };

  deleteConfirm = () => {
    this.setState({ delete: false });
    console.log(this.state.deleteData);

    Axios.delete(URL + `/${this.state.deleteData}`)
      .then((respond) => {
        console.log(respond);

        // get new data
        Axios.get(URL).then((getres) => {
          this.setState({ clients: getres.data });
        });
      })
      .catch((error) => console.log(error));

    this.setState({ deleteData: null });
  };
  render() {
    // console.log('client : ', this.state.clients)

    return (
      <div className="container">
        <h1>Data Clients</h1>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Currency</th>
              <th>Address</th>
              <th>Post/Zip</th>
              <th>Region</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderClientList()}
            <tr>
              <td>#</td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="alex..."
                  onChange={(event) =>
                    this.setState({ name: event.target.value })
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="+6281-..."
                  onChange={(event) =>
                    this.setState({ phone: event.target.value })
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="$20.00..."
                  onChange={(event) =>
                    this.setState({ currency: event.target.value })
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="St.Wasington..."
                  onChange={(event) =>
                    this.setState({ address: event.target.value })
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="5679..."
                  onChange={(event) =>
                    this.setState({ post: event.target.value })
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="USA..."
                  onChange={(event) =>
                    this.setState({ region: event.target.value })
                  }
                />
              </td>
              <td>
                <Button variant="primary" onClick={this.onButtonSubmit}>
                  Submit
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* ---------Spinner---------- */}
        <Modal
          show={this.state.loading}
          style={{ width: "20%", marginLeft: "40%", marginTop: "25%" }}
        >
          <Button variant="dark" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </Modal>

        {/* ---------Save---------- */}
        <Modal
          show={this.state.save}
          style={{ width: "20%", marginLeft: "40%" }}
        >
          <Modal.Header closeButton onClick={this.closeConfirm}>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>

          {/* <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body> */}

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeConfirm}>
              Close
            </Button>
            <Button variant="primary" onClick={this.saveConfirm}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ---------Delete---------- */}
        <Modal
          show={this.state.delete}
          style={{ width: "20%", marginLeft: "40%" }}
        >
          <Modal.Header closeButton onClick={this.closeConfirm}>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>

          {/* <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body> */}

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeConfirm}>
              Close
            </Button>
            <Button variant="primary" onClick={this.deleteConfirm}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// export
export default Main;
