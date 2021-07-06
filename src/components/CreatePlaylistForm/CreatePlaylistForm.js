import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, FieldArray } from "formik";
import {
  Container,
  TextField,
  FlexEnd,
  Image,
  Btn,
  Checkbox,
  Grid,
} from "./CreatePlaylistForm.styles";

const validateName = (value) => (!value ? "Required!" : "");
const CreatePlaylistForm = ({ artists, client }) => (
  <>
    <h3>Choose artists to base your playlists off of</h3>
    <Formik
      initialValues={{
        name: "",
        desc: "",
        artists: [],
      }}
      onSubmit={async (chosen) => {
        const id = await client
          .createPlaylist(chosen.name, { description: chosen.desc })
          .then(({ body: { id } }) => id)
          .catch((err) => {
            console.log("Something went wrong!", err);
          });

        client
          .getRecommendations({
            seed_artists: chosen.artists,
            limit: 50,
          })
          .then(({ body: { tracks } }) => {
            const trackUris = tracks.map((track) => track.uri);
            return client.addTracksToPlaylist({ id, trackUris });
          })
          .then(() =>
            client.uploadCustomPlaylistCoverImage(
              id,
              "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AEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA00AAAAGAAAAAAAAAAAAAAEsAAABLAAAAAwAbABpAHMAdABpAGYAeQAtAGkAYwBvAG4AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAASwAAAEsAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAEsAAAAAFJnaHRsb25nAAABLAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAABLAAAAABSZ2h0bG9uZwAAASwAAAADdXJsVEVYVAAAAAEAAAAAAABudWxsVEVYVAAAAAEAAAAAAABNc2dlVEVYVAAAAAEAAAAAAAZhbHRUYWdURVhUAAAAAQAAAAAADmNlbGxUZXh0SXNIVE1MYm9vbAEAAAAIY2VsbFRleHRURVhUAAAAAQAAAAAACWhvcnpBbGlnbmVudW0AAAAPRVNsaWNlSG9yekFs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bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA1VDE0OjQxOjU5KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wNVQxNDo1NzowNyswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0wNVQxNDo1NzowNyswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6TGVnYWN5SVBUQ0RpZ2VzdD0iMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Y2QxZTIzZjQtOTYzYi02NjRlLWIwNzQtOTM4NzMwZjUzYzlmIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzBjMTljNDUtZGQ5MC0xMWViLWFjY2UtZGJhZDc1MjY4NDQzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDZiM2NiNGQtZmEyNC1jMDQwLTkxMGUtYmFkZmU0M2RmN2I4Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NmIzY2I0ZC1mYTI0LWMwNDAtOTEwZS1iYWRmZTQzZGY3YjgiIHN0RXZ0OndoZW49IjIwMjEtMDctMDVUMTQ6NDE6NTkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL3BuZyB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZGMzNmE2YS1iZGQ3LWQxNDEtOTM0Ny0zM2U0M2Y1NDIzNjMiIHN0RXZ0OndoZW49IjIwMjEtMDctMDVUMTQ6NTU6MzMrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2QxZTIzZjQtOTYzYi02NjRlLWIwNzQtOTM4NzMwZjUzYzlmIiBzdEV2dDp3aGVuPSIyMDIxLTA3LTA1VDE0OjU3OjA3KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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"
            )
          )
          .catch((err) => {
            console.log("Something went wrong!", err);
          });
      }}>
      {() => (
        <Form>
          <label htmlFor='name'>
            <h4>Name of the playlist: </h4>
          </label>
          <TextField
            id='name'
            name='name'
            placeholder='Listify playlist'
            validate={validateName}
          />

          <label htmlFor='desc'>
            <h4>Description:</h4>
          </label>
          <TextField
            id='desc'
            name='desc'
            placeholder='A playlist automatically generated by listify recommendations'
          />

          <FieldArray
            name='artists'
            render={() => (
              <Grid>
                {artists.length > 0 &&
                  artists.map(({ id, images, name }) => (
                    <Container key={id}>
                      <div>
                        <Image src={images[2].url} alt={name} />
                        <h4>{name}</h4>
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
  </>
);

CreatePlaylistForm.propTypes = {
  artists: PropTypes.array,
  client: PropTypes.object,
};

export default CreatePlaylistForm;
