import React from "react";
import { connect } from "react-redux";
import {
  AudioPlayer,
  SubTitle,
  Label,
  Tag,
  CardContainer,
  CardContent,
  AlbumCover,
  A,
} from "../style/style";
import moment from "moment";
import { insertFav } from "../actions";

const CardMusic = ({
  id,
  title,
  artist,
  album,
  duration,
  preview,
  albumcover,
  link,
}) => {
  return (
    <CardContainer>
      <CardContent>
        <SubTitle>
          <A href={link} target="_blank">
            {title}
          </A>
        </SubTitle>
        <Label>
          {artist} - {album}
        </Label>
        <Tag>
          {moment.utc(duration * 1000).format("mm:ss")}
          min
        </Tag>
        <AudioPlayer controls name="media" src={preview} />
      </CardContent>
      <AlbumCover src={albumcover} alt="Album cover" />
    </CardContainer>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { insertFav })(CardMusic);
