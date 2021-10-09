import React, { Component } from "react";
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
} from "../style/style";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getData, searchTerm, insertFav } from "../actions";
import moment from "moment";
import CardMusic from "../components/cardMusic";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", fav: false };
  }

  componentDidMount =  () => {
    this.props.getData();
  };



  searchComponent = async (e) => {
    var term = this.state.search;
    if (e.keyCode === 13) {
      if (term === "") {
        this.props.getData();
      } else {
        this.props.searchTerm(term);
      }
    }
  };

  handleChange = (e) => {
    var value = e.target.value;
    this.setState({ search: value });
  };

  render() {
    console.log(this.props);
    return (
      <Container>
          <Topbar>
            <Menu>
              <Link to="/favorites"><MenuIcon /></Link>
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
        <Grid>
            <Section style={{ alignContent: "center" }}>
              {!this.props.song.data ? (
                <List>
                  <ListItem>
                    <CardContainer>
                      <Box>
                        <CardContent>
                          <SubTitle>Carregando...</SubTitle>
                          <Label>Carregando...</Label>
                          <Label
                            style={{ fontStyle: "italic", fontSize: "0.8rem" }}
                          >
                            Carregando...
                          </Label>
                          <Tag>Carregando...</Tag>
                        </CardContent>
                        <Box>
                          <AudioPlayer controls name="media" />
                        </Box>
                      </Box>
                      <AlbumCover
                        src={
                          "https://cdn-icons-png.flaticon.com/512/1384/1384061.png"
                        }
                        alt="Album cover"
                      />
                    </CardContainer>
                  </ListItem>
                </List>
              ) : (
                <List>
                  {this.props.song.data.map((item) => {
                    return (
                      <CardContainer>
                        <CardMusic
                        id={
                          item.id
                        }
                        title={
                          item.title
                        }
                        artist={
                          item.artist.name
                        }
                        album={
                          item.album.title
                        }
                        duration={
                          item.duration
                        }
                        preview={
                          item.preview
                        }

                        albumcover={
                          item.album.cover_big
                        }
                        link={
                          item.link
                        }
                        />
                        <Button
                      onClick={()=>this.props.insertFav(
                        item.id,
                        item.title,
                        item.artist.name,
                        item.album.title,
                        item.duration,
                        item.preview,
                        item.album.cover_big,
                        item.link
                          )
                          }
                          >s
                          Adicionar aos favoritos
                          </Button>
                          
                      </CardContainer>
                      
                    )
                    
                  })}
                </List>
                
              )}
            </Section>
            
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ song: state.song, favArr: state.favArr });

export default connect(mapStateToProps, {
  getData,
  searchTerm,
  insertFav,
})(Main);
