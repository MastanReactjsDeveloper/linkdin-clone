import React from 'react';
import styled from "styled-components";

const PostModal = () => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>
                        Creating a post
                    </h2>
                    <button > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg></button>
                </Header>
                <ShareContent>
                    <UserInfo>
                        <img src="/images/user.svg" alt="" />
                        <span>name</span>
                    </UserInfo>
                </ShareContent>
                <ShareCreation>
                    <AttachAssets>
                        <AssetButton>
                          <img src="/images/image-upload.svg" alt="" />
                        </AssetButton>
                        <AssetButton>
                           <img src="/images/video-Icon.svg" alt="" />
                        </AssetButton>
                        <AssetButton>
                           <img src="/images/message-type.svg" alt="" />
                        </AssetButton>
                    </AttachAssets>
                </ShareCreation>
            </Content>
        </Container>
    )
}
const Container = styled.div`
position: fixed;
top :0px ;
left:0px;
right: 0;
bottom: 0;
z-index:9999;
color:black;
background-color:rgba(0,0,0,0.8);
`;

const Content = styled.div`
width: 100%;
max-width:558px;
background-color:white;
max-height:90%;
overflow: initial;
border-radius:5px;
position:relative;
display;flex;
flex-direction:column;
top:32px;
margin:0 auto;

`;

const Header = styled.div`
display: black;
padding:16px 20px;
border-bottom: 1px solid rgba(0,0,0,0.15);
font-size:16px;
line-height:1.5;
color:rgba(0,0,0,0.6);
font-weight:400;
display: flex;
justify-content:space-between;
align-item:center;
button{
margin-top:-10px;
 height: 40px;
 width:40px;
 min-width:auto;
 color:rgba(0,0,0,0.15)
 svg{
    
    pointer-events:none;
 }
}
`;

const ShareContent = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
overflow-y:auto;
vertical-align:baseline;
background: transparent;
margin-top:-15px
/* border:1px solid black; */
`;

const UserInfo = styled.div`
border-top:1px solid rgba(0,0,0,0.15);
display:flex;
align-items:center;
padding:12px 24px;
background-color:white;

svg,img{
    width:48px;
    height: 48px;
    background-clip:content-box;
    border-radius:50%;
}
span{
    font-weight:600;
    font-size:16px;
    line-height:1.5;
    margin-left:5px;
    color:black;
} 
`;
const ShareCreation = styled.div`
display: flex;
justify-content:space-between;
padding:12px 24px 12px 14px;
margin-left:5px;
`;
const AttachAssets = styled.div`
align-items:center;
display: flex;
padding-right:8px;
$(AssetButton){
    width: 40px;
    
}
`;
const AssetButton = styled.div`
display: flex;
align-items:center;
height:40px;
width: 40px;
min-width:auto;
/* color:rgba(0,0,0,0.5); */
background-color:rgba(0,0,0,0.2);
margin-left:5px;
`;

export default PostModal