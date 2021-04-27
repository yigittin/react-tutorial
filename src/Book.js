import React from 'react';

const Book=(props)=>{
  const {img,title,author}=props;
  const clickHandler=()=>{
    alert('HELLO WORLD');
  };
  const complexExample=(author)=>{
    console.log(author);
  }
  return (
  <article className='book' onMouseOver={()=>{
    console.log(title);
  }}>
    <img className='imgBook' src={img} alt=''></img>
    <h1 onClick={()=>console.log(title)} className='textClass'>{title}</h1>
    <h4 className='textClass'>{author}</h4>
    <button className='btnClass' type="button" onClick={clickHandler}>REFERENCE</button>
    <button className='btnClass' type="button" onClick={()=>complexExample(author)}>complex example</button>
  </article>
  );
}

export default Book