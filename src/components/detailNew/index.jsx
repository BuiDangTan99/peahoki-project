import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
    const {detailNew} = props
    
    return (
        <div className='detail-new'>
            <div className="detail-new__img w-100">
                <img className='w-100' src={detailNew.urlToImage} alt="" />
            </div>
            <div className="detail-new__content" dangerouslySetInnerHTML={{__html: detailNew.content}}>
            </div>
            <div className="detail-new__action flex-center">
                <Button><a href={detailNew.url} target="_blank" rel="noreferrer">Open to original news</a></Button>
            </div>
        </div>
    );
}

export default Index;
