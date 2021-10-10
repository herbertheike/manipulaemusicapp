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
import ReactPaginate from 'react-paginate'; 
import '../style/style.css'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", fav: false, pagecount:1,currentpage:0, musicsperpage:10, initialState:null};
  }

  componentDidMount =  () => {
    this.props.getData();
    this.pagination();
  };


  pagination=()=>{
    let pgc = 0;
    if(this.props.length === 0){
      pgc = 100 / this.state.musicsperpage;
      this.setState({pagecount:pgc}) 
      console.log(this.state.pagecount+"001")
    }else{
    pgc = this.props.length / this.state.musicsperpage;
    this.setState({pagecount:pgc}) 
    console.log(this.state.pagecount+"002")
    }
  }

  searchComponent = async (e) => {
    var term = this.state.search;
    if (e.keyCode === 13) {
      if (term === "") {
        this.props.getData();
        this.pagination();
        this.setState({currentpage:0})
      } else {
        this.props.searchTerm(term);
        this.pagination();
        this.setState({currentpage:0})
      }
    }
  };

  handleChange = (e) => {
    this.pagination();
    var value = e.target.value;
    this.setState({ search: value });
  };

  handlePage=(e)=>{
    this.pagination();
    let selected = e.selected;
    console.log(selected)
    this.setState({currentpage:selected})
  }

 updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }

  render() {
    console.log(this.props);
    let menulista = "menulistaoff"
    return (
      <Container>
           <Topbar>
            <Menu>  
                    <ul className='menu'>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/favorites">Favoritos</Link></li>
                    </ul>     
            <Title>Desafio Manipulaê</Title>

            
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
                  {this.props.song.data.slice(this.state.currentpage*this.state.musicsperpage,(this.state.currentpage+1)*this.state.musicsperpage).map((item) => {
                    return (
                      <ListItem key={item.id} >
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
                          >Adicionar aos favoritos
                          </Button>
                      </ListItem>
                    )
                    
                  })}
                </List>
                
              )}
              {<ReactPaginate
              pageCount={this.state.pagecount}
              pageRange={1}
              marginPagesDisplayed={1}
              onPageChange={this.handlePage}
              containerClassName={"container"}
              previousLinkClassName={'page'}
              breakClassName={'page'}
              nextLinkClassName={'page'}
              pageClassName={'page'}
              disabledClassNme={'disabled'}
              activeClassName={'active'}
              previousLabel={"<"}
              nextLabel={">"}
				      />}
            </Section>
            
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ song: state.song, favArr: state.favArr, length:state.length });

export default connect(mapStateToProps, {
  getData,
  searchTerm,
  insertFav,
})(Main);
