import React from 'react'
import styled from "styled-components"

const Main = (props) => {
    return <Container>

        <ShareBox>

            <div>
                <img src="/images/user.svg" alt="" />
                <button>Start a post</button>
            </div>
            <div>
                <button>
                    <svg style={{ color: "blue" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                    </svg>
                    <span>Photo</span>
                </button>
                <button >
                    <svg style={{ color: "green" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                        <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                    <span>Vidoes</span>
                </button>
                <button>
                    <svg style={{ color: "red" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calendar2-event-fill" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                    </svg>
                    <span>Events</span>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                    <span>Write article</span>
                </button>
            </div>
        </ShareBox>
        <Article>
            <SharedActor>
                <a >
                    <img src="/images/user.svg" alt="" />
                    <div>
                        <span>title</span>
                        <span>info</span>
                        <span>Date</span>
                    </div>
                </a>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </button>
            </SharedActor>
            <Discription>
                Description
            </Discription>
            <SharedImg>
                <a>
                    <img src="/images/shareImage.jpg" alt="" />
                </a>
            </SharedImg>
            <SocialCounts>
                <li>
                    <button>
                        <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                        <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                    <span>75</span>
                    </button>
                </li>
                <li><a >2 commnets</a></li>
            </SocialCounts>
          <SocialActions>
          <button>
                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                <span>Like</span>
            </button>
            <button>
                <svg style={{ color: "blue" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <span>comments</span>
            </button>
            <button>
                <svg style={{ color: "blue" }}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                </svg>
                <span>Share</span>
            </button>
            <button>
                <svg style={{ color: "blue" }}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
                <span>send</span>
            </button>
          </SocialActions>
        </Article>
    </Container>;
};

const Container = styled.div`
    grid-area: main;
  `;

const CommonCard = styled.div`
  text-align:center;
  overflow: hidden;
  margin-bottom:8px ;
  background-color:#fff;
  border-radius:5px;
  position:relative;
  border:none;
  box-shadow:0 0 0 1px rgb(0 0 0/150),0 0 0 rgb(0 0 0 /208)
  `;

const ShareBox = styled(CommonCard)`
  display:flex;
  flex-direction:column;
  color:#958b7b;
  margin:0 0 8px;
  background-color:white;
  div{
    button{
        outline:none;
        color:rgba(0,0,0.06);
        font-size:14px;
        line-height:1.5;
        background-color:transparent;
        border:none;
        display:flex;
        align-items:center;
        font-weight:600;
    }
    &:first-child{
        display:flex;
        align-items:center;
        padding:8px 16px 8px 16px;
        img{
        width:40px;
        border-radius:50%;
        margin-right:8px;
    }
    button{
        margin:4px 0px;
        flex-grow:1;
        border-radius:35px;
        padding-left:16px;
        border:1px solid rgba(0,0,0,0.15);
        background-color:white;
        text-align:left;
    }
    }
   &:nth-child(2){
     display: flex;
     flex-wrap:wrap;
     justify-content:space-around;
     padding-bottom:4px;
     button{
        img{
            margin:0 4px 0 -2px;
        }
        span{
            color:#70b5f9;
            padding:5px;
        }
     }
   }
  }
  `;
const Article = styled(CommonCard)`
  padding:0;
  margin:0 0 8px;
  overflow: visible;
  `;

const SharedActor = styled.div`
padding:40px;
flex-wrap:nowrap;
padding:12px 16px 0px;
margin-bottom:8px;
align-items:center;
display:flex;
a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display: flex;
    text-decoration:none;

    img{
        width:48px;
        height:48px;
    }
    & > div{
        display:flex;
        flex-direction:column;
        flex-grow:1;
        flex-basis:0;
        margin-left:10px;
        overflow:hidden;
        span{
            text-align:left;
            &:first-child{
                font-size:14px;
                font-weight:700;
                color:rgba(0,0,0,1);
            }
            &:nth-child(n+1){
                font-size:12px;
                color:rgba(0,0,0,0.6);
            }
        }
    }
}
button{
    position:absolute;
    right:12px;
    top:0px;
    background:transparent;
    border:none;
    outline:none;
}
`;

const Discription = styled.div`
padding: 0 16px;
overflow: hidden;
color:rgba(0,0,0,0.9);
font-size:14px;
text-align:left;

`;

const SharedImg = styled.div`
margin-top:8px;
width:100%;
display: block;
position:relative;
background-color:#f9fafb;
img{
    object-fit:contain;
    width:100%;
    height:100%;

}
`;
const SocialCounts = styled.div`
line-height:1.3;
display:flex;
align-items:flex-start;
overflow:auto;
margin:0 16px;
padding:8px 0;
border-bottom:1px solid #e9e5df;
list-style :none;
li{
    margin-right:5px;
    font-size:12px;
    button{
        display:flex;
    }
}
`;
const SocialActions=styled.div`
align-items:center;
display:flex;
justify-content:flex-start;
margin:0px;
min-height:40px;
padding:4px 8px;
button{
   display:inline-flex;
   align-items:center;
   padding:8px;
   color:#0a66c2; 
   padding:4px;
   @media(min-width:760px){
    span{
        margin-left:8px;
    }
   }
}
`;
export default Main