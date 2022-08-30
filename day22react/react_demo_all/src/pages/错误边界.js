// comp ErrorBoundary 
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
        // 你可以自定义降级后的 UI 并渲染
        return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}


// comp App


class App extends React.Component {
  state = {
      count: 1
  }
  render() {
    const { count } = this.state
    if (count === 3) {
        throw new Error('I crashed!');
    }
    return (
      <ErrorBoundary>
        <h1>App</h1>
        <p>{count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>add</button>
      </ErrorBoundary>
    )
  }
}
export default App;