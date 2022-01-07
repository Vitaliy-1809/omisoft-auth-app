import React, { Component } from 'react'
import Error500 from '../../pages/Error500/Error500'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  render () {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return <Error500 />
    }

    return children
  }
}

export default ErrorBoundary
