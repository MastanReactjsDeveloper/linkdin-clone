import React from 'react'
import styled from "styled-components"

const Main = (props) => {
    return <Container>
        <ShareBox>
        <div>
            <img src="/images/user.svg" alt="" />
            <button>Share  a post</button>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
                <span>Write article</span>
            </button>
        </div>
        </ShareBox>
       
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
        border:1px solid rgba(0,0,0,0.15)
    }
    }
   
  }
  `;

export default Main