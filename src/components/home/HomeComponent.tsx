import React from 'react'
import BasicButtonCommon from '../commoncomponent/BasicButtonCommon'
// React have 2 types of component
// 1. Class component
// 2. function component

// 1. Class component => it is define purely on class basis. It have there own lifecycle. And it is used that lifecycle method to manipulate your component.

// state => state are work as variable to that related component

class HomeComponent extends React.Component<any, any> {
  // initialize class component
  // props => props are use to communicate 1 or more component with each other. We can send data from one component to another component using props.

  constructor (props: any) {
    super(props) // Direct access all content and method of extends class or inherited class
    this.state = {
      name: '',
      userarray: [],
      yesorno: false,
      phoneno: 12121,
      buttonProps: { variant: 'contained', label: 'Home Page Button' }
    } // State is private property of this component. It will use to process your data or strore data in different format into component
  }
  // lifecycle of component

  // 3 phased of class component life cycle
  // 1 phase => Mounting phase. It will use componentDidMount method. Render method this phase also
  componentDidMount () {
    // this.setState({
    //     name: 'Vision Sep Batch',
    //     userarray: ['Test1', 12121, 787878, 'Vision array']
    // });
    // console.log("Component mount with props value", this.props);
  }

  // 2 phase => It will trigger componet update and render the component. componentDidUpdate
  componentDidUpdate () {
    // if (this.state) {
    //     console.log("Component updated", this.state);
    //     this.callanothermethod();
    // }
    // it will use for dependency purpose.
    // componentDidUpdate will capture previouse update as well as current update of component state and props
  }

  // 3 phase => Unmount phase. Means while you close the component this phase has been trigger. To avoid memory leak from componet we can unsubscribe the all async call in this method.

  componentWillUnmount () {
    clearInterval('')
  }

  callanothermethod = () => {
    console.log('This method trigger based on state update')
  }

  changename = () => {
    this.setState({
      name: 'Vision Sep Batch',
      userarray: ['Test1', 12121, 787878, 'Vision array']
    })
    // console.log("Immediate state latest value", this.state);
    // setInterval(()=>{console.log("statement exe")}, 1000);
  }

  changeHandler = () => {
    console.log('method called in child')
  }

  render () {
    // const{arrayDetails, tesuser, localNumber} = this.props.userData
    // Destructing props object

    // return will execute the html element but that elements are define in JSX extention.
    // JSX => jsx is a extention which help to make normal html element into object type.
    // normal jsx will be in single container like using div element.
    // using fragment tag. <></>
    return (
      // <div className="homeClass">
      //     <div>
      //         <h1>This is my home component</h1>
      //         <h2>This is my home component</h2>
      //         <h3>This is my home component</h3>
      //     </div>
      // </div>
      // We can not assign any attrubutes for fragment tag
      <>
        <h1>I am home component</h1>
        {/* <p>{localNumber}</p> */}
        <h2>Array values</h2>
        {/* <ul>
                    {arrayDetails.map((item: any, index: any) =>
                        <li key={index}>{item}</li>
                    )}
                </ul> */}
        <input
          type='button'
          value={'Click Me'}
          onClick={this.props.changeHandler}
        />
        <BasicButtonCommon btnProps={this.state.buttonProps} />
      </>
    )
  }
}

export default HomeComponent
