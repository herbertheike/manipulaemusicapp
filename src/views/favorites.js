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
} from "../style/style";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CardMusic from "../components/cardMusic";
import { Link } from "react-router-dom";
import { deleteFav } from "../actions";
import ReactPaginate from 'react-paginate'; 
export class favorites extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", fav: false, pagecount:1,currentpage:0, musicsperpage:10, initialState:null};
  }

  componentDidMount = async () => {
    this.pagination();
  };

  searchComponent = async (e) => {
    var term = this.state.search;
    if (e.keyCode === 13) {
      if (term === "") {
       //manter lista favoritos
      } else {
        //buscar nos favoritos
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
  
  
  pagination=()=>{
    let pgc = 0;
    if(this.props.favLength === 0){
      pgc = 100 / this.state.musicsperpage;
      this.setState({pagecount:pgc}) 
      console.log(this.state.pagecount+"001")
    }else{
    pgc = this.props.favLength / this.state.musicsperpage;
    this.setState({pagecount:pgc}) 
    console.log(this.state.pagecount+"002")
    }
  }

  handlePage=(e)=>{
    this.pagination();
    let selected = e.selected;
    console.log(selected)
    this.setState({currentpage:selected})
  }

  render() {
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
                {this.props.favArr.slice(this.state.currentpage*this.state.musicsperpage,(this.state.currentpage+1)*this.state.musicsperpage).map((item) => {
                  return (
                    <ListItem>
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
                      <Button onClick={()=>
                      this.delete_fav(this.props.favArr, this.props.favArr.indexOf(item))
                    }>
                          Excluir Musica
                      </Button>
                      </ListItem>
                  );
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

const mapStateToProps = (state) => ({ favArr: state.favArr, favLength:state.favLength});

export default connect(mapStateToProps, {deleteFav})(favorites);
