import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function About() {
  let match = useRouteMatch();
  return (
    <>
      About Works {match.params.userName}
    </>
  );
}