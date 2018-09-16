var React = require('react');
var CreateReactClass = require('create-react-class');

var UserInfo = CreateReactClass({  
    render: function(){
        var Tela = () => {
            return <div/>;
        };

        if(this.props.user == null){
            console.log("vazio");
        }else{
            Tela = () => {
                return(
                    <div className="row">
                        <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140" />
                        <h2>{this.props.user.login}</h2>
                        <p>{this.props.user.name}</p>
                        <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
                        <p><a className="btn btn-default" href={this.props.user.html_url} role="button">View Details</a></p>
                    </div>
                );
            }
        }
        return(
            <Tela/>
        );    
    }
});

module.exports = UserInfo;