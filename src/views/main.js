import React, { Component } from "react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import api from '../services/api';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import moment from 'moment';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
        song:[]
    }
  }

  componentDidMount = async () =>{
        await api.get("/chart/0/tracks",
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            }
        })
    .then((response) => this.setState({song:response.data.data}))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });

          
  }

  render() {
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));

    const Search = styled("div")(({ theme }) => ({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "12ch",
          "&:focus": {
            width: "20ch",
          },
        },
      },
    }));
    const theme = {};

    return (
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                App Musica Manipulaê
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper>
                <List
                  sx={{
                    padding: 5,
                    width: "100%",
                    maxWidth: 420,
                    bgcolor: "background.paper",
                  }}
                >
                  {this.state.song.map((item) => {
                      //console.log(this.state.song)
                      return(
                    <ListItem key={item.id} disableGutters>

                      <Card sx={{ display: 'flex',width:'100%', justifyContent:'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {item.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {item.artist.name}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">
                                    {moment.utc(item.duration*1000).format("mm:ss")}min
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton aria-label="play/pause">
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={item.album.cover}
                            alt="Album cover"
                        />
                        </Card>

                    </ListItem>
                      )
                  })}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default Main;
