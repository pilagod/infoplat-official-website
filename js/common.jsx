
/**
 *  NavBar
 */

var NavBar = React.createClass({
  getInitialState: function(){
    return({data: []})
  },
  componentDidMount: function(){
    $.ajax({
        url: this.props.data,
        dataType: 'json',
        success: function(data){
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.data, status, err.toString());
        }.bind(this)
    })
  },
  render: function () {
    var linkNode = this.state.data.map(function (link, i) {
      return (
        <li key={i}>
            <a className="horizontal-vertical-center" href={link.url}>{link.title}</a>
        </li>
      )
    });
    return (
      <div className="content-wrapper">
        <div className="header">
          <img src="./imgs/icon/logo.svg"/>
        </div>
        <div className="content">
          <ul>{linkNode}</ul>
        </div>
      </div>
    );
  }
});

/**
 *  Footer
 */

var Footer = React.createClass({
  render: function () {
    return (
      <div className="width-50">
        <p>Infoplat.com</p>
        <p>Copyright © Infoplat All Right Reserved.</p>
      </div>
    );
  }
});


React.render(<NavBar data="./json/navbar.json"/>, document.getElementById('navbar'));
React.render(<Footer />, document.getElementById('footer'));

