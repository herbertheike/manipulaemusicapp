import styled from "styled-components";

export const Container = styled.div`
  display: inline;
  width: 600px;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Section = styled.div`
align-items:center;
  background-color: rgb(18, 18, 18);
  background-image: linear-gradient(
    180deg,
    rgba(141, 255, 156, 1) 0%,
    rgba(197, 255, 95, 1) 50%,
    rgba(0, 128, 90, 1) 100%
  );
`;
//rgba(243,243,72,1) 0%, rgba(65,170,111,0.43) 100%)
export const Grid = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  justify-content: center;
  list-style: none;
  margin: 0px;
  padding: 10px;
  position: relative;
  width: 100%;
  max-width: 520px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding: 0.25rem;
`;

export const Topbar = styled.header`
  background-color: #1976d2;
  background-image: radial-gradient(
    circle,
    rgba(108, 160, 229, 1) 0%,
    rgba(89, 103, 255, 1) 100%
  );
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
`;
export const AudioPlayer = styled.audio`
  padding: 10px;
  width: 320px;
  height: 30px;
`;
export const SearchContainer = styled.div`
padding: 0px 16px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
position:relative;
background-color: rgba(108,160,229, 1);

  &:focus {
    background: rgba(108,160,229, 1);
    color: white;
    outline: none;
    width: 20ch;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &::placeholder {
    color: white
  }
`;
export const SearchInput = styled.input`
padding: 8px 8px 8px;
width: 12ch;
transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
font: inherit; 
letter-spacing: inherit; 
color: gray; 
border: 0px; 
box-sizing: content-box;
background-color: rgba(108,160,229, 1); 
height: 1.4375em;
margin: 0px;
display: block;
border: none;
border-radius:0.3rem;
&:focus {
    background: rgba(108,160,229, 1);
    color: white;
    outline: none;
    width: 20ch;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

export const Title = styled.title`
    display:block;
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
    padding-left 1rem;
`;
export const Menu = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    min-height: 56px;
`;
export const SubTitle = styled.div`
margin: 0;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
`;
export const Label = styled.div`
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75;
    color: rgba(48, 48, 48, 0.7);    
`;
export const Tag = styled.div`
    margin: 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.75;
    color: rgba(36, 36, 36, 0.7);
`;
export const CardContainer = styled.div`
background-color: white;
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
border-radius: 4px;
box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
overflow: hidden;
display: flex;
`;
export const CardContent = styled.div`
    padding: 12px;
    flex: 1 0 auto;
`;
export const AlbumCover = styled.img`
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height:10rem;
    object-fit: cover;
    max-width: 10rem;
`;