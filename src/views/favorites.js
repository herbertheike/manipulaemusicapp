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
  A,
} from "../style/style";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CardMusic from "../components/cardMusic";
import { Link } from "react-router-dom";
import { deleteFav } from "../actions";
export class favorites extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", fav: false };
  }

  componentDidMount = async () => {
    // this.props.getData();
  };

  searchComponent = async (e) => {
    var term = this.state.search;
    if (e.keyCode === 13) {
      if (term === "") {
        //this.props.getData();
      } else {
        // this.props.searchTerm(term);
      }
    }
  };

  handleChange = (e) => {
    var value = e.target.value;
    this.setState({ search: value });
  };

  delete_fav=(array, id)=>{
    let newarr = array.slice();
    newarr.splice(id, 1);
    this.props.deleteFav(newarr)
  }

  render() {
    return (
      <Container>
        <Topbar>
          <Menu>
            <Link to="/main">
              <MenuIcon />
            </Link>
            <Title>App Musica Manipulaê</Title>
            <SearchContainer>
              <SearchOutlinedIcon />
              <SearchInput
                type="text"
                placeholder="Buscar"
                value={this.state.search}
                onChange={(e) => this.handleChange(e)}
                //onKeyDown={this.searchComponent}
              />
            </SearchContainer>
          </Menu>
        </Topbar>
        <Grid>
          <Section style={{ alignContent: "center" }}>
            {!this.props.favArr ? (
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
                {this.props.favArr.map((item) => {
                  return (
                    <Box>
                      <CardMusic
                        id={item.id}
                        title={item.title}
                        artist={item.artist}
                        album={item.album}
                        duration={item.duration}
                        preview={item.preview}
                        albumcover={item.albumcover}
                        link={item.link}
                      />
                      <Button onClick={()=>//console.log(this.props.favArr.indexOf(item))
                      this.delete_fav(this.props.favArr, this.props.favArr.indexOf(item))
                    }>
                          Excluir Musica
                      </Button>
                    </Box>
                  );
                })}
              </List>
            )}
          </Section>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ favArr: state.favArr, id:state.id});

export default connect(mapStateToProps, {deleteFav})(favorites);
