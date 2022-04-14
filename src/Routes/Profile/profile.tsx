import styled from "styled-components";
import { Rules } from "../../components/Instructions/instructions";

export const ProfileCard=styled(Rules)``;
export const Profile = () => {
  const loginDetails=localStorage.getItem('loginDetails')
  const{name,email}=loginDetails?JSON.parse(loginDetails):{
    name:'',
    email:'',
  };
  return <ProfileCard>
          <h1>Name: {name}</h1>
          <h2>EmailId:{email}</h2>
        </ProfileCard>;
};
