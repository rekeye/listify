import React, { useState } from "react";
import PropTypes from "prop-types";
import SelectSongsForm from "../../components/Forms/SelectSongsForm/SelectSongsForm";
import CreatePlaylistForm from "../../components/Forms/CreatePlaylistForm/CreatePlaylistForm";

const PlaylistCreator = ({ topArtists }) => {
  const [chosenSeeds, setChosenSeeds] = useState();
  const [showSelect, setShowSelect] = useState(true);

  return (
    <>
      {chosenSeeds && !showSelect ? (
        <CreatePlaylistForm setShowSelect={setShowSelect} />
      ) : (
        <SelectSongsForm
          artists={topArtists}
          setChosenSeeds={setChosenSeeds}
          setShowSelect={setShowSelect}
        />
      )}
    </>
  );
};

PlaylistCreator.propTypes = {
  topArtists: PropTypes.arrayOf(PropTypes.object),
};

PlaylistCreator.defaultProps = {
  topArtists: [],
};

export default PlaylistCreator;
