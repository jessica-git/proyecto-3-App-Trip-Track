// import React, { Component } from "react";
// import { Button, Form } from "react-bootstrap";

// import AuthService from "../../service/Auth_service"
// import FilesService from "../../service/Files_service";

// class ProfileEdit extends Component {
//     constructor(props) {
//         super(props);
//         this.AuthService = new AuthService();
//         this.FilesService = new FilesService();
//         this.state = {
//             disabledButton: false,
//             buttonText: "Edit",
//             user: {
//                 username: this.props.username,
//                 imgUrl: this.props.imgUrl
//             }
//         };
//     }

//     handleSubmit = () => {
//         this.props.handleSubmit(this.state.user);
//     };

//     handleInputChange = e => {
//         let { name, value } = e.target;
//         this.setState({
//             user: { ...this.state.user, [name]: value }
//         });
//     };

//     handleFileUpload = e => {
//         this.setState({ disabledButton: true, buttonText: "Uploading!.." });

//         const uploadData = new FormData();
//         uploadData.append("imgUrl", e.target.files[0]);
//         this.FilesService
//             .handleUpload(updateProfile)
//             .then(response => {
//                 console.log("Files uploaded", response.data.secure_url);
//                 this.setState({
//                     disabledButton: false,
//                     buttonText: "Edit",
//                     user: { ...this.state.user, imgUrl: response.data.secure_url }
//                 });
//             })
//             .catch(err => console.log(err));
//     };

//     render() {
//         return (
//             <Form>
//                 <Form.Group>
//                     <Form.Label>Nombre</Form.Label>
//                     <Form.Control
//                         type="text"
//                         name="username"
//                         onChange={this.handleInputChange}
//                         value={this.state.user.username}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Imagen de perfil</Form.Label>
//                     <Form.Control

//                     />
//                 </Form.Group>
//             </Form>

//         )
//     }
// }

// export default ProfileEdit
