import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Container,
    Box,
    Section,
    Grid,
    List,
    ListItem,
    Topbar,
    AudioPlayer,
    Title,
    Menu,
    SearchContainer,
    SearchInput,
    SubTitle,
    Label,
    Tag,
    CardContainer,
    CardContent,
    AlbumCover,
    Button,
    A
  } from "../style/style";
  import MenuIcon from "@mui/icons-material/Menu";
  import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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
    <ListItem key={id}>
      <CardContainer>
        <CardContent>
          <SubTitle><A href={link} target="_blank">
          {title}
        </A></SubTitle>
          <Label>{artist} - {album}</Label>
          <Tag>
            {moment.utc(duration * 1000).format("mm:ss")}
            min
          </Tag>
          <AudioPlayer controls name="media" src={preview} />
        
        </CardContent>
            <AlbumCover src={albumcover} alt="Album cover" />
       
      </CardContainer>
    </ListItem>
  );
};

const mapStateToProps = (state) => ({});
//const mapDispatchToProps = { insertFav };
export default connect(mapStateToProps,{insertFav})(CardMusic);

//xport default CardMusic;
