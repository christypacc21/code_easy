// import * as React from 'react';
// // import { Dispatch } from 'redux';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import * as ChatActions from '../../src/redux/actions/chatActions';

// class cr_rating extends React.Component<{}, {}> {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   public render() {
//     return (
//       <div>
//         <div>
//           <p>How was the session with instructor_name?</p>
//         </div>
//         <div>STAR (to be done)</div>
//         <div>
//           <p>Write tour feedback</p>
//           {/* <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//             <textarea
//               type="text"
//               name="content"
//               placeholder="Type here..."
//               onChange={this.onChange}
//             />
//           </form> */}
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             onClick={
//               () =>
//                 this.props.createRating(rating).then(() => {
//                   this.props.history.goBack();
//                 }) //the params' names do i need to refer to somewhere?(ying goy not)
//             }
//           >
//             Submit
//           </button>
//         </div>
//         <div>
//           <Link to="/" className="btn btn-danger">
//             Rate later
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   ChatActions
// )(cr_rating);
