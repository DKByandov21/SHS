import React, { Component } from "react";
import Modal from 'react-modal';
import axios from 'axios';

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
        id: null, // Add id field for tracking the form to edit
        title: "",
        description: "",
        content: "",
        date: "", 
      },
      forms: [],
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  openEditModal = (formData) => {
    this.setState({
      modalIsOpen: true,
      formData: { ...formData },
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSaveClick = async () => {
    const { formData, forms } = this.state;

    const existingFormIndex = forms.findIndex(
      (form) => form.id === formData.id
    );

    if (existingFormIndex !== -1) {
      // Update existing form
      const updatedForms = [...forms];
      updatedForms[existingFormIndex] = formData;

      this.setState({
        modalIsOpen: false,
        formData: {
          id: null,
          title: "",
          description: "",
          content: "",
          date: "",
        },
        forms: updatedForms,
      });
    } else {
      // Add new form
      try {
        const response = await axios.post('http://localhost:3001/forms', formData);

        this.setState((prevState) => ({
          modalIsOpen: false,
          formData: {
            id: null,
            title: "",
            description: "",
            content: "",
            date: "",
          },
          forms: [...prevState.forms, response.data],
        }));
      } catch (error) {
        console.error('Error saving form data:', error);
      }
    }
  };

  handleRemoveClick = async () => {
    const { forms } = this.state;
    if (forms.length > 0) {
      const deletedForm = forms[forms.length - 1];

      // Send a DELETE request to your server to remove the last form
      try {
        await axios.delete(`http://localhost:3001/forms/${deletedForm.id}`);

        // Update state if the request is successful
        this.setState((prevState) => ({
          forms: prevState.forms.slice(0, -1),
        }));
      } catch (error) {
        console.error('Error removing form data:', error);
      }
    }
  };

  async componentDidMount() {
    // Fetch existing forms from the server on component mount
    try {
      const response = await axios.get('http://localhost:3001/forms');
      this.setState({
        forms: response.data,
      });
    } catch (error) {
      console.error('Error fetching forms:', error);
    }
  }

  render() {
    const { modalIsOpen, formData, forms } = this.state;

    return (
      <>
        <div className="blogs">
          <button className="form-button" onClick={this.openModal}>Add New</button>
          <button className="form-button-red" onClick={this.handleRemoveClick}>Remove Last</button>
          {forms &&
            forms.map((record, index) => (
              <div className="issue" key={index}>
                <h3>{record.title}</h3>
                <p>{record.description}</p>
                <p>{record.date}</p>
                <button onClick={() => this.openEditModal(record)}>Edit</button>
              </div>
            ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <div className="Modal">
            <h2>{formData.id ? 'Edit' : 'Add'} a Blog Post</h2>
            <br />
            <form>
              <input
                placeholder="title"
                type="text"
                name="title"
                value={formData["title"]}
                onChange={this.handleInputChange}
              />
              <br />
              <textarea
                rows="2" cols="80"
                placeholder="short-description"
                type="text"
                className="content-form"
                name="description"
                value={formData["description"]}
                onChange={this.handleInputChange}
              />
              <br />
              <textarea
                rows="5" cols="80"
                type="text"
                name="content"
                placeholder="content"
                className="content-form"
                value={formData["content"]}
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
