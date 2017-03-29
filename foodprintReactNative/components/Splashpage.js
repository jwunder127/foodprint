import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import { whoami } from '../reducers/authThunks'
import { Container, Content, Button } from 'native-base';
import {Text, Image} from 'react-native';
import {HomeContainer} from "../containers/HomeContainer";
import {LoginContainer} from "../containers/LoginContainer";


const styles = {
  container: {
    backgroundColor: '#f6e49c',
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  headline: {
    marginTop: 50,
    marginLeft: 90,
    color: '#505050',
    fontSize: 25,
    fontFamily: 'SpaceMono-Bold'
  },
  body: {
    marginTop: 60,
    marginLeft: 65,
    marginRight: 40,
    color: '#505050',
    fontFamily: 'SpaceMono-Bold'
  },
  button: {
    marginTop: 85,
    marginRight: 40,
    marginLeft: 40
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginLeft: 90
  }
};


export class Splashpage extends Component {
  constructor(props){
    super(props);
    this.determineNextPath = this.determineNextPath.bind(this);
  }

    componentDidMount() {
        this.props.whoami();
    }

    determineNextPath() {
        console.log('this button was pressed', this.props.auth)
        if (this.props.auth === null || this.props.auth === "") {
          console.log('in the if statement! Bro what wrong?');
          Actions.login();
        } else {
          console.log('in the else statement! Where are you going?')
            Actions.home()
        }
    }

    render() {
        return (
            <Container style={styles.container}>
              <Content>
                <Image style={styles.logo} source={require('../img/FoodPrint.png')}/>
                <Text style={styles.headline}>
                  Eat Smarter
                </Text>
                <Text style={styles.body}>
                  A food log to catalog and track all your meals, daily!
                </Text>
                <Button light block style={styles.button} onPress={() => {
                  if (this.props.auth === null || this.props.auth === "") {
                    Actions.login();
                } else {
                    console.log('in the else statement!')
                    Actions.mainTabBar()
                }
                }}>
                  <Text>Track Now
                  </Text>
                </Button>
              </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        whoami() {
            dispatch(whoami())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splashpage)