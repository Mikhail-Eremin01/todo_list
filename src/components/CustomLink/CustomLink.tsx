import React from 'react';
import { Link, useMatch } from 'react-router-dom';

interface ICustomLink{
    to: string,
    text: string
}

function CustomLink({to, text}: ICustomLink) {
    const match = useMatch(to);

  return (
    <Link
        to = {to}
        style = {{
            color: match ? '#4165FF' : '#999999'
        }}
    >
        {text}
    </Link>
  )
}

export {CustomLink}