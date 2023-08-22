import React, { useState } from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player"
import { connect } from 'react-redux';
const PostModal = (props) => {
    const [editorText, setEditor] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");
    const hadleChange = (e) => {
        const image = e.target.files[0];
        if (image === "" || image === undefined) {
            alert(`not an image,the profile is a ${typeof image}`);
            return;

        } setShareImage(image);
    }

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);

    }


    const reset = (e) => {
        setEditor("");
        setShareImage("")
        setVideoLink("");
        setAssetArea("")
        props.handleClick(e)
    }
    return (
        <>
            {props.showModel === "open" &&
                <Container>
                    <Content>
                        <Header>
                            <h2>
                                Creating a post
                            </h2>
                            <button onClick={(event) => reset(event)} > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg></button>
                        </Header>
                        <ShareContent>
                            <UserInfo>
                                {props.user.photoURL ? (<img src={props.user.photoURL} />) :
                                    (<img src="/images/user.svg" alt="" />)}
                                <span>{props.user.displayName}</span>
                            </UserInfo>
                            <Editor>

                                <textarea value={editorText} onChange={(e) => setEditor(e.target.value)} placeholder="what do you want to talk about ?"
                                ></textarea>
                                {
                                    assetArea === "image" ? (

                                        <UploadImage>
                                            <input type='file' accept='image/gif,image/jpeg,image/png' name='image'
                                                id="file"
                                                style={{ display: "none" }}
                                                onChange={hadleChange}
                                            />
                                            <p>
                                                <label htmlFor="file"

                                                >select an image to share

                                                </label>
                                            </p>
                                            {shareImage && <img src={URL.createObjectURL(shareImage)} />}
                                        </UploadImage>
                                    ) : assetArea === "media" && (
                                        <>
                                            <input type="text" placeholder='please input a video link' value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />
                                            {
                                                videoLink && (<ReactPlayer width={"100%"} url={videoLink} />)
                                            }
                                        </>)}
                            </Editor>
                        </ShareContent>
                        <ShareCreation>
                            <AttachAssets>
                                <AssetButton onClick={() => switchAssetArea("image")}>
                                    <img src="/images/image-upload.svg" alt="" />
                                </AssetButton>
                                <AssetButton onClick={() => switchAssetArea("media")}>
                                    <img src="/images/video-Icon.svg" alt="" />
                                </AssetButton>
                                <ShareComment>
                                    <AssetButton>
                                        <img src="/images/message-type.svg" alt="" />
                                        <span>anyone</span>
                                    </AssetButton>
                                </ShareComment>
                                <PostButton disabled={!editorText ? true : false}>
                                    Post
                                </PostButton>
                            </AttachAssets>
                        </ShareCreation>
                    </Content>
                </Container>
            } </>
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
animation:fadeIn 0.60s;
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
 cursor:pointer;
 color:rgba(0,0,0,0.15)
 svg,img{
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
margin-left:10px;
`;

const ShareComment = styled.div`
padding-left:10px;
margin-right:auto;
border-left:2px solid rgba(0,0,0,0.15);
/* background-color:rgba(0,0,0,0.2); */
$(AssetButton){
    svg{
        margin-right:5px
    }
}
`;

const PostButton = styled.div`
min-width:60px;
margin-left:250px;
border-radius:30%;
padding-left:18px;
width:30px;
height: 30px;
padding-top:15px;
background:${(props) => (props.disabled ? "rgba(0,0,0,0.6)" : "blue")};
color:${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "white")};
&:hover{
   cursor:pointer;
   background:${(props) => props.disabled ? "rgba(0,0,0,0.08)" : "#004182"};
   
}
`;

const Editor = styled.div`
padding:10px  24px;
textarea{
    width:100%;
    min-height:100px;
    resize:none;
}
input{
    width:100%;
    height:35px;
    font-size:16px;
    margin-bottom:20px;

}
`;

const UploadImage = styled.div`
text-align:center;
img{
    width: 100%;
    height: 100px;
}
`;

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}
const mapDispatchToProps = (dispatch) => {

}
export default connect(mapStateToProps, mapDispatchToProps)(PostModal)