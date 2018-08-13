/* eslint-disable react/prop-types */
import React from 'react';
import {Case, ForEach, If, Switch} from 'react-control-flow-components';

const Test = ({index, item}) => <div>{item} ({index})</div>;

const Root = () => {
  console.log(
    {
      Case,
      ForEach,
      If,
      Switch
    }
  );
  return (
    <div>
      <h1>Switch Case</h1>
      <Switch test={1}>
        <Case value={0}>
          <div>This Case should NOT show</div>
        </Case>
        <Case value={1}>
          <div>This Case should show</div>
        </Case>
      </Switch>
      <h1>If</h1>
      <If test={1}>
        <div>This If should show</div>
      </If>
      <If test={0}>
        <div>This If should NOT show</div>
      </If>
      <h1>ForEach</h1>
      <ForEach items={['a', 'b', 'c']}
               component={Test}/>
    </div>
  );
}

export default Root;
