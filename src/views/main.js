import React, { Component } from "react";
//import Container from "@mui/material/Container";
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
} from "../style/style";

import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Typography from "@mui/material/Typography";
import api from "../services/api";

import {connect} from 'react-redux'
import { getData,searchTerm } from  '../actions'
import moment from "moment";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  componentDidMount = async () => {
    this.props.getData();
  };



  searchComponent = async (e) => {
    var term = this.state.search;
    if (e.keyCode === 13) {
      if (term === '') {
        this.props.getData();
      } else {
        this.props.searchTerm(term)
      }
    }
  };
  handleChange = (e) => {
    var value = e.target.value;
    this.setState({ search: value });
  };

  render() {
    console.log(this.props)
    return (
      <Container>
        <Box>
          <Topbar>
            <Menu>
              <MenuIcon />
              <Title>App Musica Manipulaê</Title>
              <SearchContainer>
                <SearchOutlinedIcon />
                <SearchInput
                  type="text"
                  placeholder="Buscar"
                  value={this.state.search}
                  onChange={(e) => this.handleChange(e)}
                  onKeyDown={this.searchComponent}
                />
              </SearchContainer>
            </Menu>
          </Topbar>
        </Box>
        <Grid>
          <Box>
            <Section style={{alignContent: 'center'}}>
            {!this.props.song.data ?
             
             
            <List>
                <ListItem >
                  <CardContainer>
                    <Box >
                      <CardContent >
                        <SubTitle>Carregando...</SubTitle>
                        <Label>Carregando...</Label>
                        <Label style={{fontStyle:'italic', fontSize:'0.8rem'}}>Carregando...</Label>
                        <Tag>
                        Carregando...
                        </Tag>
                      </CardContent>
                      <Box>
                        <AudioPlayer
                          controls
                          name="media"
                        />
                      </Box>
                    </Box>
                    <AlbumCover
                     src={"https://cdn-icons-png.flaticon.com/512/1384/1384061.png"}
                      alt="Album cover"
                    />
                  </CardContainer>
                </ListItem>
          </List>
             :
            
            <List>
            {this.props.song.data.map(item => {
              return (
                <ListItem key={item.id}>
                  <CardContainer
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box >
                      <CardContent >
                        <SubTitle>{item.title}</SubTitle>
                        <Label>{item.artist.name}</Label>
                        <Label style={{fontStyle:'italic', fontSize:'0.8rem'}}>{item.album.title}</Label>
                        <Tag>
                          {moment.utc(item.duration * 1000).format("mm:ss")}
                          min
                        </Tag>
                      </CardContent>
                      <Box>
                        <AudioPlayer
                          controls
                          name="media"
                          src={item.preview}
                        />
                      </Box>
                    </Box>
                    <AlbumCover
                     src={item.album.cover_big}
                      alt="Album cover"
                    />
                  </CardContainer>
                </ListItem>
              );
            })}
          </List>}             
              
            </Section>
          </Box>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({song:state.song})


export default connect(
  mapStateToProps,
  {
    getData,
    searchTerm
  }
)(Main);
