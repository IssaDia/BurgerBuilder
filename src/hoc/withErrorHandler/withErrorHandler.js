import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Modal from '../../components/UI/Modal/Modal'

function withErrorHandler(WrapppedComponent, axios) {
  return class extends Component {
    state = {
      error: null,
    }
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null })
        return req
      })
      this.responseInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error })
        }
      )
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.request.eject(this.responseInterceptor)
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }
    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapppedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler
