import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Formik, Form, FieldArray } from "formik";
import {
  Container,
  TextFieldContainer,
  TextField,
  FlexEnd,
  Image,
  Btn,
  Checkbox,
  Grid,
} from "./CreateForm.styles";

const validateName = (value) => (!value ? "Required!" : "");
const CreateForm = ({
  accessToken,
  topArtists,
  setPlaylistInfo,
  setLoading,
}) => (
  <Formik
    initialValues={{
      name: "",
      desc: "A playlist automatically generated by listify recommendations",
      artists: [],
    }}
    onSubmit={({ name, desc, artists }) => {
      axios
        .post("/create-playlist-api", { accessToken, name, desc, artists })
        .then((res) => {
          setPlaylistInfo(res.data.info);
          setLoading(false);
        })
        .catch((err) => console.log("Something went wrong!", err));
      setLoading(true);
    }}>
    {() => (
      <Form>
        <h2>Create your own playlist: </h2>
        <TextFieldContainer>
          <div>
            <label htmlFor='name'>
              <h4>Name of the playlist: </h4>
            </label>
            <TextField
              id='name'
              name='name'
              placeholder='Listify playlist'
              validate={validateName}
            />
          </div>
          <div>
            <label htmlFor='desc'>
              <h4>Description:</h4>
            </label>
            <TextField
              id='desc'
              name='desc'
              placeholder='A playlist automatically generated by listify recommendations'
            />
          </div>
        </TextFieldContainer>
        <h4>Artist recommendation: (maximum five artists)</h4>
        <FieldArray
          name='artists'
          render={() => (
            <Grid>
              {topArtists.length > 0 &&
                topArtists.map(({ id, images, name }) => (
                  <Container key={id}>
                    <div>
                      <Image src={images[2].url} alt={name} />
                      <p>{name}</p>
                    </div>
                    <Checkbox name={`artists`} value={id} />
                  </Container>
                ))}
            </Grid>
          )}
        />
        <FlexEnd>
          <Btn type='submit'>Generate</Btn>
        </FlexEnd>
      </Form>
    )}
  </Formik>
);

CreateForm.propTypes = {
  artists: PropTypes.array,
  client: PropTypes.object,
  setIsSubmitted: PropTypes.func,
};

export default CreateForm;
