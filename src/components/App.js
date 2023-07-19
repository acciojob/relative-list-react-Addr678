import React from 'react';

const App = () => {
const relativeList = [
{ key: 'relativeListItem1', name: 'John' },
{ key: 'relativeListItem2', name: 'Emily' },
{ key: 'relativeListItem3', name: 'Michael' },
{ key: 'relativeListItem4', name: 'Sophia' },
{ key: 'relativeListItem5', name: 'Daniel' },
];

return (
<div id="main">
<h1>Diwali Shopping List</h1>
<ol key="relativeList">
{relativeList.map((relative) => (
<li key={relative.key}>{relative.name}</li>
))}
</ol>
</div>
);
};

export default App;