import React from "react";

class Profile extends React.Component {
  //when a class components mount or render constructor is  called so best place to define state variable
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 1,
      useInfo: {
        name: "Danny Name",
        location: "Danny Location",
        avatar_url: "image",
      },
    };
    console.log(`${this.props.id} contructor`);
  }
  // Implement to create state in class based components
  // How to implement setCount()
  //Life Cycle Method
  async componentDidMount() {
    //Api Call call after the init render for 1 time
    const data = await fetch("https://api.github.com/users/MrBhuyan06");
    const json = await data.json();
    console.log(json);
    this.setState({
      useInfo: json,
    });
    console.log(`${this.props.id} components did Mount`);
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.state.count != prevState.count) {
      console.log("state is changed");
    }
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("components Will Mount is called");
  }

  render() {
    console.log(`${this.props.id} render`);
    let { count } = this.state;
    let { name, location, avatar_url } = this.state.useInfo;

    return (
      <div>
        <h1>ProfileSection({this.props.name})</h1>
        <h2>Name:{name}</h2>
        <img src={avatar_url} alt="" />
        <h2>Location:{location}</h2>
        <p>count{count}</p>
        <p>count2{this.state.count2}</p>
        <button
          onClick={() => {
            // Never ever mutated your state variable like this will never work like this
            // this.state = 3;
            // react hold or track all the state varibale in big object
            this.setState({
              count: (count += 1),
              //   count2: (this.state.count2 += 1),
            });
            this.setState({
              //   count: (count += 1),
              count2: (this.state.count2 += 2),
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default Profile;

/**
 * Life cycle method Output
 * parent-contructor
 parender- render
 firstcontructor
 first render
 secondcontructor
 second render
 Thirdcontructor
 Third render
 first components did Mount
second components did Mount
Third components did Mount
parents-components
 * 
 * 
 * 
 * 
 */
