import React from 'react';
import { HashLoader } from 'react-spinners';
import { css } from "@emotion/react";
import "./Loading.css";

const override = css`
  display:block;
  margin: 0px auto;
  border-color: "#F63E7B";
`;

const Loading = (loadingStatus) => {
    return (
        <div className='loading'>
            <HashLoader color={"#F63E7B"} loading={loadingStatus} css={override} size={45} />
        </div>
    );
};

export default Loading;