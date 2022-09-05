import { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../actions/authActions"

class Dashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault()
        this.props.logoutUser()
    }

    render() {
        return (
            <>
                <h1>Dashboard</h1>
                <div className="btn-group m-1">
                    <button className="btn btn-outline-danger" onClick={this.onLogoutClick}><i className="fas fa-sign-out-alt"></i>Logout</button>
                </div>
            </>
        )
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard)