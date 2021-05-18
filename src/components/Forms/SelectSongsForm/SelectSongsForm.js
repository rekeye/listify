import React from "react";
import { Formik, Form, FieldArray } from "formik";
import {
  Container,
  FlexEnd,
  Image,
  Btn,
  Checkbox,
  Grid,
} from "./SelectSongsForm.styles";

const SelectSongsForm = ({
  artists,
  chosenArtists,
  setChosenSeeds,
  setShowSelect,
}) => (
  <>
    <h3>Choose artists to base your playlists off of</h3>
    <Formik
      initialValues={{
        chosenArtists: chosenArtists,
      }}
      onSubmit={(chosenArtists) => {
        setChosenSeeds(chosenArtists);
        setShowSelect(false);
      }}>
      {() => (
        <Form>
          <FieldArray
            name='artists'
            render={() => (
              <Grid>
                {artists.length > 0 &&
                  artists.map(({ uri, images, name }) => (
                    <Container key={uri}>
                      <div>
                        <Image src={images[2].url} alt={name} />
                        <h4>{name}</h4>
                      </div>
                      <Checkbox name={`chosenArtists`} value={uri} />
                    </Container>
                  ))}
              </Grid>
            )}
          />
          <FlexEnd>
            <Btn type='submit'>Select</Btn>
          </FlexEnd>
        </Form>
      )}
    </Formik>
  </>
);

export default SelectSongsForm;
