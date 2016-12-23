import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!<br />
            欢迎来到菜鸟教程学习！！！
            <p data-myattribute="somevalue">这是一个不错的js学习库</p>
            <p>jsx中可以使用js表达式，但是要用花括号括起来，例如：{1+1}</p>
         </div>
      );
   }
}

export default App;