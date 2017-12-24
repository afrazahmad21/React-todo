import React, {Component} from 'react';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {'checked': false}
    }

    edit = (e) => {
        this.setState({'checked': true})
    }
    delete = (e) => {
        this.props.removeComment(this.props.index)
    }
    doneEdit = (e) => {
        this.setState({'checked': false})
        let newText = this.refs.newText.value;

        let index = this.props.index
        console.log("index", index, "newtext", newText)
        this.props.updateComment(index, newText)
    }
    renderTextArea = () => {
        return (
            <div>
                <textarea cols="10" rows="7" ref="newText" defaultValue={this.props.value}></textarea>
                <button onClick={this.doneEdit}>Done</button>
            </div>
        )
    }
    renderButtons = () => {
        return (
            <div>
                <p> {this.props.children}</p>
                <button className="edit" onClick={this.edit}>Edit {this.props.children}</button>
                <button className="delete" onClick={this.delete}>Delete {this.props.children}</button>
            </div>
        );
    }

    render() {
        let toRender;
        if (!this.state.checked) {
            toRender = this.renderButtons
        } else {
            toRender = this.renderTextArea
        }

        return (
            <div>{toRender()}</div>
        );
    }
}
class Board extends Component {
    constructor(props) {
        super(props);
       this.state = {
           'comments': props.comments
       }
    }

    removeComment = (index) => {
        console.log("removing comment", index)
        console.log("before", this.state.comments)
        let arr = this.state.comments
        arr.splice(index, 1)
        console.log('after', arr)
        this.setState({'comments': arr})
    }
    updateComment = (index, newText) => {
        console.log("updating comment with ", newText)
        let arr = this.state.comments
        arr[index] = newText
        console.log("new commments", arr)
        this.setState({'comments': arr})

    }
    eachComment = (comment, index) => {
        return (
            <App key={index} index={index} updateComment={this.updateComment} removeComment={this.removeComment} className="App-header"
                 value={comment}>
                {comment}
            </App>
        );
    }

    addNewComment = (e)=>{
        let comments = this.state.comments
        comments.push("New Comment")
        this.setState({'comments': comments})
    }
    render() {
        return (
            <div>
                <button onClick={this.addNewComment}>Add New TODO</button>
                {this.state.comments.map(this.eachComment)}
            </div>
        )
    }
}

export default Board;
