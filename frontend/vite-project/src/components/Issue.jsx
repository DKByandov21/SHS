import React, { Component } from "react";
import Modal from 'react-modal';
import forms from "../data/forms.json"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '100px',
    border: '1px solid black',
    borderRadius: '2rem',
  },
};

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      formData: {
        email: "",
        password: "",
      },
      forms: JSON.parse(localStorage.getItem("forms")) || [],
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // Note: 'subtitle' was not declared in the original code
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSaveClick = () => {
    const { formData, forms } = this.state;
    const updatedForms = [...forms, formData];
    localStorage.setItem("forms", JSON.stringify(updatedForms));
    this.setState({
      modalIsOpen: false,
      formData: {
        email: "",
        password: "",
      },
      forms: updatedForms,
    });
  };

  handleRemoveClick = () => {
    const { forms } = this.state;
    if (forms.length > 0) {
      const updatedForms = forms.slice(0, -1);
      localStorage.setItem("forms", JSON.stringify(updatedForms));
      this.setState({
        forms: updatedForms,
      });
    }
  };

  render() {
    const { modalIsOpen, formData, forms } = this.state;

    return (
      <>
        <div className="blogs">

                <button className="form-button" onClick={this.openModal}>Add New</button>
                <button className="form-button" onClick={this.handleRemoveClick}>Remove Last</button>
          {forms &&
            forms.map((record, index) => (
              <div className="issue" key={index}>
                <h3>{record.password}</h3>
                <p>{record.email}</p>
              </div>
            ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <h2>Tell us about your problem...</h2>
          
          <div className="Modal">
            <form>
              <label>Title:</label>
              <input
                type="text"
                name="email"
                value={formData["email"]}
                onChange={this.handleInputChange}
              />
              <br />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData["password"]}
                onChange={this.handleInputChange}
              />
              <label>Title:</label>
              <input
                type="text"
                name="email"
                value={formData["email"]}
                onChange={this.handleInputChange}
              />
              <br />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData["password"]}
                onChange={this.handleInputChange}
              />
              <label>Title:</label>
              <input
                type="text"
                name="email"
                value={formData["email"]}
                onChange={this.handleInputChange}
              />
              <br />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData["password"]}
                onChange={this.handleInputChange}
              />
              <br />
              <button className="btn-modal-save" onClick={this.handleSaveClick}>Save</button>
              <button className="btn-modal-close" onClick={this.closeModal}>Close</button>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default Issue;
