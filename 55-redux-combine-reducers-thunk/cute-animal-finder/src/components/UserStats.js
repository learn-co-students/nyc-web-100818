import React from 'react';
import { connect } from 'react-redux'; // it connects react to redux

// name your props so that it makes sense in the context of just this component
const UserStats = (props) => {
  const { users } = props;
  const total = users.length;
  const cats = users.filter(user => user.animalPreference === 'cats').length;
  const dogs = users.filter(user => user.animalPreference === 'dogs').length;
  // props.beef("pass in")
  console.log("props", props);
  return (
    <table className="pure-table stats">
      <thead>
        <tr>
          <th>Total</th>
          <th>Cats</th>
          <th>Dogs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{total}</td>
          <td>{cats}</td>
          <td>{dogs}</td>
        </tr>
      </tbody>
    </table>
  )
}


// What does this do?
//  => map state to props <= this is why it's called this
function mapStateToProps(state) {
  // the state in redux => to these props
  return {
    users: state.user.users, // a component has props, usually it gets props from above => state
    // users_two: 1 + 1
  }
}

// function mapDTP(dispatch) {
//   return {
//     beef: (arg) => dispatch({ type: "whatever", payload: arg })
//   }
// }
// dispatch => setState

// redux aware component
//connect => Higher Order Function => a function that takes in a function(s) returns a function
// returnedFunction => Higher Order Component => HOC
// const returnedFunction = connect()
export default connect(mapStateToProps)(UserStats);
