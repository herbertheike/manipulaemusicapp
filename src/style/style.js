import styled from "styled-components";

export const Container = styled.div`
  display: inline;
  width: 100vh;
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
  background-color: rgb(18, 18, 18);
  min-height: 100vh;
  background-image: linear-gradient(180deg, #41295a 0%, #2f0743 100%);
`;
//rgba(243,243,72,1) 0%, rgba(65,170,111,0.43) 100%)
export const Grid = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0px;
  padding: 10px;
  position: relative;
  max-width: 100%;
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
  padding-bottom: 0.25rem;
`;

export const Topbar = styled.header`
  background-color: #1976d2;
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
`;
export const AudioPlayer = styled.audio`
  width: 320px;
  height: 30px;
`;
export const SearchContainer = styled.div`
  padding: 0px 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #434343;

  &:focus {
    background: #434343;
    color: white;
    outline: none;
    width: 20ch;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &::placeholder {
    color: white;
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
  background-color: transparent;
  height: 1.4375em;
  margin: 0px;
  display: block;
  border: none;
  border-radius: 0.3rem;
  &:focus {
    background: transparent;
    color: white;
    outline: none;
    width: 20ch;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

export const Title = styled.title`
    display:contents;
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
  justify-content: space-around;
`;
export const SubTitle = styled.div`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const Label = styled.label`
  margin: 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.75rem;
  color: rgba(48, 48, 48, 0.7);
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 320px;
  &:hover {
    display: block;
    overflow: visible;
    white-space: wrap;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
export const Tag = styled.div`
  margin: 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.75;
  color: rgba(36, 36, 36, 0.7);
`;
export const CardContainer = styled.div`
  background-color: white;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
  overflow: hidden;
  display: flex;
  margin-right: 0.25rem;
  max-width: 600px;
  flex-direction: row;
`;
export const CardContent = styled.div`
  padding: 11px;
  flex: 1 0;
  flex-direction: column;
  max-width: 320px;
`;
export const AlbumCover = styled.img`
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  height: 8rem;
  object-fit: cover;
  max-width: 10rem;
`;
export const Button = styled.button`
  display: flex;
  padding-left: 16px;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-image: linear-gradient(130deg, #232526, #414345);
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  vertical-align: middle;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.6rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  width: 120px;
  height: 8rem;
  padding: 5px 15px;
  border-radius: 4px;
  border: 0px;
  color: rgb(255, 255, 255);
  &:hover {
    background-image: linear-gradient(150deg, #434343, #000000);
    color: rgb(255, 255, 255);
  }
`;
export const A = styled.a`
  color: rgb(0, 0, 0);
  text-decoration: none;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(105, 153, 232);
  }
  &:after {
    color: rgb(123, 456, 231);
  }
`;
