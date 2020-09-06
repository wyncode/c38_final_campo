import React, { useContext, useState } from 'react';
import {
  Container,
  Image,
  Button,
  Form,
  FormControl,
  FormLabel,
  FormGroup
} from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';
import './Profile.css';

const Profile = ({ history }) => {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);

  const handleChange = (event) => {
    setPreview(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  };

  const handleImage = (event) => {
    event.preventDefault();
    setLoading(true);
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);
    axios
      .post('/api/users/avatar', avatar, { withCredentials: true })
      .then((response) => {
        setCurrentUser({ ...currentUser, avatar: response.data.secure_url });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios({
        method: 'DELETE',
        url: '/api/v1/users/deleteMe',
        withCredentials: true
      });
      setLoading(false);
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      history.push('/login');
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <div id="profile">
      <NavigationBar />
      <Container className="container">
        <h1>Your Profile</h1>
        <div>
          <Image
            src={
              preview
                ? preview
                : currentUser?.avatar
                ? currentUser.avatar
                : '/images/CampoTent.png'
            }
            alt="profilePic"
            width={200}
            height={200}
            roundedCircle
          />
        </div>
        <div className="mt-4" id="images">
          <Form.Group onSubmit={handleImage}>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
            <Button id="buttons" className="mt-2" type="submit">
              <span>Save Image</span>
            </Button>
          </Form.Group>
        </div>
        <div className="mt-4">
          <FormGroup>
            <FormLabel>Name: </FormLabel>
            <FormControl type="text" placeholder="Your Name"></FormControl>
            <FormLabel>Email: </FormLabel>
            <FormControl type="text" placeholder="Your Email"></FormControl>
          </FormGroup>
        </div>
        <div>
          <Button id="buttons" variant="danger" onClick={handleDelete}>
            <span>Delete Account</span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
