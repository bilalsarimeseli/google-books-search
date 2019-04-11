import React from "react";
import Button from "../Button";

function RemoveBookBtn(props) {
    return (
      <Button className="delete-btn" {...props} role="button" tabIndex="0">
        Delete
      </Button>
    );
  }

// class RemoveBookBtn extends React.Component {

//     state = {
//         showToast: false
//     }

//     // makeToast = (title) => {
//     //   console.log("toasted..")
//     //   return(
//     //   <div className="p-3 my-2 rounded">
//     //     <Toast>
//     //       <ToastHeader>
//     //         Reactstrap
//     //       </ToastHeader>
//     //       <ToastBody>
//     //         You added {title} to your bookshelf!
//     //       </ToastBody>
//     //     </Toast>
//     //   </div>
//     //   )
//     // }

//     deletefromDB = (book) => {
//         var dbBook = {
//           title: book.title,
//           authors: book.authors,
//           synopsis: book.synopsis,
//           thumbnail: book.thumbnail,
//           link: book.link
//         }
    
//         axios.delete("/api/books", dbBook)
//         .then(console.log("deleted"))
//         .catch(err => console.log(err))
//       }


//     render(){
//         return (
//             <Button onClick={()=>this.deletefromDB(this.props.id)}>
//                 Delete Book   
//             </Button>
//         )
//     }
    
//   }

  export default RemoveBookBtn;