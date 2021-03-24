import React,{useState} from 'react';
import {connect, useDispatch, useSelector}  from 'react-redux'
import { addCommentAction } from '../../redux/actions/FakeBookAction';

export default function DemoReduxApp(props) {

    //useSelector thay cho mapStateToProps
    let comments = useSelector(state => state.FaKeBookReducer.comments);

    //Lay ham dispatch tu useDispatch => de gui gia tri len reducer (thay the cho mapDispatchToprops hoac this.props.dispatch)
    
    let dispatch = useDispatch();

    //Lay thong tin nguoi dung nhap vao
    let [userComment,setUserComment] = useState({
        name:'',
        content:'',
        avatar:''
    });
    console.log('userComment',userComment);
    const handleChange = (e) => {
        let {value,name} = e.target;

        setUserComment({
            ...userComment,
            [name]:value
        })
    }

    const handleComment = (e) => {
        e.preventDefault();//chan browser reload

        let usComment = {...userComment,avatar:`https://i.pravatar.cc/150?u=${userComment.name}`}

        // let action = {
        //     type: 'add_comment',
        //     userComment: usComment
        // }
        dispatch(addCommentAction(usComment))
    }

    return (
        <div className="container m-5">
            <div className="card-header">
                {comments.map((comment,index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="col-1">
                                <img src={comment.avatar} alt={comment.avatar} style={{height:60}} />
                            </div>
                            <div className="col-11">
                                <h6 className="text-danger">{comment.name}</h6>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    )
                })}
               
            </div>
            <form className="card-body" onSubmit={handleComment}>
               <div className="form-group">
                    <h4 className="card-title">Name</h4>
                    <input className="form-control" name="name" onChange={handleChange} />
               </div>
               <div className="form-group">
                   <h4 className="card-title">Content</h4>
                   <input className="form-control" name="content" onChange={handleChange} />
               </div>
               <div className="form-group">
                   <button className="btn btn-success">Send</button>
               </div>
            </form>
        </div>
    )
}
